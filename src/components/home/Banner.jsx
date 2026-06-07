"use client";
import React, { useState } from "react";
import Container from "../ui/Container";
import {
  BsFillPinMapFill,
  BsBuilding,
  BsAirplaneEnginesFill,
  BsCarFrontFill,
} from "react-icons/bs";
import { MdOutlineSurfing } from "react-icons/md";
import DestCard from "../ui/DestCard";
import HotelCard from "../ui/HotelCard";
import ActivityCard from "../ui/ActivityCard";
import FlightsCard from "../ui/FlightsCard";
import CarCard from "../ui/CarCard";

// ------------------ Tab Config Start ------------------------
const TABS = [
  { key: "dest", label: "Destination", Icon: BsFillPinMapFill },
  { key: "hotel", label: "Hotel", Icon: BsBuilding },
  { key: "activity", label: "Activity", Icon: MdOutlineSurfing },
  { key: "flights", label: "Flights", Icon: BsAirplaneEnginesFill },
  { key: "car", label: "Car Rent", Icon: BsCarFrontFill },
];
// ------------------ Tab Config End ------------------------

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

// ==================================================================
// ==================================================================

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
