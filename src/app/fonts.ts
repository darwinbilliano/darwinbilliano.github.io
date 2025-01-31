import { Nunito_Sans, Space_Grotesk } from "next/font/google";

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

void [nunito, spaceGrotesk];
