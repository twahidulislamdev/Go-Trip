import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function ActivitySearchCard({ className = "" }) {
  const [startDate] = useState("08");
  const [endDate] = useState("10");
  const [people] = useState("01");

  return (
    <div className={`px-3 py-3 sm:px-5 sm:py-4 ${className}`}>
      <div className="flex h-full flex-col gap-2 md:flex-row md:flex-wrap lg:flex-nowrap">
        {/* Location */}
        <div className="flex h-full w-full min-w-0 items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-200 bg-white hover:border-neutral-400 cursor-pointer transition-all duration-150 md:flex-1">
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
            <p className="text-base font-bold text-neutral-900 truncate leading-tight">
              Location
            </p>
            <p className="text-xs text-neutral-500 truncate leading-tight">
              Where to go?
            </p>
          </div>
        </div>

        {/* Start Date */}
        <div className="flex h-full w-full min-w-0 items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150 md:flex-1 lg:min-w-[230px] xl:min-w-[280px]">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            {startDate}
          </span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-bold leading-tight text-neutral-900 sm:text-base">
              June, Monday
            </p>
            <p className="text-xs text-neutral-500 leading-tight">Start Date</p>
          </div>
        </div>

        {/* End Date */}
        <div className="flex h-full w-full min-w-0 items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150 md:flex-1 lg:min-w-[230px] xl:min-w-[280px]">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            {endDate}
          </span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-bold leading-tight text-neutral-900 sm:text-base">
              June, Wednesday
            </p>
            <p className="text-xs text-neutral-500 leading-tight">End Date</p>
          </div>
        </div>

        {/* People */}
        <div className="flex h-full w-full min-w-0 items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150 md:flex-1 lg:min-w-[230px] xl:min-w-[280px]">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            {people}
          </span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-bold leading-tight text-neutral-900 sm:text-base">
              1 person
            </p>
            <p className="text-xs text-neutral-500 leading-tight">People</p>
          </div>
        </div>

        {/* Search Button */}
        <button className="flex h-12 w-full items-center justify-center rounded-xl bg-primaryColor transition-all duration-150 active:scale-[0.97] hover:opacity-90 cursor-pointer md:h-full md:min-h-14 md:w-14 md:flex-shrink-0">
          <BsSearch className="text-white text-lg font-extrabold" />
        </button>
      </div>
    </div>
  );
}
