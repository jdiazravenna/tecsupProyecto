import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const context = useContext(myContext);
  const { loading, getAllOrder } = context;

  // Filtrar órdenes por usuario
  const userOrders = Array.isArray(getAllOrder)
    ? getAllOrder.filter((order) => order.user === user?.id)
    : [];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-5 lg:py-8">
        {/* Datos del usuario */}
        <div className="top">
          <div className="bg-pink-50 py-5 rounded-xl border border-pink-100">
            <div className="flex justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-center text-lg">
                <span className="font-bold">Name: </span>
                {user?.username}
              </h1>
              <h1 className="text-center text-lg">
                <span className="font-bold">Email: </span>
                {user?.email}
              </h1>
              <h1 className="text-center text-lg">
                <span className="font-bold">Date: </span>
                {user?.date || "No registrado"}
              </h1>
              <h1 className="text-center text-lg">
                <span className="font-bold">Role: </span>
                {user?.role}
              </h1>
            </div>
          </div>
        </div>

        {/* Detalle de órdenes */}
        <div className="bottom">
          <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
            <h2 className="text-2xl lg:text-3xl font-bold">Order Details</h2>

            <div className="flex justify-center relative top-10">
              {loading && <Loader />}
            </div>

            {!loading && userOrders.length === 0 && (
              <p className="mt-10 text-center text-gray-500">
                No tienes pedidos registrados.
              </p>
            )}

            {!loading &&
              userOrders.map((order, index) => {
                const {
                  id,
                  created_at,
                  quantity,
                  total_price,
                  product,
                  status,
                } = order;

                return (
                  <div
                    key={index}
                    className="mt-5 flex flex-col overflow-hidden rounded-xl border border-pink-100 md:flex-row"
                  >
                    <div className="w-full border-r border-pink-100 bg-pink-50 md:max-w-xs">
                      <div className="p-8">
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                          <div className="mb-4">
                            <div className="text-sm font-semibold text-black">
                              Order Id
                            </div>
                            <div className="text-sm font-medium text-gray-900">
                              #{id}
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="text-sm font-semibold">Date</div>
                            <div className="text-sm font-medium text-gray-900">
                              {new Date(created_at).toLocaleString()}
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="text-sm font-semibold">
                              Total Amount
                            </div>
                            <div className="text-sm font-medium text-gray-900">
                              S/ {total_price}
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="text-sm font-semibold">
                              Order Status
                            </div>
                            <div
                              className={`text-sm font-medium ${
                                status === "pending"
                                  ? "text-red-800"
                                  : "text-green-800"
                              } first-letter:uppercase`}
                            >
                              {status}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 p-8">
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Producto ID: <strong>{product}</strong>
                      </p>
                      <p className="text-sm font-medium text-gray-700">
                        Cantidad: <strong>{quantity}</strong>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
