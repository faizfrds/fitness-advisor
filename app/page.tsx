
import Options from "@/app/components/Options";
import Image from "next/image";

export default function Home() {
  return (
    <div className="justify-center flex">
      <div className="mt-72 text-center flex-col w-[80%] justify-center">
        <div className="text-5xl uppercase font-bold italic">Workouts</div>
        <div className="pt-2 text-md">Find Your Best Plan</div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-4">
            <Options />
          </div>
        </div>
      </div>
    </div>
  );
}
