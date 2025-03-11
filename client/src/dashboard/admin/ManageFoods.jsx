

// import useFoodsData from "../../hooks/useFoodsData";
// import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { DeleteConfimationModal } from "../modals/DeleteConfimationModal";
// import { useState } from "react";

// const ManageFoods = () => {
//   const [foods, loading, refetch] = useFoodsData();
//   const [isOpen, setIsOpen] = useState(false);
//   const [foodToDelete, setFoodToDelete] = useState(null); // ✅ Store food ID to delete

//   const deleteMutation = useMutation({
//     mutationFn: async (foodId) => {
//       await axios.delete(`${import.meta.env.VITE_BASE_URL}/allfoods/${foodId}`);
//     },
//     onSuccess: () => {
//       refetch(); // ✅ Refresh the food list after deletion
//       setIsOpen(false);
//       toast.success("Food item deleted successfully!", { position: "top-right" });
//     },
//     onError: (error) => {
//       console.error("Error deleting food:", error);
//       toast.error("Failed to delete food!", { position: "top-right" });
//     },
//   });

//   const handleDelete = () => {
//     if (foodToDelete) {
//       deleteMutation.mutate(foodToDelete); // ✅ Now deleting the selected food after confirmation
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-3xl font-bold text-center text-ferris-prim mb-6">
//           Manage Foods
//         </h2>

//         {loading ? (
//           <div className="text-center py-10">
//             <span className="loading loading-spinner loading-lg"></span>
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="table w-full border border-gray-200">
//               <thead className="bg-ferris-prim text-white text-lg">
//                 <tr>
//                   <th className="p-3">#</th>
//                   <th className="p-3">Image</th>
//                   <th className="p-3">Food Name</th>
//                   <th className="p-3">Category</th>
//                   <th className="p-3">Price (€)</th>
//                   <th className="p-3">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {foods.map((food, index) => (
//                   <tr key={food._id} className="hover:bg-gray-100">
//                     <td className="p-3 text-center font-semibold">{index + 1}</td>
//                     <td className="p-3 text-center">
//                       <img
//                         src={food.img}
//                         alt={food.foodName}
//                         className="w-16 h-16 object-cover rounded-md border"
//                       />
//                     </td>
//                     <td className="p-3 font-medium">{food.foodName}</td>
//                     <td className="p-3">{food.foodCategory}</td>
//                     <td className="p-3 font-semibold">€{food.price}</td>
//                     <td className="p-3 flex justify-center gap-3">
//                       <button className="btn btn-sm btn-outline btn-primary">
//                         <AiOutlineEdit size={18} /> Edit
//                       </button>
//                       <button
//                         className="btn btn-sm btn-outline btn-error"
//                         onClick={() => {
//                           setFoodToDelete(food._id); // ✅ Store ID of food to delete
//                           setIsOpen(true); // ✅ Open confirmation modal
//                         }}
//                         disabled={deleteMutation.isLoading}
//                       >
//                         {deleteMutation.isLoading ? (
//                           <span className="loading loading-spinner loading-sm"></span>
//                         ) : (
//                           <>
//                             <AiOutlineDelete size={18} /> Delete
//                           </>
//                         )}
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {/* Delete Confirmation Modal */}
//       <DeleteConfimationModal 
//         isOpen={isOpen} 
//         setIsOpen={setIsOpen} 
//         onConfirm={handleDelete} // ✅ Call handleDelete when user confirms
//       />
//     </div>
//   );
// };

// export default ManageFoods;



import useFoodsData from "../../hooks/useFoodsData";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { DeleteConfimationModal } from "../modals/DeleteConfimationModal";
import { EditFoodModal } from "../modals/EditFoodModal";
import { useState } from "react";

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
  
  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-ferris-prim mb-6">Manage Foods</h2>

        {loading ? (
          <div className="text-center py-10">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="overflow-x-auto">
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
        )}
      </div>

      <DeleteConfimationModal isOpen={isOpen} setIsOpen={setIsOpen} onConfirm={handleDelete} />
      {foodToEdit && <EditFoodModal isOpen={editOpen} setIsOpen={setEditOpen} food={foodToEdit} onUpdate={updateMutation.mutate} />}
    </div>
  );
};

export default ManageFoods;
