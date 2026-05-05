import "./globals.css";

export const metadata = {
  title: "Ecommerce Store",
  description: "Basic ecommerce app using Next.js, Express, and MongoDB"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
