import { EmployeeDTO } from "@/data/data";
import style from "./VotingArea.module.scss";
import { Card } from "@/components/Card/Card";
export function VotingArea({ employees }: { employees: EmployeeDTO[] }) {
  return (
    <div className={style.wrapper}>
      {employees.map((employee) => (
        <Card key={employee.id} data={employee} />
      ))}
    </div>
  );
}
