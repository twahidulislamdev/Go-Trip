"use client";

import { useState } from "react";

export default function HotelCard() {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <article className="flex w-full min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg lg:flex-row">
      <div className="relative h-52 w-full sm:h-60 lg:h-auto lg:w-[300px] lg:flex-shrink-0 xl:w-[360px]">
        <img
          src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop&auto=format"
          alt="Great Northern Hotel"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-3">
          <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-[12px] font-bold text-gray-800 shadow-sm">
            Luxury stay
          </span>
        </div>
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-110"
          type="button"
          aria-label="Save hotel"
        >
          <svg
            viewBox="0 0 24 24"
            fill={wishlisted ? "#e00" : "none"}
            stroke={wishlisted ? "#e00" : "#555"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1 px-4 py-4 sm:px-5">
        <h2 className="text-base font-extrabold leading-snug text-gray-900 sm:text-[17px]">
          Great Northern Hotel, a Tribute Portfolio Hotel, London
        </h2>

        <div className="mt-0.5 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="h-4 w-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
          ))}
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[13px] text-gray-500">
          <span>Westminster Borough, London</span>
          <a
            href="#"
            className="font-semibold text-blue-600 underline hover:text-blue-800"
          >
            Show on map
          </a>
          <span>-</span>
          <span>2 km to city center</span>
        </div>

        <hr className="my-2 border-gray-100" />

        <p className="text-[13.5px] font-bold text-gray-900">
          King Room with city view
        </p>
        <p className="text-[12.5px] text-gray-500">
          1 extra-large double bed - breakfast option available
        </p>

        <p className="mt-2 text-[13px] font-bold text-green-600">
          Free cancellation
        </p>
        <p className="text-[12.5px] text-green-600">
          You can cancel later, so lock in this great price today.
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {["Breakfast", "WiFi", "Spa", "Bar"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[12.5px] font-semibold text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 border-t border-gray-100 bg-gray-50/70 px-4 py-4 sm:flex-row sm:items-end sm:px-5 lg:min-w-[190px] lg:flex-col lg:items-end lg:border-l lg:border-t-0">
        <div className="flex items-center gap-2">
          <div className="text-left sm:text-right">
            <p className="text-[13px] font-bold text-gray-900">Exceptional</p>
            <p className="text-[12px] text-gray-500">3,014 reviews</p>
          </div>
          <div className="rounded-lg rounded-bl-none bg-primaryColor px-3 py-2 text-[18px] font-extrabold leading-none text-white">
            4.8
          </div>
        </div>

        <div className="w-full text-left sm:w-auto sm:text-right">
          <p className="text-[12px] text-gray-500">8 nights, 2 adults</p>
          <p className="text-[26px] font-extrabold leading-tight text-gray-900">
            US$72
          </p>
          <p className="text-[12px] text-gray-500">+US$828 taxes and charges</p>
          <button className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-primaryColor px-4 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#0057b8] sm:w-auto">
            See Availability
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
