import { useEffect, useState } from "react";

import Meta from "../Shared/Meta";
import FoodCard from "./FoodCard";
import AllFoodBanner from "./AllFoodBanner";

const AllFood = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [foods, setFoods] = useState([]);
  const [filter, setFilter] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPages = 9;
  console.log(foods);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/allfoods`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const handleSearch = () => {
    const foodItems = foods.filter((food) =>
      food.foodName.toLowerCase().includes(query.toLowerCase())
    );
    setFilter(foodItems);
  };

  const lastIndex = currentPage * recordsPerPages;
  const firstIndex = lastIndex - recordsPerPages;
  const records =
    filter.length > 0
      ? filter.slice(firstIndex, lastIndex)
      : foods.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(
    filter.length > 0 ? filter.length : foods.length / recordsPerPages
  );
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const changePage = (id) => {
    setCurrentPage(id);
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  return (
    <>
      <Meta title={"Ferris | All Food"} />
      <div className="bg-ferris-sec/95">
        <div className="">
          <div>
            <AllFoodBanner />
          </div>

          <div className="container mx-auto px-10 md:px-10 lg:px-20 py-10">
            <div className="flex pb-5 gap-2 justify-center md:justify-end">
              <input
                type="text"
                placeholder="Search Food"
                className="input w-full md:w-1/4  input-sm rounded-none input-error"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                onClick={handleSearch}
                className="btn rounded-none btn-sm  text-ferris-sec bg-ferris-prim hover:scale-95 hover:bg-ferris-prim/90 lg:ml-2"
              >
                Search
              </button>
            </div>

            <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3   gap-5">
              {records ? (
                records.map((food) => (
                  <FoodCard food={food} key={food._id}></FoodCard>
                ))
              ) : (
                <span className="loading loading-spinner loading-lg"></span>
              )}
            </div>

            <div className="join mt-10">
              {numbers.map((n, i) => (
                <button
                  onClick={() => changePage(n)}
                  key={i}
                  className={`join-item btn ${
                    currentPage === n ? "btn-active" : ""
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllFood;
