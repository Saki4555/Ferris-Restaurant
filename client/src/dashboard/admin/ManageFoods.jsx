import useFoodsData from "../../hooks/useFoodsData";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { DeleteConfimationModal } from "../modals/DeleteConfimationModal";
import { EditFoodModal } from "../modals/EditFoodModal";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const ManageFoods = () => {
  const [foods, loading, refetch] = useFoodsData();
  const [isOpen, setIsOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [foodToDelete, setFoodToDelete] = useState(null);
  const [foodToEdit, setFoodToEdit] = useState(null);

  // DELETE FOOD
  const deleteMutation = useMutation({
    mutationFn: async (foodId) => {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/allfoods/${foodId}`);
    },
    onSuccess: () => {
      refetch();
      setIsOpen(false);
      toast.success("Food item deleted successfully!", {
        position: "top-right",
      });
    },
    onError: (error) => {
      console.error("Error deleting food:", error);
      toast.error("Failed to delete food!", { position: "top-right" });
    },
  });

  const handleDelete = () => {
    if (foodToDelete) {
      deleteMutation.mutate(foodToDelete);
    }
  };

  // UPDATE FOOD
  const updateMutation = useMutation({
    mutationFn: async (updatedFood) => {
      if (!updatedFood._id) {
        console.error("Error: Food ID is missing in API call!");
        return;
      }
      return axios.patch(
        `${import.meta.env.VITE_BASE_URL}/allfoods/${updatedFood._id}`,
        updatedFood
      );
    },
    onSuccess: () => {
      refetch();
      setEditOpen(false);
      toast.success("Food item updated successfully!", {
        position: "top-right",
      });
    },
    onError: (error) => {
      console.error("Error updating food:", error);
      toast.error("Failed to update food!", { position: "top-right" });
    },
  });

  if (loading) {
    return (
      <div className="max-w-5xl z-[999] mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-ferris-prim mb-6">
          <Skeleton width={200} height={30} />
        </h2>

        <div className="overflow-x-auto">
          <table className="table w-full border border-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th>
                  <Skeleton width={30} />
                </th>
                <th>
                  <Skeleton width={64} />
                </th>
                <th>
                  <Skeleton width={120} />
                </th>
                <th>
                  <Skeleton width={100} />
                </th>
                <th>
                  <Skeleton width={60} />
                </th>
                <th>
                  <Skeleton width={100} />
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td>
                    <Skeleton width={30} />
                  </td>
                  <td>
                    <Skeleton width={64} height={64} className="rounded-md" />
                  </td>
                  <td>
                    <Skeleton width={120} />
                  </td>
                  <td>
                    <Skeleton width={100} />
                  </td>
                  <td>
                    <Skeleton width={60} />
                  </td>
                  <td className="space-x-3">
                    <Skeleton width={40} height={20} />
                    <Skeleton width={40} height={20} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-ferris-prim mb-4 sm:mb-6 md:mb-8">
          Manage Foods
        </h2>

        {/* No Foods Available Message */}
        {!Array.isArray(foods) || foods.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-gray-600">
            <MdOutlineRestaurantMenu className="text-5xl sm:text-6xl text-ferris-prim" />
            <p className="text-lg sm:text-xl font-semibold mt-2 sm:mt-3">
              No foods available at the moment.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 text-center max-w-xs">
              Please check back later or add new food items.
            </p>
          </div>
        ) : (
          // Responsive Table Container
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 text-sm sm:text-base">
              <thead className="bg-ferris-prim text-white text-xs sm:text-sm md:text-base lg:text-lg">
                <tr>
                  <th className="py-2 px-2 sm:px-3 md:px-4">#</th>
                  <th className="py-2 px-2 sm:px-3 md:px-4">Image</th>
                  <th className="py-2 px-2 sm:px-3 md:px-4">Food Name</th>
                  <th className="py-2 px-2 sm:px-3 md:px-4 hidden sm:table-cell">
                    Category
                  </th>
                  <th className="py-2 px-2 sm:px-3 md:px-4">Price (€)</th>
                  <th className="py-2 px-2 sm:px-3 md:px-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {foods.map((food, index) => (
                  <tr key={food._id} className="hover:bg-gray-100 text-center">
                    <td className="py-2 px-3">{index + 1}</td>
                    <td className="py-2 px-3">
                      <img
                        src={food.img}
                        alt={food.foodName}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-md border"
                      />
                    </td>
                    <td className="py-2 px-3">{food.foodName}</td>
                    <td className="py-2 px-3 hidden sm:table-cell">
                      {food.foodCategory}
                    </td>
                    <td className="py-2 px-3">€{food.price}</td>
                    <td className="flex gap-2 py-6">
                      <button
                        className="btn btn-xs md:btn-sm btn-outline btn-primary flex items-center gap-1"
                        onClick={() => {
                          setFoodToEdit(food);
                          setEditOpen(true);
                        }}
                      >
                        <AiOutlineEdit size={16} />{" "}
                        <span className="hidden lg:inline">Edit</span>
                      </button>
                      <button
                        className="btn btn-xs md:btn-sm btn-outline btn-error flex items-center gap-1"
                        onClick={() => {
                          setFoodToDelete(food._id);
                          setIsOpen(true);
                        }}
                      >
                        <AiOutlineDelete size={16} />{" "}
                        <span className="hidden lg:inline">Delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modals */}
        <DeleteConfimationModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onConfirm={handleDelete}
        />
        {foodToEdit && (
          <EditFoodModal
            isOpen={editOpen}
            setIsOpen={setEditOpen}
            food={foodToEdit}
            onUpdate={updateMutation.mutate}
          />
        )}
      </div>
    </div>
  );
};

export default ManageFoods;
