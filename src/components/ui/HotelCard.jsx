import { useState } from "react";

export default function HotelCard() {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex overflow-hidden w-full hover:shadow-md transition-shadow">
        {/* Image Section */}
        <div className="relative w-[400px] flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop&auto=format"
            alt="Great Northern Hotel"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setWishlisted(!wishlisted)}
            className="absolute top-2 right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:scale-110 transition-transform"
          >
            <svg
              viewBox="0 0 24 24"
              fill={wishlisted ? "#e00" : "none"}
              stroke={wishlisted ? "#e00" : "#555"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>

        {/* Middle Content */}
        <div className="flex-1 px-5 py-4 flex flex-col gap-1">
          {/* Hotel Name */}
          <h2 className="text-[17px] font-extrabold text-gray-900 leading-snug">
            Great Northern Hotel, a Tribute Portfolio Hotel, London
          </h2>

          {/* Stars */}
          <div className="flex gap-0.5 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
              </svg>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-gray-500 text-[13px] mt-1 flex-wrap">
            <span>Westminster Borough, London</span>
            <a
              href="#"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              Show on map
            </a>
            <span>•</span>
            <span>2 km to city center</span>
          </div>

          {/* Divider */}
          <hr className="border-gray-100 my-2" />

          {/* Room Info */}
          <p className="text-[13.5px] font-bold text-gray-900">King Room</p>
          <p className="text-[12.5px] text-gray-500">
            1 extra-large double bed
          </p>

          {/* Free Cancellation */}
          <p className="text-green-600 text-[13px] font-bold mt-2">
            Free cancellation
          </p>
          <p className="text-green-600 text-[12.5px]">
            You can cancel later, so lock in this great price today.
          </p>

          {/* Amenity Tags */}
          <div className="flex gap-2 flex-wrap mt-2">
            {["Breakfast", "WiFi", "Spa", "Bar"].map((tag) => (
              <span
                key={tag}
                className="border border-gray-300 rounded-full px-3 py-1 text-[12.5px] font-semibold text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col justify-between items-end px-5 py-4 min-w-[180px] border-l border-gray-100">
          {/* Score */}
          <div className="flex items-center gap-2">
            <div className="text-right">
              <p className="text-[13px] font-bold text-gray-900">Exceptional</p>
              <p className="text-[12px] text-gray-500">3,014 reviews</p>
            </div>
            <div className="bg-[#003580] text-white text-[18px] font-extrabold rounded-lg rounded-bl-none px-3 py-2 leading-none">
              4.8
            </div>
          </div>

          {/* Price + CTA */}
          <div className="text-right">
            <p className="text-[12px] text-gray-500">8 nights, 2 adult</p>
            <p className="text-[26px] font-extrabold text-gray-900 leading-tight">
              US$72
            </p>
            <p className="text-[12px] text-gray-500">
              +US$828 taxes and charges
            </p>
            <button className="mt-3 bg-[#006ce4] hover:bg-[#0057b8] text-white text-[14px] font-bold rounded-lg px-4 py-3 flex items-center gap-1.5 transition-colors whitespace-nowrap">
              See Availability
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          </div>
        </div>
    </div>
  );
}
