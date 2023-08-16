"use client"

import { create} from "zustand";
import useIdModal from "@/store/idStore";

import { CategoryType, ExerciseType } from "@/types";
import Link from "next/link";

interface ExerciseCardProps {
  exercise: ExerciseType;
}

function onClick () {
    const id = useIdModal.bind
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  return (
    <div className="lg:relative group flex flex-col rounded-md items-center overflow-hidden bg-neutral-100 hover:bg-neutral-200/80 cursor-pointer border-spacing-2 border border-black transition p-5 w-[220px]">

        <div className="text-lg mb-2 capitalize font-bold">
          {exercise.title}
        </div>
        <div className="capitalize">
            {exercise.description}
        </div>

    </div>
  );
};

export default ExerciseCard;
