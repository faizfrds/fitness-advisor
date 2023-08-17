"use client";

import useIdModal from "@/store/idStore";

import { CategoryType } from "@/types";
import Link from "next/link";

interface CardsProps {
  category: CategoryType;
}

const Cards: React.FC<CardsProps> = ({ category }) => {
  return (
    <Link href={`/${category.title}`}>
      <div className="lg:relative group flex flex-col rounded-md items-center overflow-hidden bg-neutral-100 hover:bg-neutral-200/80 cursor-pointer transition p-5 w-[220px]">
        <div className="text-lg font-bold text-emerald-800 mb-2 capitalize">
          {category.name}
        </div>
      </div>
    </Link>
  );
};

export default Cards;
