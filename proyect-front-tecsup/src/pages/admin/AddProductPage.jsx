import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";

const categoryList = [
    { name: "fashion" },
    { name: "shirt" },
    { name: "jacket" },
    { name: "mobile" },
    { name: "laptop" },
    { name: "shoes" },
    { name: "home" },
    { name: "books" },
];

const AddProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // Navegación
    const navigate = useNavigate();

    // Estado del producto
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

    // Función para agregar producto
    const addProductFunction = async () => {
        if (
            product.name === "" ||
            product.price === "" ||
            product.image === "" ||
            product.category === "" ||
            product.description === ""
        ) {
            return toast.error("All fields are required");
        }

        setLoading(true);
        try {
            const response = await fetch("http://127.0.0.1:8000/api/products/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(product),
            });

            if (response.ok) {
                toast.success("Product added successfully");
                navigate("/admin-dashboard");
            } else {
                toast.error("Failed to add product");
            }
        } catch (error) {
            console.log("Error adding product:", error);
            toast.error("Add product failed");
        }
        setLoading(false);
    };

    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                {loading && <Loader />}
                <div className="login_Form bg-gray-500 px-8 py-6 border border-black rounded-xl shadow-md">
                    <div className="mb-5">
                        <h2 className="text-center text-2xl font-bold text-white">
                            Add Product
                        </h2>
                    </div>

                    {/* Nombre */}
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={(e) =>
                                setProduct({ ...product, name: e.target.value })
                            }
                            placeholder="Product name"
                            className="bg-blue-gray-300 border text-black border-black px-2 py-2 w-96 rounded-md outline-none placeholder-white"
                        />
                    </div>

                    {/* Precio */}
                    <div className="mb-3">
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={(e) =>
                                setProduct({ ...product, price: e.target.value })
                            }
                            placeholder="Product Price"
                            className="bg-blue-gray-300 border text-black border-black px-2 py-2 w-96 rounded-md outline-none placeholder-white"
                        />
                    </div>

                    {/* Imagen */}
                    <div className="mb-3">
                        <input
                            type="text"
                            name="productImageUrl"
                            value={product.image}
                            onChange={(e) =>
                                setProduct({ ...product, image: e.target.value })
                            }
                            placeholder="Product Image Url"
                            className="bg-blue-gray-300 border text-black border-black px-2 py-2 w-96 rounded-md outline-none placeholder-white"
                        />
                    </div>

                    {/* Categoría */}
                    <div className="mb-3">
                        <select
                            value={product.category}
                            onChange={(e) =>
                                setProduct({ ...product, category: e.target.value })
                            }
                            className="w-full px-1 py-2 text-white bg-blue-gray-300 border border-black rounded-md outline-none"
                        >
                            <option disabled>Select Product Category</option>
                            {categoryList.map((value, index) => (
                                <option
                                    className="first-letter:uppercase"
                                    key={index}
                                    value={value.name}
                                >
                                    {value.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Descripción */}
                    <div className="mb-3">
                        <textarea
                            value={product.description}
                            onChange={(e) =>
                                setProduct({ ...product, description: e.target.value })
                            }
                            name="description"
                            placeholder="Product Description"
                            rows="5"
                            className="w-full px-2 py-1 text-black bg-blue-gray-300 border border-black rounded-md outline-none placeholder-white"
                        />
                    </div>

                    {/* Botón Agregar */}
                    <div className="mb-3">
                        <button
                            onClick={addProductFunction}
                            type="button"
                            className="bg-blue-gray-700 hover:bg-blue-gray-800 w-full text-white text-center py-2 font-bold rounded-md"
                        >
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductPage;
