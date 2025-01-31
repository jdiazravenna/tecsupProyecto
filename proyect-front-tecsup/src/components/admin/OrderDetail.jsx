import { useContext } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
    const context = useContext(myContext);
    const { getAllOrder, orderDelete } = context;

    return (
        <div>
            <div className="py-5">
                <h1 className="text-xl text-black font-bold">All Orders</h1>
            </div>

            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse sm:border-separate border-black text-black">
                    <thead>
                        <tr className="bg-slate-100 text-slate-700">
                            <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-black">S.No.</th>
                            <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-black">Order Id</th>
                            <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-black">Quantity</th>
                            <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-black">Total Price</th>
                            <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-black">Status</th>
                            <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-black">Date</th>
                            <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-black">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getAllOrder.map((order, index) => (
                            <tr key={order.id} className="text-black border-t border-black">
                                <td className="h-12 px-6 text-md border-l first:border-l-0 border-black">{index + 1}</td>
                                <td className="h-12 px-6 text-md border-l first:border-l-0 border-black">{order.id}</td>
                                <td className="h-12 px-6 text-md border-l first:border-l-0 border-black">{order.quantity}</td>
                                <td className="h-12 px-6 text-md border-l first:border-l-0 border-black">S/ {order.total_price}</td>
                                <td className={`h-12 px-6 text-md border-l first:border-l-0 border-black ${order.status === 'pending' ? 'text-yellow-500' : 'text-green-500'}`}>
                                    {order.status}
                                </td>
                                <td className="h-12 px-6 text-md border-l first:border-l-0 border-black">{new Date(order.created_at).toLocaleDateString()}</td>
                                <td 
                                    onClick={() => orderDelete(order.id)} 
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-black text-red-500 cursor-pointer hover:text-red-700">
                                    Delete
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrderDetail;
