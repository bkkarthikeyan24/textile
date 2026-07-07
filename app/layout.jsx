import "./globals.css";

export const metadata = {
  title: "Online Textile Shopping",
  description: "A stylish textile shopping starter built with Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
