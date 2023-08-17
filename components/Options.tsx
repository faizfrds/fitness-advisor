import { CategoryType } from "@/types";
import Cards from "./Cards";
import axios from "axios";

async function getCategory() {
  const res = await fetch(`${process.env.VERCEL_URL}/api/category`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

const Options = async () => {
  const category: CategoryType[] = await getCategory();
  console.log(category);

  if (category.length === 0) {
    return <div className="mt-4 text-neutral-400">Under Maintenace</div>;
  } else {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-4">
        {category.map((item) => (
          <Cards category={item} />
        ))}
      </div>
    );
  }
};

export default Options;


