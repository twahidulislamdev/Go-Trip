import React from "react";
import Container from "../ui/Container";
import FeaturedHotelCard from "./FeaturedHotelCard";

const hotels = [
  {
    id: 1,
    name: "Best Western Heritage",
    rating: 5,
    reviews: 288,
    location: "Sylhet, Bangladesh",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Grand Sultan Tea Resort & Golf",
    rating: 5,
    reviews: 378,
    location: "Srimangal, Bangladesh",
    image:
      "https://images.unsplash.com/photo-1542314831-c6a4d74cb7e2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Ocean Paradise Hotel & Resort",
    rating: 5,
    reviews: 345,
    location: "Cox's Bazar, Bangladesh",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Dream Square Resort",
    rating: 5,
    reviews: 324,
    location: "Bandarban, Bangladesh",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop",
  },
];

const BestHotels = () => {
  return (
    <section className="py-20 bg-[#f4f7f9]">
      <Container>
        <div className="flex flex-col items-start mb-15">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-1.5 h-6 rounded-full bg-primaryColor"></span>
            <span className="text-sm font-bold text-primaryColor uppercase tracking-[0.15em]">
              Explore the world's best hotels
            </span>
          </div>
          <h2 className="text-5xl font-black text-[#0a1128] tracking-tight">
            Best Hotels for Your Next Trip
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotels.map((hotel) => (
            <FeaturedHotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BestHotels;
