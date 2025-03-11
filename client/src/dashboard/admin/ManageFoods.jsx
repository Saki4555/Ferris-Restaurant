



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
      toast.success("Food item deleted successfully!", { position: "top-right" });
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
      return axios.patch(`${import.meta.env.VITE_BASE_URL}/allfoods/${updatedFood._id}`, updatedFood);
    },
    onSuccess: () => {
      refetch();
      setEditOpen(false);
      toast.success("Food item updated successfully!", { position: "top-right" });
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
                <th><Skeleton width={30} /></th>
                <th><Skeleton width={64} /></th>
                <th><Skeleton width={120} /></th>
                <th><Skeleton width={100} /></th>
                <th><Skeleton width={60} /></th>
                <th><Skeleton width={100} /></th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td><Skeleton width={30} /></td>
                  <td><Skeleton width={64} height={64} className="rounded-md" /></td>
                  <td><Skeleton width={120} /></td>
                  <td><Skeleton width={100} /></td>
                  <td><Skeleton width={60} /></td>
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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-ferris-prim mb-6">Manage Foods</h2>

        {
          !Array.isArray(foods) || foods.length === 0 ? (
            // Show "No Foods Found" Message
            <div className="flex flex-col items-center justify-center py-10 text-gray-600">
            <MdOutlineRestaurantMenu className="text-6xl text-ferris-prim" />
            <p className="text-xl font-semibold mt-3">No foods available at the moment.</p>
            <p className="text-sm text-gray-500">Please check back later or add new food items.</p>
          </div>
          ) :<div className="overflow-x-auto">
          <table className="table w-full border border-gray-200">
            <thead className="bg-ferris-prim text-white text-lg">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Food Name</th>
                <th>Category</th>
                <th>Price (€)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food, index) => (
                <tr key={food._id} className="hover:bg-gray-100">
                  <td>{index + 1}</td>
                  <td>
                    <img src={food.img} alt={food.foodName} className="w-16 h-16 rounded-md border" />
                  </td>
                  <td>{food.foodName}</td>
                  <td>{food.foodCategory}</td>
                  <td>€{food.price}</td>
                  <td className=" space-x-3">
                    <button className="btn btn-sm btn-outline btn-primary" onClick={() => {
                      setFoodToEdit(food);
                      setEditOpen(true);
                    }}>
                      <AiOutlineEdit size={18} /> Edit
                    </button>
                    <button className="btn btn-sm btn-outline btn-error" onClick={() => {
                      setFoodToDelete(food._id);
                      setIsOpen(true);
                    }}>
                      <AiOutlineDelete size={18} /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        }
          
       
          
        
      </div>

      <DeleteConfimationModal isOpen={isOpen} setIsOpen={setIsOpen} onConfirm={handleDelete} />
      {foodToEdit && <EditFoodModal isOpen={editOpen} setIsOpen={setEditOpen} food={foodToEdit} onUpdate={updateMutation.mutate} />}
    </div>
  );
};

export default ManageFoods;
