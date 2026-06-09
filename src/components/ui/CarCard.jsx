"use client";

import { useState } from "react";

export default function CarCard() {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-200 flex overflow-hidden w-full hover:shadow-md transition-shadow">
      <div className="relative w-[320px] flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=350&fit=crop&auto=format"
          alt="Premium rental car"
          className="w-full h-full object-cover"
        />
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
        <span className="absolute bottom-2 left-2 bg-white/95 text-gray-800 text-[12px] font-bold px-2.5 py-1 rounded-lg shadow-sm">SUV • Auto</span>
      </div>

      <div className="flex-1 px-5 py-4 flex flex-col gap-1">
        <h2 className="text-[17px] font-extrabold text-gray-900 leading-snug">Toyota Corolla Premium</h2>

        <div className="flex items-center gap-1.5 text-gray-500 text-[13px] mt-1 flex-wrap">
          <span>Hertz • Airport pickup</span>
          <span>•</span>
          <span>5 seats</span>
          <span>•</span>
          <span>Hybrid</span>
        </div>

        <hr className="border-gray-100 my-2" />

        <p className="text-[13.5px] font-bold text-gray-900">Includes: full insurance, free cancellation, GPS</p>
        <p className="text-[12.5px] text-gray-500">Pickup from Dhaka Airport • 24/7 support</p>

        <div className="flex gap-2 flex-wrap mt-3">
          {['Automatic', 'AC', 'Bluetooth', 'Unlimited mileage'].map((tag) => (
            <span key={tag} className="border border-gray-300 rounded-full px-3 py-1 text-[12.5px] font-semibold text-gray-600">{tag}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between items-end px-5 py-4 min-w-[180px] border-l border-gray-100">
        <div className="text-right">
          <p className="text-[13px] font-bold text-gray-900">Excellent</p>
          <p className="text-[12px] text-gray-500">128 reviews</p>
        </div>

        <div className="text-right">
          <p className="text-[12px] text-gray-500">per day</p>
          <p className="text-[26px] font-extrabold text-gray-900 leading-tight">US$42</p>
          <p className="text-[12px] text-gray-500">Taxes included</p>
          <button className="mt-3 bg-primaryColor hover:bg-[#0057b8] text-white text-[14px] font-bold rounded-lg px-4 py-3 flex items-center gap-1.5 transition-colors whitespace-nowrap" type="button">
            Reserve now
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
          </button>
        </div>
      </div>
    </article>
  );
}
