"use client"

import ListExercises from "@/components/ListExercises";
import { ExerciseType } from "@/types";
import { HiArrowLeft } from "react-icons/hi";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

async function getExercises() {


  const res = await fetch(`http://localhost:3000/api/exercise?categoryId=11`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Performance() {

  const router = useRouter();
  const exercise: ExerciseType[] = await getExercises();
  console.log(exercise);

  return (
    <div className="justify-center flex">
      <div className="mt-24">
        <div onClick={() => router.push("/")} className="group flex gap-x-1 items-center capitalize hover:text-emerald-600">
          <HiArrowLeft className="group-hover:-translate-x-1 transition" />
          back to categories
        </div>
        <div className="capitalize text-2xl font-bold">
          Enhance performance workout plans
        </div>
        <div className="text-black">
          <ListExercises exercises={exercise} />
        </div>
      </div>
    </div>
  );
}
