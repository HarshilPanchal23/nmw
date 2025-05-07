'use client'
import { redirect } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function Home({ children }: { children: ReactNode }) {// NOTE: this immediately redirects on render (not recommended for layout/pages)
  return <Provider store={store}>{children}</Provider>;
}
