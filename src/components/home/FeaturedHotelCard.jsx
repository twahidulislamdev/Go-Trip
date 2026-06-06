import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';

const FeaturedHotelCard = ({ hotel }) => {
  return (
    <div className="flex flex-col gap-3.5 group cursor-pointer">
      {/* Hotel Image */}
      <div className="w-full aspect-[4/3] sm:aspect-square overflow-hidden rounded-2xl relative shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url('${hotel.image}')` }}
        />
      </div>

      {/* Hotel Info */}
      <div className="flex flex-col gap-2 px-0.5">
        {/* Name */}
        <h3 className="text-[17px] font-bold text-[#0a1128] leading-snug group-hover:text-primaryColor transition-colors">
          {hotel.name}
        </h3>

        {/* Location */}
        {hotel.location && (
          <div className="flex items-center gap-1 text-sm text-neutral-500">
            <MdLocationOn className="text-primaryColor text-[16px] shrink-0" />
            <span>{hotel.location}</span>
          </div>
        )}

        {/* Rating & Reviews */}
        <div className="flex items-center gap-1.5 text-sm">
          <BsStarFill className="text-[#ff8f00] text-[13px]" />
          <span className="font-bold text-neutral-900">{hotel.rating}</span>
          <span className="text-neutral-500">·</span>
          <span className="text-neutral-500">{hotel.reviews} reviews</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHotelCard;
