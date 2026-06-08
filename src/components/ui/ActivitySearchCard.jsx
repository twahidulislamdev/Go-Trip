import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const ACTIVITY_CATS = [
  { label: "Hiking", emoji: "🏔️" },
  { label: "Cooking", emoji: "🍳" },
  { label: "Diving", emoji: "🤿" },
  { label: "Surfing", emoji: "🏄" },
  { label: "Cycling", emoji: "🚴" },
  { label: "Museum", emoji: "🏛️" },
  { label: "Yoga", emoji: "🧘" },
];

export default function ActivityCard() {
  const [sel, setSel] = useState([]);
  const toggle = (c) =>
    setSel((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]));
  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex flex-wrap gap-2">
        {ACTIVITY_CATS.map(({ label, emoji }) => (
          <button
            key={label}
            onClick={() => toggle(label)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-[13px] font-semibold transition-all duration-150
              ${sel.includes(label) ? "bg-neutral-900 border-neutral-900 text-baseyellow shadow-sm" : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-neutral-400 hover:bg-white"}`}
          >
            <span className="text-sm leading-none">{emoji}</span>
            {label}
          </button>
        ))}
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
              City or Region…
            </p>
            <p className="text-xs text-neutral-500 truncate leading-tight">
              Where to go?
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150 min-w-[270px]">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            08
          </span>
          <div>
            <p className="text-base font-bold text-neutral-900 leading-tight">
              June, Monday
            </p>
            <p className="text-xs text-neutral-500 leading-tight">Start Date</p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150 min-w-[270px]">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            10
          </span>
          <div>
            <p className="text-base font-bold text-neutral-900 leading-tight">
              June, Wednesday
            </p>
            <p className="text-xs text-neutral-500 leading-tight">End Date</p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150 min-w-[270px]">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            01
          </span>
          <div>
            <p className="text-base font-bold text-neutral-900 leading-tight">
              1 person
            </p>
            <p className="text-xs text-neutral-500 leading-tight">People</p>
          </div>
        </div>
        {/* FIXED: w-14 h-14 */}
        <button className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-primaryColor transition-all duration-150 active:scale-[0.97]">
          <BsSearch className="text-baseyellow text-lg font-extrabold" />
        </button>
      </div>
    </div>
  );
}
