import { useNavigate, useParams } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const categoryList = [
  {
    name: "fashion",
  },
  {
    name: "shirt",
  },
  {
    name: "jacket",
  },
  {
    name: "mobile",
  },
  {
    name: "laptop",
  },
  {
    name: "shoes",
  },
  {
    name: "home",
  },
  {
    name: "books",
  },
];

const UpdateProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading, getAllProductFunction } = context;

  // navigate
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  // product state
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Get Single Product Function
  const getSingleProductFunction = async () => {
    setLoading(true);
    try {
      console.log("Fetching product with ID:", id);

      const response = await fetch(
        `https://backend-final-tq3q.onrender.com/api/products/${id}/`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        console.log("Error fetching product from backend:", response.status);
        return;
      }

      const productData = await response.json();
      console.log("Fetched Product Data:", productData);

      setProduct({
        name: productData?.name || "",
        price: productData?.price || "",
        image: productData?.image || "",
        category: productData?.category || "",
        description: productData?.description || "",
        stock: productData?.stock || 0,
        date:
          productData?.date ||
          new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
      });
    } catch (error) {
      console.log("Error fetching product:", error);
    }
    setLoading(false);
  };

  const updateProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://backend-final-tq3q.onrender.com/api/products/${id}/`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        }
      );

      if (response.ok) {
        toast.success("Product Updated successfully");
        getAllProductFunction();
        navigate("/admin-dashboard");
      } else {
        toast.error("Failed to update product");
      }
    } catch (error) {
      console.log("Error updating product:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getSingleProductFunction();
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        {loading && <Loader />}
        {/* Login Form  */}
        <div className="login_Form bg-blue-gray-100 px-8 py-6 border border-black rounded-xl shadow-md">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-black ">
              Update Product
            </h2>
          </div>

          {/* Input One  */}
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={(e) => {
                setProduct({
                  ...product,
                  name: e.target.value,
                });
              }}
              placeholder="Product name"
              className="bg-blue-gray-50 border text-black border-black px-2 py-2 w-96 rounded-md outline-none placeholder-gray-600"
            />
          </div>

          {/* Input Two  */}
          <div className="mb-3">
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={(e) => {
                setProduct({
                  ...product,
                  price: e.target.value,
                });
              }}
              placeholder="Product Price"
              className="bg-blue-gray-50 border text-black border-black px-2 py-2 w-96 rounded-md outline-none placeholder-gray-600"
            />
          </div>

          {/* Input Three  */}
          <div className="mb-3">
            <input
              type="text"
              name="productImageUrl"
              value={product.image}
              onChange={(e) => {
                setProduct({
                  ...product,
                  image: e.target.value,
                });
              }}
              placeholder="Product Image Url"
              className="bg-blue-gray-50 border text-black border-black px-2 py-2 w-96 rounded-md outline-none placeholder-gray-600"
            />
          </div>

          {/* Input Four  */}
          <div className="mb-3">
            <select
              value={product.category}
              onChange={(e) => {
                setProduct({
                  ...product,
                  category: e.target.value,
                });
              }}
              className="w-full px-1 py-2 text-black bg-blue-gray-50 border border-black rounded-md outline-none  "
            >
              <option disabled>Select Product Category</option>
              {categoryList.map((value, index) => {
                const { name } = value;
                return (
                  <option
                    className=" first-letter:uppercase"
                    key={index}
                    value={name}
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Input Five  */}
          <div className="mb-3">
            <textarea
              value={product.description}
              onChange={(e) => {
                setProduct({
                  ...product,
                  description: e.target.value,
                });
              }}
              name="description"
              placeholder="Product Description"
              rows="5"
              className=" w-full px-2 py-1 text-black bg-blue-gray-50 border border-black rounded-md outline-none placeholder-gray-600 "
            ></textarea>
          </div>

          {/* Update Product Button  */}
          <div className="mb-3">
            <button
              onClick={updateProduct}
              type="button"
              className="bg-green-700 hover:bg-green-800 w-full text-white text-center py-2 font-bold rounded-md "
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductPage;
