"use client";
import React, { useState } from "react";
import Container from "../ui/Container";
import {
  BsFillPinMapFill,
  BsBuilding,
  BsAirplaneEnginesFill,
  BsCarFrontFill,
  BsSearch,
  BsArrowLeftRight,
} from "react-icons/bs";
import { MdOutlineSurfing } from "react-icons/md";

// ------------------ Tab Config Start ------------------------
const TABS = [
  { key: "dest", label: "Destination", Icon: BsFillPinMapFill },
  { key: "hotel", label: "Hotel", Icon: BsBuilding },
  { key: "activity", label: "Activity", Icon: MdOutlineSurfing },
  { key: "flights", label: "Flights", Icon: BsAirplaneEnginesFill },
  { key: "car", label: "Car Rent", Icon: BsCarFrontFill },
];
// ------------------ Tab Config End ------------------------

// ------------------ Activity Categories Start ------------------------
const ACTIVITY_CATS = [
  { label: "Hiking", emoji: "🏔️" },
  { label: "Cooking", emoji: "🍳" },
  { label: "Diving", emoji: "🤿" },
  { label: "Surfing", emoji: "🏄" },
  { label: "Cycling", emoji: "🚴" },
  { label: "Museum", emoji: "🏛️" },
  { label: "Yoga", emoji: "🧘" },
];
// ------------------ Activity Categories End ------------------------

// ------------------ Stats Start ------------------------
const STATS = [
  { value: "150+", label: "Destinations", emoji: "✈️" },
  { value: "50K+", label: "Travelers", emoji: "🧳" },
  { value: "4.9★", label: "Avg Rating", emoji: "⭐" },
];
// ------------------ Stats End ------------------------

// ------------------ Float Badges Start ------------------------
const FLOAT_BADGES = [
  { label: "Santorini", sub: "Greece", rating: "4.9", emoji: "🏛️" },
  { label: "Maldives", sub: "Asia", rating: "4.8", emoji: "🌊" },
  { label: "Kyoto", sub: "Japan", rating: "4.9", emoji: "⛩️" },
  { label: "Bali", sub: "Indonesia", rating: "4.7", emoji: "🌴" },
];
// ------------------ Float Badges End ------------------------

// ======================================================================================
// ======================================================================================

// ------------------ Destination Component Start ------------------------
function DestCard() {
  return (
    <div className="px-5 py-4">
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
        <button className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-primaryColor transition-all duration-150 active:scale-[0.97]">
          <BsSearch className="text-baseyellow text-lg font-extrabold" />
        </button>
      </div>
    </div>
  );
}
// ------------------ Destination Component End ------------------------

// ------------------ Hotel Component Start ------------------------
function HotelCard() {
  return (
    <div className="px-5 py-4">
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
              Cox&apos;s Bazar
            </p>
            <p className="text-[11.5px] text-neutral-400 truncate leading-tight">
              Cox&apos;s Bazar, Bangladesh
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150 min-w-[270px]">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            08
          </span>
          <div>
            <p className="text-[13px] font-bold text-neutral-900 leading-tight">
              June, Monday
            </p>
            <p className="text-[11.5px] text-neutral-400 leading-tight">
              Check-in
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150 min-w-[270px]">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            10
          </span>
          <div>
            <p className="text-[13px] font-bold text-neutral-900 leading-tight">
              June, Wednesday
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
        <button className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-primaryColor transition-all duration-150 active:scale-[0.97]">
          <BsSearch className="text-baseyellow text-lg font-extrabold" />
        </button>
      </div>
    </div>
  );
}
// ----------------- Hotel Component End ------------------------

// ----------------- Activity Component Start ------------------------
function ActivityCard() {
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
// ------------------- Activity Card End ------------------------

// ----------------- Flights Component Start ------------------------
function FlightsCard() {
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
// ----------------- Flights Component End ------------------------

// ----------------- Car Component Start ------------------------
function CarCard() {
  const [trip, setTrip] = useState("One Way");
  const [passengers, setPassengers] = useState(1);
  const swap = () => {};
  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {["One Way", "Round Trip"].map((o) => (
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
      <div className="flex items-center gap-2">
        <div className="flex-1 flex items-center gap-3 px-3 py-3.5 rounded-xl border border-neutral-200 bg-white hover:border-neutral-400 cursor-pointer transition-all duration-150">
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
          className="w-9 h-10 rounded-full border border-black flex-shrink-0 flex items-center justify-center hover:rotate-180 transition-all duration-300 bg-white shadow-sm"
        >
          <BsArrowLeftRight className="text-sm text-black" />
        </button>
        <div className="flex-1 flex items-center gap-3 px-3 py-3.5 rounded-xl border border-neutral-200 bg-white hover:border-neutral-400 cursor-pointer transition-all duration-150">
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
        <div className="flex-1 flex items-center gap-3 px-3 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            02
          </span>
          <div>
            <p className="text-[13px] font-bold text-neutral-900">March, Wed</p>
            <p className="text-[11.5px] text-neutral-400">Pick-up Date</p>
          </div>
        </div>
        {trip === "Round Trip" && (
          <div className="flex-1 flex items-center gap-3 px-3 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150">
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
        <button className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-primaryColor transition-all duration-150 active:scale-[0.97] cursor-pointer hover:bg-black">
          <BsSearch className="text-baseyellow text-lg font-extrabold" />
        </button>
      </div>
    </div>
  );
}
// ----------------- Car Component End ------------------------

const CARD_MAP = {
  dest: DestCard,
  hotel: HotelCard,
  activity: ActivityCard,
  flights: FlightsCard,
  car: CarCard,
};

/* ------------------------- Banner ------------------------- */
const Banner = () => {
  const [activeTab, setActiveTab] = useState("dest");
  const ActiveCard = CARD_MAP[activeTab];

  return (
    <>
      {/* Font import only — no other CSS rules */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&family=Outfit:wght@400;500;600;700&display=swap');`}</style>

      <div className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
        {/* ── Subtle grid background ── */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 pointer-events-none" />

        {/* ── Soft corner glows ── */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-indigo-100 opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-violet-100 opacity-50 blur-3xl pointer-events-none" />

        {/* ── Floating destination badges (left) ── */}
        <div className="absolute left-4 top-[15%] hidden xl:flex flex-col gap-3 pointer-events-none animate-bounce [animation-duration:4s]">
          {[FLOAT_BADGES[0], FLOAT_BADGES[1]].map(
            ({ label, sub, rating, emoji }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm border border-white rounded-2xl px-3.5 py-2.5 shadow-sm min-w-[140px]"
              >
                <span className="text-xl">{emoji}</span>
                <div>
                  <p
                    className="text-[12.5px] font-bold text-slate-800 leading-tight"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-[10.5px] text-slate-400 leading-tight"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {sub}
                  </p>
                  <p
                    className="text-[11px] font-semibold text-amber-500 leading-tight"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    ⭐ {rating}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>

        {/* ── Floating destination badges (right) ── */}
        <div className="absolute right-4 top-[15%] hidden xl:flex flex-col gap-3 pointer-events-none animate-bounce [animation-duration:5s] [animation-delay:0.3s]">
          {[FLOAT_BADGES[2], FLOAT_BADGES[3]].map(
            ({ label, sub, rating, emoji }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm border border-white rounded-2xl px-3.5 py-2.5 shadow-sm min-w-[140px]"
              >
                <span className="text-xl">{emoji}</span>
                <div>
                  <p
                    className="text-[12.5px] font-bold text-slate-800 leading-tight"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-[10.5px] text-slate-400 leading-tight"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {sub}
                  </p>
                  <p
                    className="text-[11px] font-semibold text-amber-500 leading-tight"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    ⭐ {rating}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>

        {/* ── Main content ── */}
        <Container className="relative z-10 pt-20">
          {/* Eyebrow pill */}
          <div className="flex justify-center">
            <span
              className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 text-[11px] font-semibold text-indigo-600 tracking-widest uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="relative flex items-center justify-center w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-60 animate-ping" />
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 relative z-10" />
              </span>
              Trusted by 50,000+ Travelers
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-center text-5xl md:text-6xl font-black text-slate-900 leading-[1.06] tracking-tight mb-5 animate-[fadeInUp_0.6s_ease_both]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Find Your Next{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500">
              Place to Visit
              {/* Wavy underline as inline SVG — pure JSX, no CSS */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 220 8"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M0 6 Q28 1 55 5 Q82 9 110 4 Q138 0 165 5 Q192 9 220 4"
                  stroke="url(#ug)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="ug" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-center text-base text-slate-500 max-w-md mx-auto mb-8 leading-relaxed"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Discover destinations, stays, flights &amp; more —{" "}
            <em className="not-italic font-medium text-slate-600">
              all in one place.
            </em>
          </p>

          {/* Stats */}
          <div className="flex justify-center flex-wrap gap-2.5 mb-10 ">
            {STATS.map(({ value, label, emoji }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white border border-slate-100 rounded-full px-3 py-2 shadow-sm hover:-translate-y-0.5 transition-transform duration-200 cursor-default"
              >
                <span className="text-sm">{emoji}</span>
                <span
                  className="text-sm font-bold text-slate-800"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {value}
                </span>
                <span
                  className="text-xs text-slate-400"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-3">
            {TABS.map(({ key, label, Icon }) => {
              const active = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl border text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5
                    ${
                      active
                        ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200"
                        : "bg-white border-slate-200 text-slate-500 hover:border-indigo-200 hover:text-indigo-500"
                    }`}
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <Icon className="text-[14px]" />
                  {label}
                </button>
              );
            })}
          </div>

          {/* Search card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/80 border border-slate-100 overflow-hidden">
            <ActiveCard />
          </div>

          {/* Scroll hint */}
          <div className="flex justify-center mt-5">
            <span
              className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 tracking-widest uppercase animate-bounce"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 1v10M2 8l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Scroll to explore
            </span>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
