import "./globals.css";

export const metadata = {
  title: "Revlift",
  description: "A comprehensive Car Wiki",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}