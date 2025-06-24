import { useNavigate, useParams } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
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

const UpdateProductPage = () => {
  const { loading, setLoading, getAllProductFunction } = useContext(myContext);
  const navigate = useNavigate();
  const { id } = useParams();

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

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/products/${id}/`);
        const data = await res.json();
        setProduct({
          name: data.name || "",
          price: data.price || "",
          image: data.image || "",
          category: data.category || "",
          description: data.description || "",
          stock: data.stock || 1,
          date: data.date || new Date().toLocaleString(),
        });
      } catch (err) {
        toast.error("Failed to load product");
      }
      setLoading(false);
    };
    getProduct();
  }, [id, setLoading]);

  const updateProduct = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/products/${id}/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      if (res.ok) {
        toast.success("Product updated successfully");
        getAllProductFunction();
        navigate("/admin-dashboard");
      } else {
        toast.error("Update failed");
      }
    } catch (err) {
      toast.error("Error updating product");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white px-4">
      {loading && <Loader />}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
          Update Product
        </h2>

        <input
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="number"
          placeholder="Price (S/)"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <select
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option disabled value="">
            Select Product Category
          </option>
          {categoryList.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <textarea
          rows="4"
          placeholder="Description"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          className="mb-6 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
        />

        <button
          onClick={updateProduct}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
        >
          Update Product
        </button>
      </div>
    </div>
  );
};

export default UpdateProductPage;
