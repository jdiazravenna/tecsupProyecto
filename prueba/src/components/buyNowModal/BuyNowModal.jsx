import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            {/* Botón para abrir el modal */}
            <button
                type="button"
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl"
            >
                Buy now
            </button>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-lg font-semibold mb-4">Enter your information</h2>
                        
                        <div className="mb-3">
                            <input
                                type="text"
                                name="name"
                                value={addressInfo.name}
                                onChange={(e) => setAddressInfo({ ...addressInfo, name: e.target.value })}
                                placeholder="Enter your name"
                                className="bg-gray-100 border border-gray-300 px-2 py-2 w-full rounded-md outline-none placeholder-gray-500"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="address"
                                value={addressInfo.address}
                                onChange={(e) => setAddressInfo({ ...addressInfo, address: e.target.value })}
                                placeholder="Enter your address"
                                className="bg-gray-100 border border-gray-300 px-2 py-2 w-full rounded-md outline-none placeholder-gray-500"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="number"
                                name="pincode"
                                value={addressInfo.pincode}
                                onChange={(e) => setAddressInfo({ ...addressInfo, pincode: e.target.value })}
                                placeholder="Enter your pincode"
                                className="bg-gray-100 border border-gray-300 px-2 py-2 w-full rounded-md outline-none placeholder-gray-500"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="mobileNumber"
                                value={addressInfo.mobileNumber}
                                onChange={(e) => setAddressInfo({ ...addressInfo, mobileNumber: e.target.value })}
                                placeholder="Enter your mobile number"
                                className="bg-gray-100 border border-gray-300 px-2 py-2 w-full rounded-md outline-none placeholder-gray-500"
                            />
                        </div>

                        {/* Botones de acción */}
                        <div className="flex justify-end mt-4">
                            <button
                                type="button"
                                onClick={handleOpen}
                                className="mr-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    handleOpen();
                                    buyNowFunction();
                                }}
                                className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
                            >
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BuyNowModal;
