import ListExercises from "@/components/ListExercises";
import { ExerciseType } from "@/types";
import { HiArrowLeft } from "react-icons/hi";
import React from "react";
import Link from "next/link";

async function getExercises() {
  const res = await fetch(`${process.env.VERCEL_URL}/api/exercise?categoryId=10`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Muscle() {
  const exercise: ExerciseType[] = await getExercises();
  console.log(exercise);

  return (
    <div className="justify-center flex">
      <div className="mt-24">
        <Link href={"/"}>
          <div className="group flex gap-x-1 items-center capitalize hover:text-emerald-600">
            <HiArrowLeft className="group-hover:-translate-x-1 transition" />
            back to categories
          </div>
        </Link>
        <div className="capitalize text-2xl font-bold">
          Get Fit workout plans
        </div>
        <div className="text-black">
          <ListExercises exercises={exercise} />
        </div>
      </div>
    </div>
  );
}


export const runtime = "edge";