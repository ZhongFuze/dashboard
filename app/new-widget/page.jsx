"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import dynamic from "next/dynamic";

const Graph = dynamic(() => import("@components/GraphG6"), { ssr: false });

import Pipeline from "@components/Pipeline";
import useSWR from "swr";

export const fetcher = async (url, options) => {
  try {
    const res = await fetch(url, options).then((res) => res.json());
    return res;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const NewWidget = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { data, isLoading, error } = useSWR(
    `http://localhost:11111/data_server/mydata/myaction?name=${session?.user.id}`,
    fetcher
  );
    console.log(data,'data')
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
