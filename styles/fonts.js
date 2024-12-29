import { Roboto, Roboto_Condensed } from "next/font/google";
import { Poppins } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const robotoCondensed = Roboto_Condensed({
    subsets: ["latin"],
    weight: ["400", "700"],
});
