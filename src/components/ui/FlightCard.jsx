"use client";

import { useState } from "react";

export default function FlightCard() {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <article className="bg-white rounded-xl border border-gray-200 shadow-sm transition-shadow hover:shadow-md flex w-full flex-col overflow-hidden md:flex-row">
      <div className="relative w-full bg-gradient-to-br from-sky-100 to-blue-50 p-4 md:w-[260px] md:flex-shrink-0 flex flex-col justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-blue-700 font-semibold">Best value</p>
          <h3 className="mt-2 text-[18px] font-extrabold text-gray-900">Biman Bangladesh</h3>
          <p className="text-[12px] text-gray-600">BG-201 • Economy</p>
        </div>
        <div className="flex items-center justify-between text-[12px] text-gray-700">
          <span>06:40</span>
          <span>1h 25m</span>
          <span>08:05</span>
        </div>
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-2 right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:scale-110 transition-transform"
          type="button"
        >
          <svg
            viewBox="0 0 24 24"
            fill={wishlisted ? "#e00" : "none"}
            stroke={wishlisted ? "#e00" : "#555"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="flex-1 px-5 py-4 flex flex-col gap-1">
        <h2 className="text-[17px] font-extrabold text-gray-900 leading-snug">Dhaka (DAC) → Cox’s Bazar (CXB)</h2>
        <p className="text-[13px] text-gray-500">Direct flight • Free 7 kg cabin bag • Refundable fare</p>

        <div className="flex gap-2 flex-wrap mt-3">
          {['Fast check-in', 'Seat selection', 'Meals included'].map((tag) => (
            <span key={tag} className="border border-gray-300 rounded-full px-3 py-1 text-[12.5px] font-semibold text-gray-600">{tag}</span>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-4 text-[12.5px] text-gray-600">
          <span>Departure: 06:40</span>
          <span>Arrival: 08:05</span>
          <span>Non-stop</span>
        </div>
      </div>

      <div className="flex flex-col justify-between items-start gap-3 border-t border-gray-100 px-5 py-4 md:items-end md:min-w-[180px] md:border-l md:border-t-0">
        <div className="text-left md:text-right">
          <p className="text-[12px] text-gray-500">From</p>
          <p className="text-[26px] font-extrabold text-gray-900 leading-tight">US$79</p>
          <p className="text-[12px] text-gray-500">per traveller</p>
        </div>

        <button className="mt-3 bg-primaryColor hover:bg-[#0057b8] text-white text-[14px] font-bold rounded-lg px-4 py-3 flex items-center gap-1.5 transition-colors whitespace-nowrap" type="button">
          Book flight
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
        </button>
      </div>
    </article>
  );
}
