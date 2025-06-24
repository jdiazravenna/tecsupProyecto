import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";

const categoryList = [
  "fashion",
  "shirt",
  "jacket",
  "mobile",
  "laptop",
  "shoes",
  "home",
  "books",
];

const AddProductPage = () => {
  const { loading, setLoading } = useContext(myContext);
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
    stock: 1,
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const addProductFunction = async () => {
    const { name, price, image, category, description } = product;
    if (!name || !price || !image || !category || !description) {
      return toast.error("Please fill all fields");
    }

    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/products/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (res.ok) {
        toast.success("Product added successfully");
        navigate("/admin-dashboard");
      } else {
        toast.error("Failed to add product");
      }
    } catch (err) {
      toast.error("Error adding product");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white">
      {loading && <Loader />}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
          Add New Product
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Price */}
        <input
          type="number"
          placeholder="Price (S/)"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Image */}
        <input
          type="text"
          placeholder="Image URL"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Category */}
        <select
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="" disabled>
            Select Category
          </option>
          {categoryList.map((cat, i) => (
            <option key={i} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        {/* Description */}
        <textarea
          rows={4}
          placeholder="Description"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          className="mb-6 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        />

        {/* Button */}
        <button
          onClick={addProductFunction}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProductPage;
