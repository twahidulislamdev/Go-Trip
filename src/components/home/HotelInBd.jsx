import React from "react";
import Container from "../ui/Container";
import FeaturedHotelCard from "../ui/HotelCard";

export const hotels = [
  {
    id: 1,
    name: "La Meridien Dhaka",
    city: "Dhaka",
    location: "Airport Road",
    rating: 4.7,
    reviews: 4335,
    price: 210,
    badge: "Business",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/08/27/fc/8e/le-meridien-dhaka.jpg",
  },
  {
    id: 2,
    name: "Radisson Blu Dhaka Water Garden",
    city: "Dhaka",
    location: "Airport Road",
    rating: 4.7,
    reviews: 3200,
    price: 189,
    badge: "City Center",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH_mKiJTCLskIEoa2UjgqbCPaApr7b7TeVdAW7vE56cfeqoRFtVJm5o1yf8uMjPTav_urNlGQZbtuGOOonQt4najmOKwfuyIhuQNw5QUVAHCYioWdOD2pyE-j4tY7UoyITjxN9emjutJ2QD=w408-h279-k-no",
  },
  {
    id: 3,
    name: "InterContinental Dhaka",
    city: "Dhaka",
    location: "Ramna, Dhaka",
    rating: 4.8,
    reviews: 13665,
    price: 249,
    badge: "Luxury",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFRL003ND7Oz7zlpzs-WJMr_brywR2gBLIfcxIkP0XHO1aL-zPRaEE-0EUTZuCqgyg97lfZ91mRxDUdOsDuZ5v2OdRJpErTf6svaWXgKaAqnVH2_5oZlxURvShJ9c9NaDOKqQQQ=s1360-w1360-h1020-rw",
  },
  {
    id: 8,
    name: "Sea Pearl Beach Resort & Spa",
    city: "Cox's Bazar",
    location: "Inani Beach",
    rating: 4.7,
    reviews: 9200,
    price: 140,
    badge: "Resort",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 11,
    name: "The Peninsula Chittagong",
    city: "Chattogram",
    location: "GEC Circle",
    rating: 4.5,
    reviews: 3500,
    price: 95,
    badge: "Business",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 13,
    name: "Grand Sylhet Hotel & Resort",
    city: "Sylhet",
    location: "Airport Road",
    rating: 4.7,
    reviews: 1861,
    price: 95,
    badge: "Luxury",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 16,
    name: "Grand Sultan Tea Resort & Golf",
    city: "Srimangal",
    location: "Radhanagar",
    rating: 4.8,
    reviews: 10435,
    price: 145,
    badge: "Golf Resort",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 17,
    name: "Hotel Hill View",
    city: "Bandarban",
    location: "Bandarban Town",
    rating: 4.3,
    reviews: 1800,
    price: 55,
    badge: "Mountain View",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
];

const HotelInBd = () => {
  return (
    <section className="py-10 bg-[#f4f7f9]">
      <Container>
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-1.5 h-6 rounded-full bg-primaryColor"></span>
            <span className="text-sm font-bold text-primaryColor uppercase tracking-[0.15em]">
              Hotels in Bangladesh
            </span>
          </div>
          <h2 className="text-4xl font-black text-[#0a1128] tracking-tight">
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

export default HotelInBd;
