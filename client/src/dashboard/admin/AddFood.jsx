import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from 'react-hot-toast';
const AddFood = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const mutation = useMutation({
    mutationFn: async (newFood) => {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/allfoods`,
        newFood
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log("res data", data);
      toast.success("Food added successfully!");
      // reset(); // Reset form after successful submission
   setTimeout(() => {
      mutation.reset();
   }, 1000)
    },
    onError: (error) => {
      console.error("Error adding food:", error);
      toast.error("Failed to add food!");
    },
  });

  const onSubmit = (data) => {
    
    const foodData = { ...data, totalSold: 0 };
    mutation.mutate(foodData);
    console.log({ foodData });
  };

  return (
    <div className="p-8 bg-ferris-sec min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-xl p-10 rounded-2xl w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-ferris-prim text-center">
          Add New Food Item
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Food Name */}
          <div>
            <label className="block text-lg font-semibold">Food Name</label>
            <input
              {...register("foodName", { required: "Food name is required" })}
              className="input input-bordered w-full p-3 rounded-lg"
              placeholder="Enter food name"
            />
            {errors.foodName && (
              <p className="text-red-500 text-sm">{errors.foodName.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-lg font-semibold">Description</label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="textarea textarea-bordered w-full p-3 rounded-lg"
              placeholder="Enter food description"
              rows="3"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Price & Quantity */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-semibold">Price (€)</label>
              <input
                {...register("price", {
                  required: "Price is required",
                  valueAsNumber: true,
                })}
                type="number"
                className="input input-bordered w-full p-3 rounded-lg"
                placeholder="Enter price"
              />
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price.message}</p>
              )}
            </div>
            <div>
              <label className="block text-lg font-semibold">Quantity</label>
              <input
                {...register("quantity", {
                  required: "Quantity is required",
                  valueAsNumber: true,
                })}
                type="number"
                className="input input-bordered w-full p-3 rounded-lg"
                placeholder="Enter quantity"
              />
              {errors.quantity && (
                <p className="text-red-500 text-sm">
                  {errors.quantity.message}
                </p>
              )}
            </div>
          </div>

          {/* Food Category & Origin */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-semibold">
                Food Category
              </label>
              <select
                {...register("foodCategory", {
                  required: "Category is required",
                })}
                className="select select-bordered w-full p-3 rounded-lg"
              >
                <option value="">Select category</option>
                <option value="Starters">Starters</option>
                <option value="Main Course">Main Course</option>
                <option value="Desserts">Desserts</option>
                <option value="Beverages">Beverages</option>
              </select>
              {errors.foodCategory && (
                <p className="text-red-500 text-sm">
                  {errors.foodCategory.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-lg font-semibold">Origin</label>
              <input
                {...register("origin", { required: "Origin is required" })}
                className="input input-bordered w-full p-3 rounded-lg"
                placeholder="Enter food origin"
              />
              {errors.origin && (
                <p className="text-red-500 text-sm">{errors.origin.message}</p>
              )}
            </div>
          </div>

          {/* Image URL */}
          {/* <div>
            <label className="block text-lg font-semibold">Image URL</label>
            <input
              {...register("img", { required: "Image URL is required" })}
              className="input input-bordered w-full p-3 rounded-lg"
              placeholder="Enter image URL"
            />
            {errors.img && (
              <p className="text-red-500 text-sm">{errors.img.message}</p>
            )}
          </div> */}
          <div>
            <label className="block text-lg font-semibold">Image URL</label>
            <input
              {...register("img", {
                required: "Image URL is required",
                pattern: {
                  value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/,
                  message:
                    "Enter a valid image URL (png, jpg, jpeg, gif, webp, svg)",
                },
              })}
              className="input input-bordered w-full p-3 rounded-lg"
              placeholder="Enter image URL"
            />
            {errors.img && (
              <p className="text-red-500 text-sm">{errors.img.message}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-lg font-semibold">Ingredients</label>
            <input
              {...register("ingredients", {
                required: "Ingredients are required",
                setValueAs: (value) => value.split(",").map((item) => item.trim()),
              })}
              
              className="input input-bordered w-full p-3 rounded-lg"
              placeholder="Enter ingredients separated by commas (e.g., Cheese, Tomato, Basil)"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm">
                {errors.ingredients.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-ferris-prim text-white w-full py-3 rounded-lg text-lg font-semibold hover:bg-ferris-prim-hov transition-all"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading
              ? "Adding..."
              : mutation.isSuccess
              ? "Food Added!"
              : "Add Food"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
