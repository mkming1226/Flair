"use client";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar>{children}</Navbar>
    </>
  );
}
