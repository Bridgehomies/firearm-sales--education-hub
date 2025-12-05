import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Apex Arms - Premium Firearms, Ammunition & Accessories",
  description: "Your trusted source for quality firearms, ammunition, and accessories. Licensed FFL dealer serving responsible gun owners since 1995. Shop handguns, rifles, shotguns, and more.",
  keywords: "firearms, guns, ammunition, handguns, rifles, shotguns, FFL dealer, gun shop",
  openGraph: {
    title: "Apex Arms - Premium Firearms & Accessories",
    description: "Licensed FFL dealer offering quality firearms, ammunition, and accessories since 1995.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        
        <div className="max-w-[1200px] w-full mx-auto">
          {children}
        </div>
        
        <Toaster />
        <VisualEditsMessenger />
      </body>

    </html>
  );
}