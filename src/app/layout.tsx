import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "¡Súper Hérootes Matemáticos! - Juego Educativo",
  description: "Juego de mesa digital educativo de superhéroes para practicar suma, conteo y reconocimiento numérico. Para niños de 4 a 8 años.",
  keywords: ["juego educativo", "superhéroes", "matemáticas", "niños", "suma", "tablero"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
