import { CategoryType, ExerciseType } from "@/types";
import Cards from "./Cards";
import ExerciseCard from "./ExerciseCard";

interface ListExercisesProps {
    exercises: ExerciseType[];
}

const ListExercises:React.FC<ListExercisesProps> = async ({exercises}) => {


  if (exercises.length === 0) {
    return <div className="mt-4 text-neutral-400">Under Maintenace</div>;
  } else {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-4">
        {exercises.map((item) => (
          <ExerciseCard exercise={item} />
        ))}
      </div>
    );
  }
};

export default ListExercises;
