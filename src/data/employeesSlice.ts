import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type EmployeeDTO = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  points: number;
  image: string;
  voteCount: number;
};

export type EmployeeDetailDTO = EmployeeDTO & {
  phone: string;
  address: string;
};

export interface EmployeesState {
  value: EmployeeDTO[];
}

const initialState: EmployeesState = {
  value: [],
};

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<EmployeeDTO[]>) => {
      const employees = action.payload.map((e, i) => ({
        ...e,
        image: `https://picsum.photos/id/${i + 100}/1000/800`,
      }));
      state.value = employees;
    },

    voteEmployee: (
      state,
      action: PayloadAction<{ id: string; vote: number }>
    ) => {
      const employee = state.value.find((e) => e.id === action.payload.id);
      if (employee) {
        const points = employee.points * employee.voteCount;
        employee.points =
          (points + action.payload.vote) / (employee.voteCount + 1);
        employee.voteCount += 1;
      }
    },
  },
});

export const { setEmployees, voteEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
