import React from "react";
import style from "./SplashText.module.scss";

export function SplashText({
  children,
  icon,
}: {
  children: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className={style.wrapper}>
      <p data-content={children} className={style.content}>
        {children}
      </p>
      {icon}
    </div>
  );
}
