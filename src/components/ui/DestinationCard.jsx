"use client";

import { useState } from "react";

export default function DestinationCard() {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm transition-shadow hover:shadow-md flex w-full min-w-0 flex-col overflow-hidden lg:flex-row">
        {/* Image Section */}
        <div className="relative h-52 w-full sm:h-60 lg:h-auto lg:w-[300px] xl:w-[360px] lg:flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop&auto=format"
            alt="Bali Destination"
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
        <div className="flex min-w-0 flex-1 flex-col gap-1 px-4 py-4 sm:px-5">
          {/* Destination Name */}
          <h2 className="text-base font-extrabold text-gray-900 leading-snug sm:text-[17px]">
            Bali Paradise 7 Days 6 Nights Experience
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
            <span>Ubud, Bali, Indonesia</span>
            <a
              href="#"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              Show itinerary
            </a>
          </div>

          {/* Divider */}
          <hr className="border-gray-100 my-2" />

          {/* Info */}
          <p className="text-[13.5px] font-bold text-gray-900">Guided Cultural Tour</p>
          <p className="text-[12.5px] text-gray-500">
            Includes flights, 4-star hotels, and daily breakfast
          </p>

          {/* Free Cancellation */}
          <p className="text-green-600 text-[13px] font-bold mt-2">
            Free cancellation up to 7 days before
          </p>
          <p className="text-green-600 text-[12.5px]">
            Reserve now and pay later to secure your spot.
          </p>

          {/* Amenity Tags */}
          <div className="flex gap-2 flex-wrap mt-2">
            {["Flights included", "Hotels", "Transport", "Meals"].map((tag) => (
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
        <div className="flex flex-col justify-between items-start gap-3 border-t border-gray-100 px-4 py-4 sm:flex-row sm:items-end sm:px-5 lg:min-w-[170px] lg:flex-col lg:items-end lg:border-l lg:border-t-0">
          {/* Score */}
          <div className="flex items-center gap-2">
            <div className="text-left md:text-right">
              <p className="text-[13px] font-bold text-gray-900">Exceptional</p>
              <p className="text-[12px] text-gray-500">1,245 reviews</p>
            </div>
            <div className="bg-primaryColor text-white text-[18px] font-extrabold rounded-lg rounded-bl-none px-3 py-2 leading-none">
              4.9
            </div>
          </div>

          {/* Price + CTA */}
          <div className="w-full text-left sm:w-auto sm:text-right">
            <p className="text-[12px] text-gray-500">7 days, per adult</p>
            <p className="text-[26px] font-extrabold text-gray-900 leading-tight">
              US$850
            </p>
            <p className="text-[12px] text-gray-500">
              Includes taxes and fees
            </p>
            <button className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-primaryColor px-4 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#0057b8] sm:w-auto">
              View Details
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
    </div>
  );
}
