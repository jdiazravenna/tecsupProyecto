import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Search } from "lucide-react";

const SearchBar = () => {
  const { getAllProduct } = useContext(myContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filterSearchData = getAllProduct
    .filter((obj) =>
      obj.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 8);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Input */}
      <div className="relative">
        <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-md bg-white border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none text-sm shadow-sm"
        />
      </div>

      {/* Result Dropdown */}
      {search && (
        <div className="absolute z-50 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-80 overflow-y-auto">
          {filterSearchData.length > 0 ? (
            filterSearchData.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  navigate(`/productinfo/${item.id}`);
                  setSearch(""); // opcional: limpiar input tras click
                }}
                className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
              >
                <img src={item.image} alt={item.name} className="w-10 h-10 object-contain" />
                <span className="text-sm text-gray-800">{item.name}</span>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500 text-sm">
              <img
                src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                alt="no result"
                className="w-12 mx-auto mb-2"
              />
              No results found.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
