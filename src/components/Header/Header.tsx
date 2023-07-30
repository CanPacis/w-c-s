import style from "./Header.module.scss";
import { Poppins } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";

const poppins = Poppins({ weight: ["900"], subsets: ["latin"] });

export function Header() {
  return (
    <header className={style.header}>
      <Link href="/">
        <span className={clsx(style.logo, poppins.className)}>Vote!</span>
      </Link>
      <nav>
        <Link href="/logs">Logs</Link>
      </nav>
    </header>
  );
}
