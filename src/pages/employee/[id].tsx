import { Header } from "@/components/Header/Header";
import client from "@/data/apollo-client";
import { EmployeeDetailDTO } from "@/data/employeesSlice";
import { gql } from "@apollo/client";

export default function EmployeePage({ employee }: { employee: EmployeeDetailDTO }) {
  console.log(employee)

  return (
    <>
      <Header />
      <main>
        <div>
          <p>{employee.firstName} {employee.lastName}</p>
          <p>{employee.email}</p>
        </div>
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
