// import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
// import { useState, useEffect } from "react";

// export function EditFoodModal({ isOpen, setIsOpen, food, onUpdate }) {
//   const [formData, setFormData] = useState(food || {});

//   // Set initial values when modal opens
//   useEffect(() => {
//     if (food) {
//       setFormData(food);
//     }
//   }, [food]);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value, // ✅ Checkbox handling for availability
//     });
//   };

//   // Handle ingredient input as an array
//   const handleIngredientsChange = (e) => {
//     setFormData({
//       ...formData,
//       ingredients: e.target.value.split(",").map((item) => item.trim()), // Convert comma-separated input to an array
//     });
//   };

//   // Submit updated data
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onUpdate(formData);
//   };

//   return (
//     <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
//       <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black bg-opacity-50">
//         <DialogPanel className="max-w-2xl w-full space-y-4 border bg-white p-6 rounded-lg shadow-lg">
//           <DialogTitle className="font-bold text-xl text-center text-gray-800">
//             Edit Food Item
//           </DialogTitle>

//           {/* Scrollable Form */}
//           <div className="max-h-[70vh] overflow-y-auto pr-2">
//             <form onSubmit={handleSubmit} className="space-y-4">
//               {/* Read-only Fields */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-600">Food ID</label>
//                   <input
//                     type="text"
//                     value={formData._id}
//                     className="input input-bordered w-full p-3 rounded-lg bg-gray-100 text-gray-500"
//                     readOnly
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-600">Total Sold</label>
//                   <input
//                     type="number"
//                     value={formData.totalSold}
//                     className="input input-bordered w-full p-3 rounded-lg bg-gray-100 text-gray-500"
//                     readOnly
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-600">Rating</label>
//                   <input
//                     type="number"
//                     value={formData.rating}
//                     className="input input-bordered w-full p-3 rounded-lg bg-gray-100 text-gray-500"
//                     readOnly
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-600">Reviews</label>
//                   <input
//                     type="number"
//                     value={formData.reviews}
//                     className="input input-bordered w-full p-3 rounded-lg bg-gray-100 text-gray-500"
//                     readOnly
//                   />
//                 </div>
//               </div>

//               {/* Editable Fields */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-600">Food Name</label>
//                 <input
//                   type="text"
//                   name="foodName"
//                   value={formData.foodName || ""}
//                   onChange={handleChange}
//                   className="input input-bordered w-full p-3 rounded-lg"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-600">Description</label>
//                 <textarea
//                   name="description"
//                   value={formData.description || ""}
//                   onChange={handleChange}
//                   className="textarea textarea-bordered w-full p-3 rounded-lg"
//                   rows="3"
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-600">Price (€)</label>
//                   <input
//                     type="number"
//                     name="price"
//                     value={formData.price || ""}
//                     onChange={handleChange}
//                     className="input input-bordered w-full p-3 rounded-lg"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-600">Quantity</label>
//                   <input
//                     type="number"
//                     name="quantity"
//                     value={formData.quantity || ""}
//                     onChange={handleChange}
//                     className="input input-bordered w-full p-3 rounded-lg"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-600">Food Category</label>
//                 <select
//                   name="foodCategory"
//                   value={formData.foodCategory || ""}
//                   onChange={handleChange}
//                   className="select select-bordered w-full p-3 rounded-lg"
//                   required
//                 >
//                   <option value="Starters">Starters</option>
//                   <option value="Main Course">Main Course</option>
//                   <option value="Desserts">Desserts</option>
//                   <option value="Beverages">Beverages</option>
//                   <option value="Salad">Salad</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-600">Origin</label>
//                 <input
//                   type="text"
//                   name="origin"
//                   value={formData.origin || ""}
//                   onChange={handleChange}
//                   className="input input-bordered w-full p-3 rounded-lg"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-600">Image URL</label>
//                 <input
//                   type="text"
//                   name="img"
//                   value={formData.img || ""}
//                   onChange={handleChange}
//                   className="input input-bordered w-full p-3 rounded-lg"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-600">Ingredients</label>
//                 <input
//                   type="text"
//                   name="ingredients"
//                   value={formData.ingredients?.join(", ") || ""}
//                   onChange={handleIngredientsChange}
//                   className="input input-bordered w-full p-3 rounded-lg"
//                   required
//                   placeholder="Enter ingredients separated by commas"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-600">Preparation Time (mins)</label>
//                 <input
//                   type="number"
//                   name="preparationTime"
//                   value={formData.preparationTime || ""}
//                   onChange={handleChange}
//                   className="input input-bordered w-full p-3 rounded-lg"
//                   required
//                 />
//               </div>

//               {/* Availability Toggle */}
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   name="availability"
//                   checked={formData.availability}
//                   onChange={handleChange}
//                   className="checkbox checkbox-primary"
//                 />
//                 <label className="text-sm font-semibold text-gray-600">Available</label>
//               </div>

//               {/* Buttons */}
//               <div className="flex justify-end gap-4">
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//                 >
//                   Update
//                 </button>
//               </div>
//             </form>
//           </div>
//         </DialogPanel>
//       </div>
//     </Dialog>
//   );
// }


import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export function EditFoodModal({ isOpen, setIsOpen, food, onUpdate }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: food, // Pre-fills form with existing data
  });

  // Reset form when food changes
  useEffect(() => {
    if (food) reset(food);
  }, [food, reset]);

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data.ingredients);
    if (typeof data.ingredients === "string") {
        data.ingredients = data.ingredients.split(",").map(item => item.trim());
      } // Convert ingredients to array
    data.availability = Boolean(data.availability); // Ensure availability is boolean
    onUpdate(data);
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black bg-opacity-50">
        <DialogPanel className="max-w-2xl w-full space-y-4 border bg-white p-6 rounded-lg shadow-lg">
          <DialogTitle className="font-bold text-xl text-center text-gray-800">
            Edit Food Item
          </DialogTitle>

          {/* Scrollable Form */}
          <div className="max-h-[70vh] overflow-y-auto pr-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Read-only Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600">Food ID</label>
                  <input
                    {...register("_id")}
                    className="input input-bordered w-full p-3 rounded-lg bg-gray-100 text-gray-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600">Total Sold</label>
                  <input
                    {...register("totalSold")}
                    className="input input-bordered w-full p-3 rounded-lg bg-gray-100 text-gray-500"
                    readOnly
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600">Rating</label>
                  <input
                    {...register("rating")}
                    className="input input-bordered w-full p-3 rounded-lg bg-gray-100 text-gray-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600">Reviews</label>
                  <input
                    {...register("reviews")}
                    className="input input-bordered w-full p-3 rounded-lg bg-gray-100 text-gray-500"
                    readOnly
                  />
                </div>
              </div>

              {/* Editable Fields */}
              <div>
                <label className="block text-sm font-semibold text-gray-600">Food Name</label>
                <input
                  {...register("foodName", { required: "Food name is required" })}
                  className="input input-bordered w-full p-3 rounded-lg"
                />
                {errors.foodName && <p className="text-red-500 text-sm">{errors.foodName.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600">Description</label>
                <textarea
                  {...register("description", { required: "Description is required" })}
                  className="textarea textarea-bordered w-full p-3 rounded-lg"
                  rows="3"
                />
                {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600">Price (€)</label>
                  <input
                    type="number"
                    {...register("price", { required: "Price is required", valueAsNumber: true })}
                    className="input input-bordered w-full p-3 rounded-lg"
                  />
                  {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600">Quantity</label>
                  <input
                    type="number"
                    {...register("quantity", { required: "Quantity is required", valueAsNumber: true })}
                    className="input input-bordered w-full p-3 rounded-lg"
                  />
                  {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600">Food Category</label>
                <select
                  {...register("foodCategory", { required: "Category is required" })}
                  className="select select-bordered w-full p-3 rounded-lg"
                >
                  <option value="Starters">Starters</option>
                  <option value="Main Course">Main Course</option>
                  <option value="Desserts">Desserts</option>
                  <option value="Beverages">Beverages</option>
                  <option value="Salad">Salad</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600">Origin</label>
                <input
                  {...register("origin", { required: "Origin is required" })}
                  className="input input-bordered w-full p-3 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600">Image URL</label>
                <input
                  {...register("img", { required: "Image URL is required" })}
                  className="input input-bordered w-full p-3 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600">Ingredients</label>
                <input
                  {...register("ingredients")}
                  className="input input-bordered w-full p-3 rounded-lg"
                  placeholder="Enter ingredients separated by commas"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600">Preparation Time (mins)</label>
                <input
                  type="number"
                  {...register("preparationTime", { required: "Preparation time is required", valueAsNumber: true })}
                  className="input input-bordered w-full p-3 rounded-lg"
                />
              </div>

              {/* Availability Toggle */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("availability")}
                  className="checkbox checkbox-primary"
                />
                <label className="text-sm font-semibold text-gray-600">Available</label>
              </div>

              {/* Buttons */}
              <div className="flex justify-end  gap-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

