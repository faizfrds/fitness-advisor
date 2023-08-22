import ListExercises from "@/components/ListExercises";
import { ExerciseType } from "@/types";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  async function getExercises() {

    console.log(searchParams);

    const res = await fetch(
      `${process.env.BASE_URL}/api/exercise?categoryId=${params.slug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.log(res);
    }
    return res.json();
  }

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
          build strength workout plans
        </div>
        <div className="text-black">
          <ListExercises exercises={exercise} />
        </div>
      </div>
    </div>
  );
}
