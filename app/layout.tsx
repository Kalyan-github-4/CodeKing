import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Jersey_10 } from "next/font/google";
import "./globals.css";
import { Provider } from "./Provider";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GameFont = Jersey_10({
  variable: "--font-game",
  subsets: ["latin"],
  weight:["400"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "CodeKing",
  description: "The ultimate platform for mastering coding skills and leveling up your programming journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressContentEditableWarning className="dark" style={{colorScheme: "dark"}}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${GameFont.variable} ${inter.variable} antialiased`}
      >
        <Provider 
        attribute="class"
        defaultTheme="dark" enableSystem  disableTransitionOnChange

        >

        {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
