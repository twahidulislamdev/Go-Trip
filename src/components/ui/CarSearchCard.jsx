import React, { useState } from "react";
import { BsSearch, BsArrowLeftRight } from "react-icons/bs";

export default function CarCard({ className }) {
  const [trip, setTrip] = useState("One Way");
  const [passengers, setPassengers] = useState(1);
  const swap = () => {};
  return (
    <div className={`px-3 py-3 space-y-4 sm:px-5 sm:space-y-5 ${className}`}>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {["One Way", "Round Trip"].map((o) => (
            <button
              key={o}
              onClick={() => setTrip(o)}
              className={`px-3.5 py-1.5 rounded-xl border text-[12px] font-semibold transition-all duration-150 cursor-pointer hover:bg-black
                ${trip === o ? "bg-primaryColor border-primaryColor text-white shadow-sm" : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-neutral-400 hover:bg-white"}`}
            >
              {o}
            </button>
          ))}
        </div>
        <button
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-neutral-200 bg-white hover:border-neutral-400 transition-all duration-150"
          onClick={() => setPassengers((v) => (v % 9) + 1)}
        >
          <span className="text-[13px] font-bold text-blue-600">
            {passengers} Person{passengers > 1 ? "s" : ""}
          </span>
          <svg
            className="w-3.5 h-3.5 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:flex-wrap lg:flex-nowrap">
        <div className="flex w-full min-w-0 items-center gap-3 px-3 py-3.5 rounded-xl border border-neutral-200 bg-white hover:border-neutral-400 cursor-pointer transition-all duration-150 md:flex-1">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0 }}
          >
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <div className="min-w-0">
            <p className="text-[14px] font-bold text-neutral-900 truncate">
              City or airport
            </p>
            <p className="text-[11.5px] text-neutral-400 truncate">
              Pick-up Location
            </p>
          </div>
        </div>
        <button
          onClick={swap}
          className="h-10 w-full rounded-xl border border-black flex-shrink-0 flex items-center justify-center hover:rotate-180 transition-all duration-300 bg-white shadow-sm md:w-9 md:rounded-full"
        >
          <BsArrowLeftRight className="text-sm text-black" />
        </button>
        <div className="flex w-full min-w-0 items-center gap-3 px-3 py-3.5 rounded-xl border border-neutral-200 bg-white hover:border-neutral-400 cursor-pointer transition-all duration-150 md:flex-1">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0 }}
          >
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <div className="min-w-0">
            <p className="text-[14px] font-bold text-neutral-900 truncate">
              City or airport
            </p>
            <p className="text-[11.5px] text-neutral-400 truncate">
              Drop-off Location
            </p>
          </div>
        </div>
        <div className="flex w-full min-w-0 items-center gap-3 px-3 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150 md:flex-1">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            02
          </span>
          <div>
            <p className="text-[13px] font-bold text-neutral-900">March, Wed</p>
            <p className="text-[11.5px] text-neutral-400">Pick-up Date</p>
          </div>
        </div>
        {trip === "Round Trip" && (
          <div className="flex w-full min-w-0 items-center gap-3 px-3 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150 md:flex-1">
            <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
              11
            </span>
            <div>
              <p className="text-[13px] font-bold text-neutral-900">
                April, Fri
              </p>
              <p className="text-[11.5px] text-neutral-400">Drop-off Date</p>
            </div>
          </div>
        )}
        {/* FIXED: w-14 h-14 */}
        <button className="flex h-12 w-full items-center justify-center rounded-xl bg-primaryColor transition-all duration-150 active:scale-[0.97] cursor-pointer hover:bg-black md:h-14 md:w-14 md:flex-shrink-0">
          <BsSearch className="text-white text-lg font-extrabold" />
        </button>
      </div>
    </div>
  );
}
