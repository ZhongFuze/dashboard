"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import dynamic from "next/dynamic";

const Graph = dynamic(
  () => import('@components/GraphG6'),
  { ssr: false }
)

import Pipeline from "@components/Pipeline";


const NewWidget = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/proxy?name=${session?.user.id}`);
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data: Internal Server Error");
      }
    };

    fetchData();
    // if (session?.user.id) {
      // fetchData();
    // }
  }, [session?.user.id]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  return (
    <div>
      <Pipeline data={data} />
      <Graph data={data} />
    </div>
  );
};

export default NewWidget;