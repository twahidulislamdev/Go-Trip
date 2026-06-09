import React from "react";

export default function FlightSidebar() {
  return (
    <aside className="w-full bg-white p-5 border border-gray-200 rounded-xl shadow-sm flex flex-col gap-6">
      <div>
        <h4 className="text-[15px] font-bold text-gray-900 mb-3">Search by airline</h4>
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
            />
          </svg>
          <input
            type="text"
            placeholder="e.g. Biman, NovoAir"
            className="w-full border border-gray-300 rounded-lg py-2.5 pl-9 pr-3 text-[13.5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      <hr className="border-gray-200" />

      <div>
        <h3 className="text-[16px] font-extrabold text-gray-900 mb-5">Filter by:</h3>

        <div className="mb-6">
          <h4 className="text-[14.5px] font-bold text-gray-900 mb-3">Stops</h4>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "Non-stop", count: 32 },
              { label: "1 stop", count: 47 },
              { label: "2+ stops", count: 18 },
            ].map((item) => (
              <label key={item.label} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-[18px] h-[18px] text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer" />
                <span className="text-[13.5px] text-gray-700 flex-1 group-hover:text-indigo-600 transition-colors">{item.label}</span>
                <span className="text-[12px] text-gray-400">{item.count}</span>
              </label>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 mb-6" />

        <div className="mb-6">
          <h4 className="text-[14.5px] font-bold text-gray-900 mb-3">Airlines</h4>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "Biman Bangladesh", count: 14 },
              { label: "US-Bangla", count: 19 },
              { label: "NovoAir", count: 11 },
              { label: "Air Astra", count: 8 },
            ].map((item) => (
              <label key={item.label} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-[18px] h-[18px] text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer" />
                <span className="text-[13.5px] text-gray-700 flex-1 group-hover:text-indigo-600 transition-colors">{item.label}</span>
                <span className="text-[12px] text-gray-400">{item.count}</span>
              </label>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 mb-6" />

        <div>
          <h4 className="text-[14.5px] font-bold text-gray-900 mb-3">Departure time</h4>
          <div className="flex flex-col gap-2.5 text-[13.5px] text-gray-700">
            {['Before 6 AM', '6 AM - 12 PM', '12 PM - 6 PM', 'After 6 PM'].map((item) => (
              <label key={item} className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="departure-time" className="w-[18px] h-[18px] text-indigo-600 focus:ring-indigo-500 cursor-pointer" />
                <span className="group-hover:text-indigo-600 transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
