import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductDetail from "../../components/admin/ProductDetail";
import OrderDetail from "../../components/admin/OrderDetail";
import UserDetail from "../../components/admin/UserDetail";
import { useContext } from "react";
import myContext from "../../context/myContext";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("users"));
  const { getAllProduct, getAllOrder, getAllUser } = useContext(myContext);

  const logout = () => {
    localStorage.clear("users");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-10 px-5">
      {/* Header */}
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-teal-700">Admin Dashboard</h1>

        <div className="flex gap-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v11a1 1 0 001 1h3m-10-3h4"
              />
            </svg>
            Volver al Home
          </a>

          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg shadow-md transition-all"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-10 border border-gray-200 max-w-md mx-auto text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
          alt="admin"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          {user?.name}
        </h2>
        <p className="text-sm text-gray-600">{user?.email}</p>
        <p className="text-sm text-gray-600">{user?.date}</p>
        <p className="text-sm font-bold text-teal-700 mt-2">
          Role: {user?.role}
        </p>
      </div>

      {/* Tab Stats */}
      <div className="mb-10">
        <Tabs>
          <TabList className="flex flex-wrap justify-center gap-4">
            {/* Total Products */}
            <Tab className="cursor-pointer w-64">
              <div className="bg-white hover:bg-gray-100 border border-teal-500 rounded-xl shadow-md p-5 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="mx-auto text-teal-600"
                >
                  <path d="m5 11 4-7" />
                  <path d="m19 11-4-7" />
                  <path d="M2 11h20" />
                  <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                  <path d="m9 11 1 9" />
                  <path d="M4.5 15.5h15" />
                  <path d="m15 11-1 9" />
                </svg>
                <h3 className="text-2xl font-bold text-teal-700 mt-3">
                  {getAllProduct.length}
                </h3>
                <p className="text-gray-700 font-medium">Total Products</p>
              </div>
            </Tab>

            {/* Total Orders */}
            <Tab className="cursor-pointer w-64">
              <div className="bg-white hover:bg-gray-100 border border-teal-500 rounded-xl shadow-md p-5 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="mx-auto text-teal-600"
                >
                  <line x1={10} x2={21} y1={6} y2={6} />
                  <line x1={10} x2={21} y1={12} y2={12} />
                  <line x1={10} x2={21} y1={18} y2={18} />
                  <path d="M4 6h1v4" />
                  <path d="M4 10h2" />
                  <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                </svg>
                <h3 className="text-2xl font-bold text-teal-700 mt-3">
                  {getAllOrder.length}
                </h3>
                <p className="text-gray-700 font-medium">Total Orders</p>
              </div>
            </Tab>

            {/* Total Users */}
            <Tab className="cursor-pointer w-64">
              <div className="bg-white hover:bg-gray-100 border border-teal-500 rounded-xl shadow-md p-5 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="mx-auto text-teal-600"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <h3 className="text-2xl font-bold text-teal-700 mt-3">
                  {getAllUser.length}
                </h3>
                <p className="text-gray-700 font-medium">Total Users</p>
              </div>
            </Tab>
          </TabList>

          <TabPanel>
            <ProductDetail />
          </TabPanel>
          <TabPanel>
            <OrderDetail />
          </TabPanel>
          <TabPanel>
            <UserDetail />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
