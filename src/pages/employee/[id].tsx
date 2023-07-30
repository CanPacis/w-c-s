import { ProfileCard } from "@/components/Card/ProfileCard";
import { Header } from "@/components/Header/Header";
import { SplashText } from "@/components/SplashText/SplashText";
import client from "@/data/apollo-client";
import { EmployeeDetailDTO } from "@/data/employeesSlice";
import { createLog, pushLog } from "@/data/logsSlice";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Users } from "tabler-icons-react";

export default function EmployeePage({
  employee,
}: {
  employee: EmployeeDetailDTO;
}) {
  const dispatch = useDispatch();
  const [eventPushed, setEventPushed] = useState(false);

  useEffect(() => {
    if (!eventPushed) {
      dispatch(pushLog(createLog("visit", { id: employee.id })));
      setEventPushed(true);
    }
  }, [employee.id, dispatch, eventPushed]);

  return (
    <>
      <Header />
      <main>
        <SplashText
          icon={<Users size={80} stroke="#f5a525" strokeWidth={1.5} />}
        >
          {`Employees are the backbone of any successful corporation, as their
          dedication, skills, and contributions drive the organization's
          growth and prosperity. Here is ${employee.firstName} ${employee.lastName}`}
        </SplashText>
        <ProfileCard employee={employee} />
      </main>
    </>
  );
}

export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;

  const { data } = await client.query({
    query: gql`
      query Employee {
        employee(id: "${id}") {
          id
          firstName
          lastName
          email
          phone
          address
          points
          image
          voteCount
        }
      }
    `,
  });

  return {
    props: { employee: data.employee },
  };
}
