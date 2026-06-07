"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { clearAuth, getToken, getUser, saveAuth } from "@/lib/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Auth state is restored after mount so server rendering never reads localStorage.
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const restoreSession = async () => {
      const token = getToken();
      if (!token) {
        setLoading(false);
        return;
      }

      setUser(getUser());

      try {
        const { data } = await api.get("/auth/profile");
        setUser(data.user);
        saveAuth(token, data.user);
      } catch {
        clearAuth();
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  const saveSession = (token, nextUser) => {
    saveAuth(token, nextUser);
    setUser(nextUser);
  };

  const logout = () => {
    clearAuth();
    setUser(null);
    router.replace("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, saveSession, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
