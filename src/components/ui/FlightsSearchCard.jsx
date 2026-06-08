import React, { useState } from "react";
import { BsSearch, BsArrowLeftRight } from "react-icons/bs";

export default function FlightsCard() {
  const [trip, setTrip] = useState("Round Trip");
  const [passengers, setPassengers] = useState(1);
  const [cls, setCls] = useState("Economy");
  const [from, setFrom] = useState({
    code: "DAC",
    city: "Dhaka",
    sub: "Bangladesh, Hazrat Shahja...",
  });
  const [to, setTo] = useState({
    code: "CXB",
    city: "Cox's Bazar",
    sub: "Bangladesh, Cox's Bazar Ai...",
  });
  const swap = () => {
    setFrom(to);
    setTo(from);
  };
  const CLASSES = ["Economy", "Business", "First"];
  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {["One Way", "Round Trip", "Multi City"].map((o) => (
            <button
              key={o}
              onClick={() => setTrip(o)}
              className={`px-3.5 py-1.5 rounded-xl border text-[12px] font-semibold transition-all duration-150
                ${trip === o ? "bg-neutral-900 border-neutral-900 text-baseyellow shadow-sm" : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-neutral-400 hover:bg-white"}`}
            >
              {o}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-neutral-200 bg-white hover:border-neutral-400 transition-all duration-150"
            onClick={() => setPassengers((v) => (v % 9) + 1)}
          >
            <span className="text-[13px] font-bold text-blue-600">
              {passengers} Traveller{passengers > 1 ? "s" : ""}
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
          <div className="relative">
            <select
              value={cls}
              onChange={(e) => setCls(e.target.value)}
              className="appearance-none pl-3.5 pr-8 py-2 rounded-lg border border-neutral-200 bg-white text-[13px] font-bold text-blue-600 outline-none hover:border-neutral-400 transition-all duration-150 cursor-pointer"
            >
              {CLASSES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <svg
              className="w-3.5 h-3.5 text-blue-600 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
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
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-[2] flex items-center gap-3 px-3 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150">
          <span className="text-xl font-black text-neutral-900 tracking-tight w-10 flex-shrink-0 border-r border-neutral-500 pr-15">
            {from.code}
          </span>
          <div className="min-w-0">
            <p className="text-[14px] font-bold text-neutral-900 truncate">
              {from.city}
            </p>
            <p className="text-[11.5px] text-neutral-400 truncate">
              {from.sub}
            </p>
          </div>
        </div>
        <button
          onClick={swap}
          className="w-10 h-10 rounded-full border border-black flex-shrink-0 flex items-center justify-center hover:rotate-180 transition-all duration-300 bg-white shadow-sm"
        >
          <BsArrowLeftRight className="text-sm text-black" />
        </button>
        <div className="flex-[2] flex items-center gap-3 px-3 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150">
          <span className="text-xl font-black text-neutral-900 tracking-tight w-10 flex-shrink-0 border-r border-neutral-500 pr-15">
            {to.code}
          </span>
          <div className="min-w-0">
            <p className="text-[14px] font-bold text-neutral-900 truncate">
              {to.city}
            </p>
            <p className="text-[11.5px] text-neutral-400 truncate">{to.sub}</p>
          </div>
        </div>
        <div className="flex-1 flex items-center gap-3 px-10 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            06
          </span>
          <div>
            <p className="text-sm font-bold text-neutral-900">June, Sat</p>
            <p className="text-xs text-neutral-400">Departure</p>
          </div>
        </div>
        {trip !== "One Way" && (
          <div className="flex-1 flex items-center gap-3 px-10 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150">
            <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
              08
            </span>
            <div>
              <p className="text-sm font-bold text-neutral-900">June, Mon</p>
              <p className="text-xs text-neutral-400">Return</p>
            </div>
          </div>
        )}
        {/* FIXED: w-14 h-14 */}
        <button className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-primaryColor transition-all duration-150 active:scale-[0.97]">
          <BsSearch className="text-baseyellow text-lg font-extrabold" />
        </button>
      </div>
    </div>
  );
}
