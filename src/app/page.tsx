"use client";
import { Apply } from "@/Components/Buttons/Apply";
import { Delete } from "@/Components/Buttons/Delete";
import { Comboboxs } from "@/Components/Comboboxs/Comboboxs";
import { Preview } from "@/Components/Preview";
import { useGet } from "@/hooks/useGet";
import { useEffect, useState } from "react";

export default function Home() {
  const { getCountries } = useGet();
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <main className="flex min-h-screen flex-col  justify-between p-3" id="main">
      <Comboboxs />
      <div className="flex justify-end">
        <Preview />
      </div>
      <div className="flex gap-4 justify-end p-5">
        <Apply />
        <Delete />
      </div>
    </main>
  );
}
