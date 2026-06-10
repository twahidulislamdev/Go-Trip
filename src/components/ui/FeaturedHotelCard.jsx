import React from "react";

const FeaturedHotelCard = ({ hotel }) => {
  return (
    <div className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 flex flex-col h-full cursor-pointer">
      {/* Image container */}
      <div className="relative h-48 w-full overflow-hidden sm:h-56">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        {/* Badge */}
        {hotel.badge && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm sm:top-4 sm:left-4">
            <span className="text-xs font-bold text-neutral-900">{hotel.badge}</span>
          </div>
        )}
        
        {/* Favorite button */}
        <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white text-neutral-400 hover:text-red-500 transition-colors sm:top-4 sm:right-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow sm:p-5">
        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-2">
          <svg className="w-4 h-4 text-amber-500 fill-amber-500" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-bold text-neutral-900">{hotel.rating}</span>
          <span className="text-sm text-neutral-400">({hotel.reviews ? hotel.reviews.toLocaleString() : 0} reviews)</span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-neutral-900 mb-1 line-clamp-1 sm:text-lg">{hotel.name}</h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-neutral-500 mb-4">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-[13px] truncate">
            {hotel.city ? `${hotel.location}, ${hotel.city}` : hotel.location}
          </span>
        </div>

        {/* Price & Action */}
        <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
          <div>
            <span className="text-lg font-black text-neutral-900 sm:text-xl">${hotel.price}</span>
            <span className="text-sm text-neutral-500"> / night</span>
          </div>
          <button className="shrink-0 px-3 py-2 bg-primaryColor text-white text-xs font-bold rounded-lg hover:bg-primaryColor/90 transition-colors sm:px-4 sm:text-sm">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHotelCard;
