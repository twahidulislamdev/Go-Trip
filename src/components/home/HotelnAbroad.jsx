import React from "react";
import Container from "../ui/Container";
import FeaturedHotelCard from "../ui/FeaturedHotelCard";
import SectionSlider from "../ui/SectionSlider";
import SliderControls from "../ui/SliderControls";

const sliderNavId = "best-hotels";

const hotels = [
  {
    id: 1,
    name: "The Shard Shangri-La",
    rating: 5,
    reviews: 2340,
    location: "London, England",
    price: 680,
    badge: "City View",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Hotel Arts Barcelona",
    rating: 5,
    reviews: 1930,
    location: "Barcelona, Spain",
    price: 560,
    badge: "Beach Front",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "The Ritz Paris",
    rating: 5,
    reviews: 1842,
    location: "Paris, France",
    price: 1200,
    badge: "Iconic",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Grand Hotel Tremezzo",
    rating: 5,
    reviews: 1120,
    location: "Lake Como, Italy",
    price: 890,
    badge: "Lake View",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Hotel Adlon Kempinski",
    rating: 5,
    reviews: 2103,
    location: "Berlin, Germany",
    price: 520,
    badge: "Top Pick",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Savoy Palace",
    rating: 5,
    reviews: 987,
    location: "Madeira, Portugal",
    price: 390,
    badge: "Award 2024",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Matild Palace",
    rating: 5,
    reviews: 1200,
    location: "Budapest, Hungary",
    price: 430,
    badge: "Luxury Pick",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Sani Beach Resort",
    rating: 5,
    reviews: 2210,
    location: "Halkidiki, Greece",
    price: 620,
    badge: "Eco Luxury",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
  },
];

const BestHotels = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50/100 via-white to-pink-50/100 px-3 py-8 sm:px-5 sm:py-12 lg:px-0 lg:py-20">
      <Container>
        <div className="mb-6 flex items-end justify-between gap-4 sm:mb-10">
          <div className="min-w-0">
            <div className="flex justify-start items-center gap-2 mb-3">
              <span className="w-1.5 h-5 rounded-full bg-primaryColor"></span>
              <span className="text-[10px] lg:text-sm font-bold text-primaryColor uppercase tracking-[0.15em] ">
                Hotel In Abroad
              </span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-black text-primaryColor tracking-tight">
              Best Hotels for Your Next Trip
            </h2>
          </div>
          <SliderControls navId={sliderNavId} />
        </div>

        <SectionSlider slideClassName="h-auto" navId={sliderNavId}>
          {hotels.map((hotel) => (
            <FeaturedHotelCard key={hotel.id} hotel={hotel} />
          ))}
        </SectionSlider>
      </Container>
    </section>
  );
};

export default BestHotels;
