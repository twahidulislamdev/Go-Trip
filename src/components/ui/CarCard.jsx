"use client";

import { useState } from "react";

export default function CarCard() {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <article className="flex w-full min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg lg:flex-row">
      <div className="relative h-52 w-full sm:h-60 lg:h-auto lg:w-[280px] lg:flex-shrink-0 xl:w-[320px]">
        <img
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=350&fit=crop&auto=format"
          alt="Premium rental car"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-3">
          <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-[12px] font-bold text-gray-800 shadow-sm">
            SUV - Auto
          </span>
        </div>
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-110"
          type="button"
          aria-label="Save car"
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
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h2 className="text-base font-extrabold leading-snug text-gray-900 sm:text-[17px]">
            Toyota Corolla Premium
          </h2>
          <span className="rounded-full bg-green-50 px-2.5 py-1 text-[11.5px] font-bold text-green-700">
            Free cancellation
          </span>
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[13px] text-gray-500">
          <span>Hertz - Airport pickup</span>
          <span>-</span>
          <span>5 seats</span>
          <span>-</span>
          <span>Hybrid</span>
        </div>

        <hr className="my-2 border-gray-100" />

        <p className="text-[13.5px] font-bold text-gray-900">
          Includes full insurance, GPS, and roadside support
        </p>
        <p className="text-[12.5px] text-gray-500">
          Pickup from Dhaka Airport - 24/7 support
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {["Automatic", "AC", "Bluetooth", "Unlimited mileage"].map((tag) => (
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
            <p className="text-[13px] font-bold text-gray-900">Excellent</p>
            <p className="text-[12px] text-gray-500">128 reviews</p>
          </div>
          <div className="rounded-lg rounded-bl-none bg-primaryColor px-3 py-2 text-[18px] font-extrabold leading-none text-white">
            4.7
          </div>
        </div>

        <div className="w-full text-left sm:w-auto sm:text-right">
          <p className="text-[12px] text-gray-500">per day</p>
          <p className="text-[26px] font-extrabold leading-tight text-gray-900">
            US$42
          </p>
          <p className="text-[12px] text-gray-500">Taxes included</p>
          <button
            className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-primaryColor px-4 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#0057b8] sm:w-auto"
            type="button"
          >
            Reserve now
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
