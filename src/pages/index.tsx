import Head from "next/head";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { VotingArea } from "@/components/VotingArea/VotingArea";
import { gql } from "@apollo/client";
import client from "@/data/apollo-client";
import { EmployeeDTO, setEmployees } from "@/data/employeesSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SplashText } from "@/components/SplashText/SplashText";
import { DiscountCheck } from "tabler-icons-react";

export default function Home({ employees }: { employees: EmployeeDTO[] }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEmployees(employees));
  }, [dispatch, employees]);

  return (
    <>
      <Head>
        <title>Vote!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <SplashText
          icon={<DiscountCheck size={80} stroke="#f5a525" strokeWidth={1.5} />}
        >
          Empower your workplace community with our interactive web app, where
          every voice counts! Vote for the Employee of the Month and celebrate
          outstanding achievements together, fostering a culture of appreciation
          and recognition.
        </SplashText>
        <VotingArea />
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Employees {
        employees {
          id
          firstName
          lastName
          email
          points
          image
          voteCount
        }
      }
    `,
  });

  return {
    props: { employees: data.employees },
  };
}
