import style from "./VotingArea.module.scss";
import { Card } from "@/components/Card/Card";

export function VotingArea() {
  return (
    <div className={style.wrapper}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
