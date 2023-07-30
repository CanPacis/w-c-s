import style from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={style.footer}>
      <span>Developed, as a case study, for <a href="https://www.wingie.com/">Wingie Group</a> | 2023</span>
    </footer>
  );
}
