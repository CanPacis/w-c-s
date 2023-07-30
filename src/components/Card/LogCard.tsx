import { Check, Eye } from "tabler-icons-react";
import style from "./LogCard.module.scss";
import { Log } from "@/data/logsSlice";

export function LogCard({ log }: { log: Log }) {
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        {log.type === "vote" ? <Check size={26} /> : <Eye size={26} />}

        <div className={style.content}>
          <p className={style.title}>{log.type}</p>
          <p>{log.message}</p>
        </div>
      </div>
      <span>{new Date(log.timestamp).toLocaleTimeString()}</span>
    </div>
  );
}
