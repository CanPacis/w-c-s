import style from "./Header.module.scss";
import { Poppins } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";

const poppins = Poppins({ weight: ["900"], subsets: ["latin"] });

export function Header() {
  return (
    <header className={clsx(style.header, poppins.className)}>
      <Link href="/">
        <span className={style.logo}>Vote!</span>
      </Link>
    </header>
  );
}
