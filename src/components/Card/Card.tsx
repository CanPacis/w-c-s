/* eslint-disable @next/next/no-img-element */
import style from "./Card.module.scss";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Star } from "tabler-icons-react";
import { useState } from "react";
import { EmployeeDTO, voteEmployee } from "@/data/employeesSlice";
import { useDispatch } from "react-redux";
import { getCssVar } from "@/util/misc";
import Link from "next/link";

export function Card({ data }: { data: EmployeeDTO }) {
  const voteLabel = data.voteCount === 1 ? "vote" : "votes";

  return (
    <motion.div whileHover={{ scale: 1.05 }} className={style.wrapper}>
      <div className={style.card}>
        <img className={style.image} alt="employee image" src={data.image} />
        <div className={style.content}>
          <div className={style.meta}>
            <Link href={`/employee/${data.id}`}>
              <p className={style.name}>
                {data.firstName} {data.lastName}
              </p>
            </Link>
            <Link href={`/employee/${data.id}`}>
              <p className={style.subtitle}>
                {data.voteCount} {voteLabel} • {data.points.toFixed(1)}/5
              </p>
            </Link>
            <Link href={`/employee/${data.id}`}>
              <p title={data.email} className={style.email}>
                {data.email}
              </p>
            </Link>
          </div>
          <div>
            <VotingStars id={data.id} value={data.points} />
          </div>
        </div>
      </div>
      <motion.div className={clsx(style.fade, style.short)}></motion.div>
      <motion.div className={clsx(style.fade, style.long)}></motion.div>
    </motion.div>
  );
}

const MAX_STARS = 5;

function VotingStars({ value, id }: { value: number; id: string }) {
  const orange = getCssVar("--primary-color");
  const dispatch = useDispatch();
  const [mouseOverIndex, setMouseOverIndex] = useState<number | null>(null);

  const handleMouseOver = (index: number) => {
    setMouseOverIndex(index);
  };

  const handleMouseLeave = () => {
    setMouseOverIndex(null);
  };

  const handleClick = (index: number) => {
    dispatch(voteEmployee({ id, vote: index + 1 }));
  };

  const isHighlighted = (index: number) => {
    if (mouseOverIndex === null) {
      return false;
    }

    return mouseOverIndex >= index;
  };

  return (
    <div className={style.stars}>
      {Array.from({ length: MAX_STARS }).map((_, index) => {
        if (index < Math.round(value)) {
          return (
            <motion.span
              onClick={() => handleClick(index)}
              onMouseLeave={handleMouseLeave}
              onMouseOver={() => handleMouseOver(index)}
              whileHover={{ scale: 1.1 }}
              key={index}
              title={`Vote ${index + 1} points`}
            >
              <Star
                fill={isHighlighted(index) ? orange : "white"}
                stroke={isHighlighted(index) ? orange : "white"}
              />
            </motion.span>
          );
        }

        return (
          <motion.span
            onClick={() => handleClick(index)}
            onMouseLeave={handleMouseLeave}
            onMouseOver={() => handleMouseOver(index)}
            whileHover={{ scale: 1.1 }}
            key={index}
            title={`Vote ${index + 1} points`}
          >
            <Star
              fill={isHighlighted(index) ? orange : "transparent"}
              stroke={isHighlighted(index) ? orange : "white"}
            />
          </motion.span>
        );
      })}
    </div>
  );
}
