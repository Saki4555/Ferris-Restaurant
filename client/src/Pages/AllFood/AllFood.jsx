import { useEffect, useState } from "react";


import Meta from "../Shared/Meta";
import FoodCard from "./FoodCard";
import AllFoodBanner from "./AllFoodBanner";

const AllFood = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
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
      <Meta title={"allfood"} />
      <div className="bg-ferris-sec/95">
        <div  className="">
          <div
          
          >
            {/* <h2 className="lg:text-5xl text-3xl font-bold"><span className="text-[#FF3811]">Tastebud Tavern</span>'s Culinary Extravaganza <br /> A Symphony of Flavors</h2>
          <p className="mb-10 text-gray-400 mt-10 md:mx-20">Welcome to Tastebud Tavern, where our menu is a culinary masterpiece that promises to enchant your palate. Explore a world of taste sensations, from savory starters to divine desserts, each dish meticulously crafted to elevate your dining experience. Join us on a gastronomic journey like no other, where every bite tells a story of passion and flavor innovation.</p> */}

            <AllFoodBanner />
          </div>

          <div className="container mx-auto px-20 py-10">
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

            <div
             
              className="grid md:grid-cols-3 grid-cols-1 gap-5"
            >
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
