import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { AuthProvider } from "./context/AuthContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Nexlink-io',
  description: 'A rag application for chating with pdf, docs, and more',
  icons: {
    icon: '/logo.png',
  },
};

// Export viewport separately
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider >

          {children}  
        </AuthProvider>
      </body>
    </html>
  );
}
