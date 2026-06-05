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
      className={`bg-neutral-900 hover:bg-neutral-800 active:scale-[0.98] transition-all duration-150 roundex-xl flex items-center justify-center gap-2 text-[16px] font-bold text-baseyellow  px-7 whitespace-nowrap`}
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

/* ── Destination Card ────────────────────────────────────── */
function DestCard() {
  const [guests, setGuests] = useState(2);
  return (
    <div className="px-5 py-3">
      <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr_auto] min-h-[80px] border-neutral-200  overflow-hidden bg-white rounded-xl">
        <Field icon="📍" label="Where to" placeholder="Search destinations…" />
        <DateField icon="📅" label="Check in" />
        <DateField icon="📅" label="Check out" noBorder />
        <CounterField
          label="Guests"
          icon="👥"
          value={guests}
          onChange={setGuests}
        />
        <SearchBtn label="Explore" />
      </div>
    </div>
  );
}

/* ── Hotel Card ──────────────────────────────────────────── */
function HotelCard() {
  const [type, setType] = useState("Hotel");
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  return (
    <div className="px-5 py-4 space-y-4">
      <div className="grid grid-cols-[1.3fr_1fr_1fr_0.75fr_0.75fr_auto] min-h-[90px] border border-neutral-200  overflow-hidden bg-white">
        <Field
          icon="📍"
          label="Destination"
          placeholder="City, region or property…"
        />
        <DateField icon="📅" label="Check In" />
        <DateField icon="📅" label="Check Out" />
        <CounterField
          label="Guests"
          icon="👥"
          value={guests}
          onChange={setGuests}
        />
        <CounterField
          label="Rooms"
          icon="🚪"
          value={rooms}
          onChange={setRooms}
          noBorder
        />
        <SearchBtn label="Search" />
      </div>
    </div>
  );
}

/* ── Activity Card ───────────────────────────────────────── */
function ActivityCard() {
  const [sel, setSel] = useState([]);
  const [guests, setGuests] = useState(1);
  const toggle = (c) =>
    setSel((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]));

  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex flex-wrap gap-2">
        {ACTIVITY_CATS.map(({ label, emoji }) => (
          <button
            key={label}
            onClick={() => toggle(label)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border text-[12px] font-semibold transition-all duration-150
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

      <div className="grid grid-cols-[1.5fr_1fr_0.6fr_auto] min-h-[76px] border border-neutral-200 rounded-[18px] overflow-hidden bg-white">
        <Field icon="📍" label="Location" placeholder="City or region…" />
        <DateField icon="📅" label="Date" />
        <CounterField
          label="People"
          icon="🧑"
          value={guests}
          onChange={setGuests}
          noBorder
        />
        <button className="bg-neutral-900 hover:bg-neutral-800 active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2 text-[13px] font-bold text-baseyellow px-7 whitespace-nowrap">
          <BsSearch className="text-xs text-baseyellow" /> Find
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
        {/* Radio trip types */}
        <div className="flex items-center gap-5">
          {["One Way", "Round Trip", "Multi City"].map((o) => (
            <label
              key={o}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <span
                onClick={() => setTrip(o)}
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-150
                  ${trip === o ? "border-blue-500" : "border-neutral-300 group-hover:border-neutral-400"}`}
              >
                {trip === o && (
                  <span className="w-2 h-2 rounded-full bg-blue-500 block" />
                )}
              </span>
              <span
                onClick={() => setTrip(o)}
                className={`text-[13px] font-semibold transition-colors duration-150
                  ${trip === o ? "text-neutral-900" : "text-neutral-500 group-hover:text-neutral-700"}`}
              >
                {o}
              </span>
            </label>
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
        <div className="flex-1 flex items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-200 bg-white hover:border-neutral-400 cursor-pointer transition-all duration-150 group">
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
          className="w-9 h-9 rounded-full border border-black flex-shrink-0 flex items-center justify-center text-neutral-400 hover:border-neutral-900 hover:text-neutral-900 hover:rotate-180 transition-all duration-300 bg-white shadow-sm"
        >
          <BsArrowLeftRight className="text-sm text-black" />
        </button>

        {/* To segment */}
        <div className="flex-1 flex items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-200 bg-white hover:border-neutral-400 cursor-pointer transition-all duration-150 group">
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
        <div className="flex items-center gap-3 px-4 py-1.5 rounded-xl border border-neutral-200 bg-white hover:border-neutral-400 cursor-pointer transition-all duration-150 min-w-[120px]">
          <div>
            <p className="text-base font-black text-neutral-900 leading-none">
              06
            </p>
            <p className="text-[13px] font-semibold text-neutral-700">June</p>
            <p className="text-[11px] text-neutral-400">Saturday, 2026</p>
          </div>
        </div>

        {/* Return date segment (hidden for One Way) */}
        {trip !== "One Way" && (
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-xl border border-neutral-200 bg-white hover:border-neutral-400 cursor-pointer transition-all duration-150 min-w-[120px]">
            <div>
              <p className="text-base font-black text-neutral-900 leading-none">
                08
              </p>
              <p className="text-[13px] font-semibold text-neutral-700">June</p>
              <p className="text-[11px] text-neutral-400">Monday, 2026</p>
            </div>
          </div>
        )}

        {/* Search button */}
        <button className="flex-shrink-0 w-14 h-14 rounded-xl bg-black  active:scale-[0.97] transition-all duration-150 flex items-center justify-center shadow-lg shadow-orange-200">
          <BsSearch className="text-baseyellow text-lg" />
        </button>
      </div>
    </div>
  );
}

/* ── Car Card ────────────────────────────────────────────── */
function CarCard() {
  return (
    <div className="px-5 py-4">
      <div className="grid grid-cols-[1.2fr_1.1fr_1fr_0.9fr_0.7fr_auto] min-h-[90px] border border-neutral-200 rounded-[18px] overflow-hidden bg-white">
        <Field
          icon="📍"
          label="Pick-up location"
          placeholder="City, airport or address"
        />
        <Field
          icon="📍"
          label="Drop-off location"
          placeholder="City, airport or address"
        />
        <DateField icon="📅" label="Pick-up date" />
        <DateField icon="📅" label="Drop-off date" />
        <CounterField
          label="Passengers"
          icon="👥"
          value={1}
          onChange={() => {}}
          noBorder
        />
        <SearchBtn label="Find Cars" />
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
              className={`flex items-center gap-2 px-5 py-2 rounded-xl border-[1.5px] text-sm font-medium transition-all
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
