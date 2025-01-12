"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface TanstackQueryProvider {
  children: ReactNode;
}

const TanstackQueryProvider: React.FC<TanstackQueryProvider> = ({
  children,
}) => {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default TanstackQueryProvider;
