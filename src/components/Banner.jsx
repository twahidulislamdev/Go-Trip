"use client";
import React, { useState } from "react";
import Container from "./Container";
import {
  BsFillPinMapFill,
  BsBuilding,
  BsAirplaneEnginesFill,
  BsCarFrontFill,
  BsSearch,
  BsArrowLeftRight,
  BsPeopleFill,
  BsCalendarEvent,
  BsGeoAltFill,
} from "react-icons/bs";
import { MdOutlineSurfing } from "react-icons/md";

/* ── Tab config ─────────────────────────────────────────── */
const TABS = [
  { key: "dest", label: "Destination", Icon: BsFillPinMapFill },
  { key: "hotel", label: "Hotel", Icon: BsBuilding },
  { key: "activity", label: "Activity", Icon: MdOutlineSurfing },
  { key: "flights", label: "Flights", Icon: BsAirplaneEnginesFill },
  { key: "car", label: "Car Rent", Icon: BsCarFrontFill },
];

const ACTIVITY_CATS = [
  { label: "Hiking", emoji: "🏔️" },
  { label: "Cooking", emoji: "🍳" },
  { label: "Diving", emoji: "🤿" },
  { label: "Surfing", emoji: "🏄" },
  { label: "Cycling", emoji: "🚴" },
  { label: "Museum", emoji: "🏛️" },
  { label: "Yoga", emoji: "🧘" },
];

/* ── Shared Field Component ──────────────────────────────── */
function Field({ icon, label, placeholder, noBorder, children, wide }) {
  return (
    <div
      className={`group flex flex-col justify-center px-5 py-4 cursor-pointer transition-colors duration-150 hover:bg-neutral-50 ${noBorder ? "" : "border-r border-neutral-100"} ${wide ? "col-span-2" : ""}`}
    >
      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
        <span className="text-sm leading-none">{icon}</span>
        {label}
      </span>
      {children ? (
        children
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="bg-transparent text-sm font-medium text-neutral-700 placeholder-neutral-300 outline-none w-full group-hover:placeholder-neutral-400 transition-colors"
        />
      )}
    </div>
  );
}

function DateField({ label, icon, noBorder }) {
  return (
    <div
      className={`group flex flex-col justify-center px-5 py-4 cursor-pointer transition-colors duration-150 hover:bg-neutral-50 ${noBorder ? "" : "border-r border-neutral-100"}`}
    >
      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
        <span className="text-sm leading-none">{icon}</span>
        {label}
      </span>
      <input
        type="date"
        className="bg-transparent text-sm font-medium text-neutral-500 outline-none w-full cursor-pointer [color-scheme:light]"
      />
    </div>
  );
}

function CounterField({ label, icon, value, onChange, noBorder }) {
  return (
    <div
      className={`flex flex-col justify-center px-5 py-4 ${noBorder ? "" : "border-r border-neutral-100"}`}
    >
      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2.5">
        <span className="text-sm leading-none">{icon}</span>
        {label}
      </span>
      <div className="flex items-center gap-2.5">
        <button
          onClick={() => onChange((v) => Math.max(1, v - 1))}
          className="w-6 h-6 rounded-full border border-neutral-200 text-neutral-500 flex items-center justify-center text-base font-light hover:border-neutral-900 hover:text-neutral-900 transition-all leading-none"
        >
          −
        </button>
        <span className="text-sm font-bold text-neutral-900 tabular-nums w-4 text-center">
          {value}
        </span>
        <button
          onClick={() => onChange((v) => v + 1)}
          className="w-6 h-6 rounded-full border border-neutral-200 text-neutral-500 flex items-center justify-center text-base font-light hover:border-neutral-900 hover:text-neutral-900 transition-all leading-none"
        >
          +
        </button>
      </div>
    </div>
  );
}

function SearchBtn({ label, wide }) {
  return (
    <button
      className={`bg-neutral-900 hover:bg-neutral-800 active:scale-[0.98] transition-all duration-150 roundex-xl flex items-center justify-center gap-2 text-[16px] font-bold text-baseyellow rounded-xl px-7 whitespace-nowrap`}
    >
      <BsSearch className="text-lg" />
      {label}
    </button>
  );
}

function ToggleBar({ options, active, onChange }) {
  return (
    <div className="flex gap-1.5 px-5 py-3 border-b border-neutral-100 bg-neutral-50/60">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={`px-3.5 py-1.5 rounded-lg text-[11.5px] font-semibold transition-all duration-150
            ${
              active === o
                ? "bg-neutral-900 text-baseyellow shadow-sm"
                : "text-neutral-500 hover:text-neutral-700 hover:bg-white"
            }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function Divider() {
  return <div className="w-px self-stretch my-4 bg-neutral-100" />;
}

/* ── Shared Image-style Search Bar ───────────────────────── */
function ImgSearchField({ label, value, borderRight = true, wide = false }) {
  return (
    <div
      className={`flex flex-col justify-center px-7 py-0 cursor-pointer hover:bg-gray-50/60 transition-colors duration-150 ${
        borderRight ? "border-r border-gray-200" : ""
      } ${wide ? "flex-[2]" : "flex-1"}`}
    >
      <p className="text-[12px] font-bold text-[#1a1a2e] mb-[3px] leading-none">
        {label}
      </p>
      <p className="text-[13px] text-gray-400 truncate leading-snug">{value}</p>
    </div>
  );
}

function ImgBlueSearchBtn({ label = "Search" }) {
  return (
    <button className="flex items-center gap-2 bg-[#3554D1] hover:bg-[#2d49bc] active:scale-[0.98] transition-all duration-150 text-white text-[14px] font-semibold px-8 whitespace-nowrap flex-shrink-0">
      <BsSearch className="text-[15px]" />
      {label}
    </button>
  );
}

/* ── Destination Card ────────────────────────────────────── */
function DestCard() {
  return (
    <div className="px-5 py-4">
      <div className="flex items-center gap-2">
        {/* Location block */}
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

        {/* Check-in block */}
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

        {/* Check-out block */}
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

        {/* Guests block */}
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

        {/* Orange Search Button */}
        <button className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-primaryColor transition-all duration-150 active:scale-[0.97]">
          <BsSearch className="text-baseyellow text-lg font-extrabold" />
        </button>
      </div>
    </div>
  );
}

/* ── Hotel Card ──────────────────────────────────────────── */
function HotelCard() {
  return (
    <div className="px-5 py-4">
      <div className="flex items-center gap-2">
        {/* Location block */}
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

        {/* Check-in block */}
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

        {/* Check-out block */}
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

        {/* Guests block */}
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

        {/* Orange Search Button */}
        <button className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-primaryColor transition-all duration-150 active:scale-[0.97]">
          <BsSearch className="text-baseyellow text-lg font-extrabold" />
        </button>
      </div>
    </div>
  );
}

/* ── Activity Card ───────────────────────────────────────── */
function ActivityCard() {
  const [sel, setSel] = useState([]);
  const toggle = (c) =>
    setSel((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]));

  return (
    <div className="px-5 py-4 space-y-4">
      {/* Category pills */}
      <div className="flex flex-wrap gap-2">
        {ACTIVITY_CATS.map(({ label, emoji }) => (
          <button
            key={label}
            onClick={() => toggle(label)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-[13px] font-semibold transition-all duration-150
              ${
                sel.includes(label)
                  ? "bg-neutral-900 border-neutral-900 text-baseyellow shadow-sm"
                  : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-neutral-400 hover:bg-white"
              }`}
          >
            <span className="text-sm leading-none">{emoji}</span>
            {label}
          </button>
        ))}
      </div>

      {/* Search bar */}
      <div className="flex items-center gap-2">
        {/* Location block */}
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
            <p className="text-[14px] font-bold text-neutral-900 truncate leading-tight">
              City or region…
            </p>
            <p className="text-[11.5px] text-neutral-400 truncate leading-tight">
              Where to go?
            </p>
          </div>
        </div>

        {/* Start Date block */}
        <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150 min-w-[270px]">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            08
          </span>
          <div>
            <p className="text-[13px] font-bold text-neutral-900 leading-tight">
              June, Monday
            </p>
            <p className="text-[11.5px] text-neutral-400 leading-tight">
              Start Date
            </p>
          </div>
        </div>

        {/* End Date block */}
        <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150 min-w-[270px]">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            10
          </span>
          <div>
            <p className="text-[13px] font-bold text-neutral-900 leading-tight">
              June, Wednesday
            </p>
            <p className="text-[11.5px] text-neutral-400 leading-tight">
              End Date
            </p>
          </div>
        </div>

        {/* People block */}
        <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150 min-w-[270px]">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            01
          </span>
          <div>
            <p className="text-[13px] font-bold text-neutral-900 leading-tight">
              1 person
            </p>
            <p className="text-[11.5px] text-neutral-400 leading-tight">
              People
            </p>
          </div>
        </div>

        {/* Orange Search Button */}
        <button className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-primaryColor transition-all duration-150 active:scale-[0.97]">
          <BsSearch className="text-baseyellow text-lg font-extrabold" />
        </button>
      </div>
    </div>
  );
}

/* ── Flights Card ────────────────────────────────────────── */
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
      {/* Top bar: radio trip types + traveller/class dropdowns */}
      <div className="flex items-center justify-between">
        {/* Pill trip types */}
        <div className="flex items-center gap-2">
          {["One Way", "Round Trip", "Multi City"].map((o) => (
            <button
              key={o}
              onClick={() => setTrip(o)}
              className={`px-3.5 py-1.5 rounded-xl border text-[12px] font-semibold transition-all duration-150
                ${
                  trip === o
                    ? "bg-neutral-900 border-neutral-900 text-baseyellow shadow-sm"
                    : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-neutral-400 hover:bg-white"
                }`}
            >
              {o}
            </button>
          ))}
        </div>

        {/* Traveller + Class dropdowns */}
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

      {/* Segment cards row */}
      <div className="flex items-center gap-2">
        {/* From segment */}
        <div className="flex-[2] flex items-center gap-3 px-3 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150 group">
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

        {/* Swap button */}
        <button
          onClick={swap}
          className="w-10 h-10 rounded-full border border-black flex-shrink-0 flex items-center justify-center text-neutral-400 hover:border-neutral-900 hover:text-neutral-900 hover:rotate-180 transition-all duration-300 bg-white shadow-sm"
        >
          <BsArrowLeftRight className="text-sm text-black" />
        </button>

        {/* To segment */}
        <div className="flex-[2] flex items-center gap-3 px-3 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150 group">
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

        {/* Departure date segment */}
        <div className="flex-1 flex items-center gap-3 px-10 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            06
          </span>
          <div>
            <p className="text-sm font-bold text-neutral-900">June, Sat</p>
            <p className="text-xs text-neutral-400">Departure</p>
          </div>
        </div>

        {/* Return date segment (hidden for One Way) */}
        {trip !== "One Way" && (
          <div className="flex-1 flex items-center gap-3 px-10 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150">
            <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
              08
            </span>
            <div>
              <p className="text-sm font-bold text-neutral-900 ">June, Mon</p>
              <p className="text-xs text-neutral-400 ">Return</p>
            </div>
          </div>
        )}

        {/* Search button */}
        <button className="flex-shrink-0 w-20 h-16 rounded-xl flex items-center justify-center bg-primaryColor transition-all duration-150 active:scale-[0.97]">
          <BsSearch className="text-baseyellow text-lg font-extrabold" />
        </button>
      </div>
    </div>
  );
}

/* ── Car Card ────────────────────────────────────────────── */
function CarCard() {
  const [trip, setTrip] = useState("One Way");
  const [passengers, setPassengers] = useState(1);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="px-5 py-4 space-y-4">
      {/* Top bar: radio trip types + traveller dropdown */}
      <div className="flex items-center justify-between">
        {/* Pill trip types */}
        <div className="flex items-center gap-2">
          {["One Way", "Round Trip"].map((o) => (
            <button
              key={o}
              onClick={() => setTrip(o)}
              className={`px-3.5 py-1.5 rounded-xl border text-[12px] font-semibold transition-all duration-150
                ${
                  trip === o
                    ? "bg-neutral-900 border-neutral-900 text-baseyellow shadow-sm"
                    : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-neutral-400 hover:bg-white"
                }`}
            >
              {o}
            </button>
          ))}
        </div>

        {/* Travel Person count */}
        <div className="flex items-center gap-2">
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
      </div>

      {/* Search bar */}
      <div className="flex items-center gap-2">
        {/* Pick-up Location block */}
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
        {/* Swap button */}
        <button
          onClick={swap}
          className="w-9 h-10 rounded-full border border-black flex-shrink-0 flex items-center justify-center text-neutral-400 hover:border-neutral-900 hover:text-neutral-900 hover:rotate-180 transition-all duration-300 bg-white shadow-sm"
        >
          <BsArrowLeftRight className="text-sm text-black" />
        </button>

        {/* Drop-off Location block */}
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

        {/* Pick-up Date block */}
        <div className="flex-1 flex items-center gap-3 px-3 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150">
          <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
            02
          </span>
          <div>
            <p className="text-[13px] font-bold text-neutral-900">
              March, Wed
            </p>
            <p className="text-[11.5px] text-neutral-400">
              Pick-up Date
            </p>
          </div>
        </div>

        {/* Drop-off Date block */}
        {trip === "Round Trip" && (
          <div className="flex-1 flex items-center gap-3 px-3 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-neutral-500 cursor-pointer transition-all duration-150">
            <span className="text-[28px] font-black text-neutral-900 leading-none border-r-2 border-neutral-300 pr-3">
              11
            </span>
            <div>
              <p className="text-[13px] font-bold text-neutral-900">
                April, Fri
              </p>
              <p className="text-[11.5px] text-neutral-400">
                Drop-off Date
              </p>
            </div>
          </div>
        )}

        {/* Orange Search Button */}
        <button className="flex-shrink-0 w-20 h-16 rounded-xl flex items-center justify-center bg-primaryColor transition-all duration-150 active:scale-[0.97] cursor-pointer hover:bg-black">
          <BsSearch className="text-baseyellow text-lg font-extrabold" />
        </button>
      </div>
    </div>
  );
}

/* ── Card Map ────────────────────────────────────────────── */
const CARD_MAP = {
  dest: DestCard,
  hotel: HotelCard,
  activity: ActivityCard,
  flights: FlightsCard,
  car: CarCard,
};

/* ── Banner ──────────────────────────────────────────────── */
const Banner = () => {
  const [activeTab, setActiveTab] = useState("dest");
  const ActiveCard = CARD_MAP[activeTab];

  return (
    <div className="bg-[#F7CE3E] py-45 relative overflow-hidden">
      <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-white/20 pointer-events-none" />
      <div className="absolute -bottom-16 -left-12 w-52 h-52 rounded-full bg-black/[0.05] pointer-events-none" />
      <Container>
        <h1
          className="text-center text-5xl font-black text-black mb-3 leading-tight"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Find Your Next Place to Visit
        </h1>
        <p className="text-center text-sm text-neutral-600 mb-10">
          Discover destinations, stays, flights & more — all in one place.
        </p>

        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {TABS.map(({ key, label, Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl border-[1.5px] text-sm font-medium transition-all cursor-pointer
                ${
                  activeTab === key
                    ? "bg-neutral-900 border-neutral-900 text-yellow-300 shadow-lg"
                    : "bg-white/50 border-black/10 text-neutral-800 hover:bg-white/80"
                }`}
            >
              <Icon className="text-sm" /> {label}
            </button>
          ))}
        </div>

        {/* Dynamic search card */}
        <div className="bg-white rounded-[20px] overflow-hidden shadow-2xl">
          <ActiveCard />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
