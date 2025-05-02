import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "./styles/globals.css";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const notoSansDisplay = Noto_Sans_Display({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christian Cox",
  description: "live laugh love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansDisplay.variable} antialiased bg-black`}>
        <NavigationMenu className="">
          <NavigationMenuList className="flex flex-nowrap w-screen m-1 gap-9">
            <NavigationMenuItem>
              <Link href="" passHref>
                <NavigationMenuLink className="text-white">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="" passHref>
                <NavigationMenuLink className="text-white">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="" passHref>
                <NavigationMenuLink className="text-white">
                  Resumé
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="" passHref>
                <NavigationMenuLink className="text-white">
                  Github
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {children}
      </body>
    </html>
  );
}
