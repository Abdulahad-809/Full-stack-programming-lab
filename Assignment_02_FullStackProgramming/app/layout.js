import "./globals.css";

export const metadata = {
  title: "HOTSPRING Portable Spas",
  description: "Next.js version of the Hottub React app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
