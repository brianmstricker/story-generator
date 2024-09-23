import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { headerFont, mainFont } from "./fonts";
import Navbar from "@/components/global/Navbar";

export const metadata: Metadata = {
 title: "Scriptor - AI Story Generator",
 description: "Create any kind of story you can think of, or have Scriptor generate one for you.",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en" suppressHydrationWarning>
   <body
    className={cn("min-h-screen bg-background text-foreground font-sans antialiased flex flex-col", mainFont.variable, headerFont.variable)}
   >
    <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
     <Navbar />
     {children}
    </ThemeProvider>
   </body>
  </html>
 );
}
