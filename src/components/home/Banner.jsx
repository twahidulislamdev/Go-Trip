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
import DestCard from "../ui/DestSearchCard";
import HotelCard from "../ui/HotelSearchCard";
import ActivitySearchCard from "../ui/ActivitySearchCard";
import FlightsCard from "../ui/FlightsSearchCard";
import CarCard from "../ui/CarSearchCard";

// ------------------ Tab Config Start ------------------------
const TABS = [
  { key: "hotel", label: "Hotel", Icon: BsBuilding },
  { key: "dest", label: "Destination", Icon: BsFillPinMapFill },
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
  hotel: HotelCard,
  dest: DestCard,
  activity: ActivitySearchCard,
  flights: FlightsCard,
  car: CarCard,
};

/* ------------------------- Banner ------------------------- */
const Banner = () => {
  const [activeTab, setActiveTab] = useState("hotel");
  const ActiveCard = CARD_MAP[activeTab];

  return (
    <>
      <div className="relative overflow-hidden py-8 sm:py-10 md:py-16 lg:py-25">
        {/* ── Main content ── */}
        <Container className="relative z-10 pt-14 sm:pt-20">
          {/* Eyebrow pill */}

          {/* Headline */}
          <h1
            className="mx-auto mb-5 max-w-4xl text-center text-3xl font-black leading-[1.08] text-slate-900 animate-[fadeInUp_0.6s_ease_both] sm:text-4xl md:text-5xl lg:text-6xl"
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
            className="mx-auto mb-5 max-w-md text-center text-sm leading-relaxed text-slate-500 sm:mb-5 sm:text-base"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Discover destinations, stays, flights &amp; more —{" "}
            <em className="not-italic font-medium text-slate-600">
              all in one place.
            </em>
          </p>

          {/* Stats */}
          <div className="flex justify-center flex-wrap gap-2.5 mb-10 cursor-pointer hidden lg:flex ">
            {STATS.map(({ value, label, emoji }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white border border-slate-100 rounded-full px-3 py-2 shadow-sm hover:-translate-y-0.5 transition-transform duration-200 cursor-pointer"
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
          <div className="mb-3 flex justify-center">
            <div className="flex w-full max-w-5xl flex-wrap justify-center gap-3">
              {TABS.map(({ key, label, Icon }) => {
                const active = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    type="button"
                    aria-pressed={active}
                    className={`flex min-h-10 basis-[calc(33.333%-0.5rem)] items-center justify-center gap-2 rounded-xl border px-3 py-1 text-[11px] font-semibold tracking-wide shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] sm:basis-auto sm:px-4 sm:py-3 sm:text-xs md:px-5 lg:px-6 lg:text-sm
                      ${
                        active
                          ? "border-primaryColor bg-primaryColor text-white shadow-primaryColor/30"
                          : "border-slate-200 bg-white text-slate-500 hover:border-primaryColor hover:text-primaryColor"
                      }`}
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    <Icon className="text-[13px] sm:text-[14px]" />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search card */}
          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/80 sm:rounded-3xl">
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
