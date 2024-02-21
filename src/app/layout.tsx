import type { Metadata } from "next";
import {
  Inconsolata,
  JetBrains_Mono,
  Roboto_Condensed,
  Source_Code_Pro,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import "maplibre-gl/dist/maplibre-gl.css";
import { LayerProvider } from "@/components/LayerProvider";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

const inconsolata = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Greenprint",
  description: "Explore environmental geographic data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${robotoCondensed.variable} ${inconsolata.variable}`}
    >
      <LayerProvider>
        <body className="flex h-screen flex-col">
          <Navbar />
          {children}
        </body>
      </LayerProvider>
    </html>
  );
}
