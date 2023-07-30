import style from "./Header.module.scss";
import { Poppins } from "next/font/google";
import clsx from "clsx";

const poppins = Poppins({ weight: ["900"], subsets: ["latin"] });

export function Header() {
  return (
    <header className={clsx(style.header, poppins.className)}>
      <span className={style.logo}>Vote!</span>
    </header>
  );
}
