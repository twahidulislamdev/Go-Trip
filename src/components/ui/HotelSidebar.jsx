import React from "react";

export default function HotelSidebar() {
  return (
    <div className="w-full bg-white p-5 border border-gray-200 rounded-xl shadow-sm flex flex-col gap-6">
      {/* Search by property name */}
      <div>
        <h4 className="text-[15px] font-bold text-gray-900 mb-3">Search by property name</h4>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="e.g. Best Western"
            className="w-full border border-gray-300 rounded-lg py-2.5 pl-9 pr-3 text-[13.5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Filter by */}
      <div>
        <h3 className="text-[16px] font-extrabold text-gray-900 mb-5">Filter by:</h3>
        
        {/* Popular Filters */}
        <div className="mb-6">
          <h4 className="text-[14.5px] font-bold text-gray-900 mb-3">Popular filters</h4>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "Free cancellation", count: 120 },
              { label: "Breakfast included", count: 85 },
              { label: "Hotels", count: 412 },
              { label: "Swimming pool", count: 64 },
            ].map((filter) => (
              <label key={filter.label} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-[18px] h-[18px] text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer" />
                <span className="text-[13.5px] text-gray-700 flex-1 group-hover:text-indigo-600 transition-colors">{filter.label}</span>
                <span className="text-[12px] text-gray-400">{filter.count}</span>
              </label>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 mb-6" />

        {/* Property Type */}
        <div className="mb-6">
          <h4 className="text-[14.5px] font-bold text-gray-900 mb-3">Property type</h4>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "Hotels", count: 412 },
              { label: "Apartments", count: 124 },
              { label: "Resorts", count: 53 },
              { label: "Villas", count: 21 },
            ].map((filter) => (
              <label key={filter.label} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-[18px] h-[18px] text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer" />
                <span className="text-[13.5px] text-gray-700 flex-1 group-hover:text-indigo-600 transition-colors">{filter.label}</span>
                <span className="text-[12px] text-gray-400">{filter.count}</span>
              </label>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 mb-6" />

        {/* Property Rating */}
        <div>
          <h4 className="text-[14.5px] font-bold text-gray-900 mb-3">Property rating</h4>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "5 stars", count: 45 },
              { label: "4 stars", count: 112 },
              { label: "3 stars", count: 251 },
              { label: "Unrated", count: 32 },
            ].map((filter) => (
              <label key={filter.label} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-[18px] h-[18px] text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer" />
                <span className="text-[13.5px] text-gray-700 flex-1 group-hover:text-indigo-600 transition-colors">{filter.label}</span>
                <span className="text-[12px] text-gray-400">{filter.count}</span>
              </label>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
