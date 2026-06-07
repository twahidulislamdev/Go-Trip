"use client";
import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { MdLocationOn, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";

const FeaturedHotelCard = ({ hotel }) => {
  const [saved, setSaved] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { image, name, location, rating, reviews, badge, tag, price } = hotel;

  return (
    <div
      className="group relative flex flex-col cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "20px",
        background: "#ffffff",
        boxShadow: hovered
          ? "0 20px 60px rgba(5,16,54,0.14)"
          : "0 4px 24px rgba(5,16,54,0.07)",
        transition: "box-shadow 0.35s ease, transform 0.35s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        overflow: "hidden",
      }}
    >
      {/* ── Image area ── */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        {/* Photo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${image}')`,
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-80"
        />

        {/* Badge */}
        {badge && (
          <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-[0.12em] uppercase text-white px-3 py-1.5 bg-gradient-to-r from-neutral-600 to-yellow-600 rounded-full text-black shadow-lg">
            {badge}
          </span>
        )}

        {/* Save button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSaved((s) => !s);
          }}
          aria-label={saved ? "Unsave" : "Save"}
          className="absolute top-3 right-3 flex items-center justify-center bg-white rounded-full w-10 h-10 "
        >
          {saved ? (
            <MdFavorite style={{ fontSize: 16, color: "#f43f5e" }} />
          ) : (
            <MdFavoriteBorder style={{ fontSize: 16, color: "#1a1a2e" }} />
          )}
        </button>

        {/* Bottom-left location pill overlaid on image */}
        {location && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-neutral-300/30 px-3 py-1 rounded-full">
            <MdLocationOn className="text-yellow-400" size={18} />
            <span className="text-sm font-semibold text-white">{location}</span>
          </div>
        )}
      </div>

      {/* ── Info area ── */}
      <div className="flex flex-col" style={{ padding: "16px 18px 18px" }}>
        {/* Name */}
        <h3 className="font-cormorant text-lg font-bold text-neutral-900 mb-2">
          {name}
        </h3>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "linear-gradient(90deg, #e5e7eb 0%, transparent 100%)",
            marginBottom: 12,
          }}
        />

        {/* Rating + price row */}
        <div className="flex items-center justify-between">
          {/* Stars + reviews */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <BsStarFill key={i} className="text-yellow-400" size={18} />
              ))}
            </div>
            <span className="text-sm  text-neutral-600">
              ({reviews.toLocaleString()})
            </span>
          </div>

          {/* Price */}
          {price ? (
            <div className="flex items-baseline gap-0.5">
              <span className="text-lg font-bold text-primaryColor">
                ${price}
              </span>
              <span className="text-xs text-neutral-600">/night</span>
            </div>
          ) : tag ? (
            <span className="px-3 py-1.5 bg-  primaryColor text-neutral-600 rounded-full">
              {tag}
            </span>
          ) : null}
        </div>

        {/* CTA */}
        <button className="w-full mt-4 flex items-center justify-center gap-2 bg-primaryColor text-white px-4 py-2 rounded-lg">
          View Details
          <HiArrowRight className="text-white" size={15} />
        </button>
      </div>
    </div>
  );
};

export default FeaturedHotelCard;
