import { LogCard } from "@/components/Card/LogCard";
import { Header } from "@/components/Header/Header";
import { RootState } from "@/data/store";
import { useSelector } from "react-redux";

export default function LogsPage() {
  const logs = useSelector((state: RootState) => state.logs);
  const list = new Array(...logs.value);

  return (
    <>
      <Header />
      <main>
        {list.length === 0 && (
          <div className="empty">
            <p>No logs yet</p>
          </div>
        )}
        {list.reverse().map((log) => (
          <LogCard log={log} key={log.id} />
        ))}
      </main>
    </>
  );
}
