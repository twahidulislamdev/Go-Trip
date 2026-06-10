import React from "react";

export default function ActivitySidebar() {
  return (
    <div className="w-full bg-white p-5 border border-gray-200 rounded-xl shadow-sm flex flex-col gap-6">
      <div>
        <h4 className="text-[15px] font-bold text-gray-900 mb-3">
          Search by activity name
        </h4>
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
            placeholder="e.g. Surf lesson, Cooking class"
            className="w-full border border-gray-300 rounded-lg py-2.5 pl-9 pr-3 text-[13.5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      <hr className="border-gray-200" />

      <div>
        <h3 className="text-[16px] font-extrabold text-gray-900 mb-5">
          Filter by:
        </h3>

        <div className="mb-6">
          <h4 className="text-[14.5px] font-bold text-gray-900 mb-3">
            Popular filters
          </h4>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "Free cancellation", count: 312 },
              { label: "Instant confirmation", count: 428 },
              { label: "Skip the line", count: 156 },
              { label: "Small group", count: 203 },
            ].map((filter) => (
              <label
                key={filter.label}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="w-[18px] h-[18px] text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer"
                />
                <span className="text-[13.5px] text-gray-700 flex-1 group-hover:text-indigo-600 transition-colors">
                  {filter.label}
                </span>
                <span className="text-[12px] text-gray-400">
                  {filter.count}
                </span>
              </label>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 mb-6" />

        <div className="mb-6">
          <h4 className="text-[14.5px] font-bold text-gray-900 mb-3">
            Activity type
          </h4>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "Hiking", count: 87 },
              { label: "Cooking", count: 64 },
              { label: "Diving", count: 52 },
              { label: "Surfing", count: 41 },
              { label: "Cycling", count: 38 },
              { label: "Museum", count: 95 },
              { label: "Yoga", count: 29 },
            ].map((filter) => (
              <label
                key={filter.label}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="w-[18px] h-[18px] text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer"
                />
                <span className="text-[13.5px] text-gray-700 flex-1 group-hover:text-indigo-600 transition-colors">
                  {filter.label}
                </span>
                <span className="text-[12px] text-gray-400">
                  {filter.count}
                </span>
              </label>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 mb-6" />

        <div>
          <h4 className="text-[14.5px] font-bold text-gray-900 mb-3">
            Duration
          </h4>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "Up to 1 hour", count: 124 },
              { label: "1-4 hours", count: 286 },
              { label: "Half day", count: 178 },
              { label: "Full day", count: 92 },
              { label: "Multi-day", count: 34 },
            ].map((filter) => (
              <label
                key={filter.label}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="w-[18px] h-[18px] text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer"
                />
                <span className="text-[13.5px] text-gray-700 flex-1 group-hover:text-indigo-600 transition-colors">
                  {filter.label}
                </span>
                <span className="text-[12px] text-gray-400">
                  {filter.count}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
