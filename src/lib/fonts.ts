import localFont from "next/font/local";

export const jetbrainsMono = localFont({
  src: [
    {
      path: "../fonts/JetBrainsMono/JetBrainsMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/JetBrainsMono/JetBrainsMono-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/JetBrainsMono/JetBrainsMono-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/JetBrainsMono/JetBrainsMono-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/JetBrainsMono/JetBrainsMono-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/JetBrainsMono/JetBrainsMono-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/JetBrainsMono/JetBrainsMono-Light.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/JetBrainsMono/JetBrainsMono-LightItalic.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/JetBrainsMono/JetBrainsMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/JetBrainsMono/JetBrainsMono-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/JetBrainsMono/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/JetBrainsMono/JetBrainsMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/JetBrainsMono/JetBrainsMono-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/JetBrainsMono/JetBrainsMono-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/JetBrainsMono/JetBrainsMono-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-jetbrains-mono",
});

export const openSans = localFont({
  src: [
    {
      path: "../fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf",
      style: "normal",
    },
    {
      path: "../fonts/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-open-sans",
});

export const rubik = localFont({
  src: [
    {
      path: "../fonts/Rubik/Rubik-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../fonts/Rubik/Rubik-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-rubik",
});

export const cooper = localFont({
  src: [
    {
      path: "../fonts/Cooper/cooperhewitt-medium-webfont.woff",
      style: "normal",
    },
    {
      path: "../fonts/Cooper/cooperhewitt-medium-webfont.woff2",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--cooper-hewitt",
});
