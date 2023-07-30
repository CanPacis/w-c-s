/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import style from "./Card.module.scss";
import clsx from "clsx";

const image = "https://source.unsplash.com/random/#11755";

export function Card() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className={style.wrapper}>
      <div className={style.card}>
        <img className={style.image} alt="employee image" src={image} />
        <div className={style.content}>
          <span className={style.name}>Muhammed Ali CAN</span>
        </div>
      </div>
      <motion.div className={clsx(style.fade, style.short)}></motion.div>
      <motion.div className={clsx(style.fade, style.long)}></motion.div>
    </motion.div>
  );
}
