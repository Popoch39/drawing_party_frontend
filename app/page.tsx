"use client";
import { useQuery } from "@tanstack/react-query";

interface Itest {
  res: {
    ok: boolean;
  };
  id: number;
  products: {
    title: string;
  }[];
}

const fetchData = async (): Promise<Itest> => {
  const res = await fetch("https://dummyjson.com/carts/1");
  return await res.json();
};

export default function Home() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchData,
  });

  if (isPending) {
    return <div>Ca charge...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }
  console.log(data);
  return <div>{JSON.stringify(data.products.map((p) => p.title))}</div>;
}
