import React from "react";
import { BsSearch } from "react-icons/bs";

export default function DesSearchCard({ className }) {
  return (
    <div className={`px-5 py-3 space-y-5 ${className}`}>
      <div className="flex items-center opacity-0 pointer-events-none select-none">
        <button className="px-3.5 py-2 text-[13px] font-semibold border rounded-xl">
          Placeholder
        </button>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-[2] flex items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-200 bg-white hover:border-neutral-400 cursor-pointer transition-all duration-150">
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
              London
            </p>
            <p className="text-[11.5px] text-neutral-400 truncate leading-tight">
              United Kingdom
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150 min-w-[270px]">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            02
          </span>
          <div>
            <p className="text-[13px] font-bold text-neutral-900 leading-tight">
              March, Wednesday
            </p>
            <p className="text-[11.5px] text-neutral-400 leading-tight">
              Check-in
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150 min-w-[270px]">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            11
          </span>
          <div>
            <p className="text-[13px] font-bold text-neutral-900 leading-tight">
              April, Friday
            </p>
            <p className="text-[11.5px] text-neutral-400 leading-tight">
              Check-out
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150 min-w-[270px]">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            02
          </span>
          <div>
            <p className="text-[13px] font-bold text-neutral-900 leading-tight">
              Guests
            </p>
            <p className="text-[11.5px] text-neutral-400 leading-tight">
              1 Room
            </p>
          </div>
        </div>
        <button className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-primaryColor transition-all duration-150 active:scale-[0.97] hover:bg-black cursor-pointer">
          <BsSearch className="text-white text-lg font-extrabold" />
        </button>
      </div>
    </div>
  );
}
