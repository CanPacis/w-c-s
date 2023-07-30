import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Log =
  | {
      id: string;
      type: "visit";
      payload: VisitPayload;
      timestamp: number;
      message: string;
    }
  | {
      id: string;
      type: "vote";
      payload: VotePayload;
      timestamp: number;
      message: string;
    };

export type VisitPayload = {
  id: string;
};

export type VotePayload = {
  id: string;
  vote: number;
};

export type LogsState = {
  value: Log[];
};

const initialState: LogsState = {
  value: [],
};

function isDuplicate(logs: Log[], log: Log) {
  const timeExists =
    logs.findIndex((l) => l.timestamp === log.timestamp) !== -1;

  if (timeExists) {
    return true;
  }

  const lastLog = logs.at(-1);

  if (logs.length > 0 && lastLog && log.timestamp - lastLog.timestamp < 20) {
    return true;
  }

  return false;
}

export const logsSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {
    pushLog: (state, action: PayloadAction<Log>) => {
      if (!isDuplicate(state.value, action.payload)) {
        state.value.push(action.payload);
      }
    },
  },
});

export const { pushLog } = logsSlice.actions;

export function createLog<T extends Log["type"]>(
  type: T,
  payload: T extends "visit" ? VisitPayload : VotePayload
): Log {
  switch (type) {
    case "visit":
      return {
        id: crypto.randomUUID(),
        type,
        payload,
        timestamp: Date.now(),
        message: `User visited ${payload.id} profile`,
      };
    case "vote":
      return {
        id: crypto.randomUUID(),
        type,
        payload,
        timestamp: Date.now(),
        message: `User voted ${payload.id} with ${
          (payload as VotePayload).vote
        } points`,
      } as Log;
    default:
      throw new Error(`Unknown log type: ${type}`);
  }
}

export default logsSlice.reducer;
