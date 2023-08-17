
import Options from "@/app/components/Options";
import { CategoryType } from "@/types";
import Image from "next/image";
import Cards from "./components/Cards";

async function getCategory() {
  const res = await fetch(`${process.env.BASE_URL}/api/category`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Home() {
  const category: CategoryType[] = await getCategory();

  return (
    <div className="justify-center flex">
      <div className="mt-72 text-center flex-col w-[80%] justify-center">
        <div className="text-5xl uppercase font-bold italic">Workouts</div>
        <div className="pt-2 text-md">Find Your Best Plan</div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-4">
        {category.map((item) => (
          <Cards category={item} />
        ))}
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}
