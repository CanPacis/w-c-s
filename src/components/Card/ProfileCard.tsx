/* eslint-disable @next/next/no-img-element */
import { EmployeeDetailDTO } from "@/data/employeesSlice";
import style from "./ProfileCard.module.scss";
import { VotingStars } from "./VoteCard";
import { At, Phone, MapPins } from "tabler-icons-react";

export function ProfileCard({ employee }: { employee: EmployeeDetailDTO }) {
  return (
    <aside className={style.wrapper}>
      <div className={style.card}>
        <div className={style.bg}></div>
        <div className={style.image}>
          <img
            src={employee.image}
            alt={employee.firstName}
            width={120}
            height={120}
          />
        </div>
        <div className={style.content}>
          <div className={style.meta}>
            <p className={style.name}>
              {employee.firstName} {employee.lastName}
            </p>
            <p>
              <At size={16} />
              <span className={style.label}>Email: </span>
              <span>{employee.email}</span>
            </p>
            <p>
              <Phone size={16} />
              <span className={style.label}>Phone: </span>
              <span>{employee.phone}</span>
            </p>
            <p>
              <MapPins size={16} />
              <span className={style.label}>Address: </span>
              <span>{employee.address}</span>
            </p>
          </div>
          <div className={style.vote}>
            <p>{employee.voteCount} votes</p>
            <VotingStars id={employee.id} value={employee.points} />
          </div>
        </div>
      </div>
    </aside>
  );
}
