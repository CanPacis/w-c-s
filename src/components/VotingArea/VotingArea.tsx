import style from "./VotingArea.module.scss";
import { Card } from "@/components/Card/Card";
import { useSelector } from "react-redux";
import { RootState } from "@/data/store";
export function VotingArea() {
  const employees = useSelector((state: RootState) => state.employees.value);

  return (
    <div className={style.wrapper}>
      {employees.map((employee) => (
        <Card key={employee.id} data={employee} />
      ))}
    </div>
  );
}
