/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import style from "./Card.module.scss";
import clsx from "clsx";
import { Star, StarHalf } from "tabler-icons-react";
import { EmployeeDTO } from "@/data/data";

export function Card({ data }: { data: EmployeeDTO }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className={style.wrapper}>
      <div className={style.card}>
        <img className={style.image} alt="employee image" src={data.image} />
        <div className={style.content}>
          <div className={style.meta}>
            <p className={style.name}>
              {data.firstName} {data.lastName}
            </p>
            <p className={style.subtitle}>124 votes • {data.points}/5</p>
          </div>
          <div>
            <VotingStars value={data.points} />
          </div>
        </div>
      </div>
      <motion.div className={clsx(style.fade, style.short)}></motion.div>
      <motion.div className={clsx(style.fade, style.long)}></motion.div>
    </motion.div>
  );
}

const MAX_STARS = 5;

function VotingStars({ value }: { value: number }) {
  return (
    <div className={style.stars}>
      {Array.from({ length: MAX_STARS }).map((_, index) => {
        if (index < Math.round(value)) {
          return <Star key={index} fill="white" />;
        }

        return <Star key={index} />;
      })}
    </div>
  );
}
