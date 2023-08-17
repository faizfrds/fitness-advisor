"use client";

import { useState } from "react";
import { HiSearch } from "react-icons/hi";

const Discover = () => {
  const [open, setIsOpen] = useState(false);
  const [tab, setTab] = useState<number>();

  const initialState = {
    height: 0,
    weight: 0,
  };
  const [inputs, setInputs] = useState(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const calculate = (height: number, weight: number) => {
    const category = height / weight;

    if (category > 3.33) {
      setTab(1);
    } else if (category < 1.96) {
      setTab(2);
    } else {
      setTab(3);
    }
  };

  return (
    <div className="justify-center flex">
      <div className="flex-col">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="mt-10 p-2 text-white bg-emerald-800 hover:bg-emerald-600 cursor pointer rounded-full"
        >
          What plan is for me?
        </button>

        {open ? (
          <div className="bg-emerald-800/60 w-[50vh] h-fit mt-2 p-4 rounded-lg text-white justify-center flex">
            <div className="">
              <form
                onSubmit={() => {}}
                className=" flex gap-y-2 w-fit justify-between items-center"
              >
                <h1 className="pr-1">Height (in cm):</h1>
                <input
                  onChange={handleChange}
                  className="text-black px-2 rounded-md "
                  type="number"
                  name="height"
                  min="20"
                  max="300"
                />

                <h1 className="pl-6 pr-1">Weight (in kg):</h1>
                <input
                  onChange={handleChange}
                  className="text-black px-2 rounded-md"
                  type="number"
                  name="weight"
                  min="20"
                  max="600"
                />

                <HiSearch
                  onClick={() => {
                    const category = inputs.height / inputs.weight;

                    if (category > 3.33) {
                      setTab(1);
                    } else if (category < 1.96) {
                      setTab(2);
                    } else {
                      setTab(3);
                    }
                  }}
                  className="ml-7 text-white cursor-pointer hover:scale-105"
                  size={20}
                />
              </form>

              <h1
                className={
                  "pt-4 text-xl font-bold text-white " +
                  (tab === 1 ? "block" : "hidden")
                }
              >
                Build Muscle
              </h1>
              <h1
                className={
                  "pt-4 text-xl font-bold text-white " +
                  (tab === 2 ? "block" : "hidden")
                }
              >
                Lose Weight
              </h1>
              <h1
                className={
                  "pt-4 text-xl font-bold text-white " +
                  (tab === 3 ? "block" : "hidden")
                }
              >
                Build Strength
              </h1>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Discover;
