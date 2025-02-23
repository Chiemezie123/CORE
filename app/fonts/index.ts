import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      path:"./satoshi/Satoshi-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./satoshi/Satoshi-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./satoshi/Satoshi-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./satoshi/Satoshi-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export default satoshi;