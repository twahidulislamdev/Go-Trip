import React from "react";
import Container from "../ui/Container";
import LosAngeles from "../../../public/losangeles.png";
import Reykjavik from "../../../public/reykjavik.png";
import Paris from "../../../public/paris.png";
import Amsterdam from "../../../public/amsterdam.png";
import Istanbul from "../../../public/istanbul.png";

const destinations = [
  {
    id: 1,
    name: "Los Angeles",
    properties: "1,714",
    image: LosAngeles,
    colSpan: "col-span-1",
  },
  {
    id: 2,
    name: "London",
    properties: "1,714",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
    colSpan: "col-span-2",
  },
  {
    id: 3,
    name: "Reykjavik",
    properties: "1,714",
    image: Reykjavik,
    colSpan: "col-span-1",
  },
  {
    id: 4,
    name: "Paris",
    properties: "1,714",
    image: Paris,
    colSpan: "col-span-2",
  },
  {
    id: 5,
    name: "Amsterdam",
    properties: "1,714",
    image: Amsterdam,
    colSpan: "col-span-1",
  },
  {
    id: 6,
    name: "Istanbul",
    properties: "1,714",
    image: Istanbul,
    colSpan: "col-span-1",
  },
];

export default function TopDestinations() {
  return (
    <section className="py-10 bg-white px-3 lg:px-0">
      <Container>
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-1.5 h-6 rounded-full bg-primaryColor"></span>
            <span className="text-sm font-bold text-primaryColor uppercase tracking-[0.15em]">
              Explore the World
            </span>
          </div>
          <h2 className="text-4xl font-black text-[#0a1128] tracking-tight">
            Top Destinations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className={`relative h-[300px] md:h-[400px] rounded-xl overflow-hidden group cursor-pointer ${dest.colSpan}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${dest.image.src || dest.image}')`,
                }}
              ></div>
              {/* Overlay gradient to make text readable */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-80"></div>

              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-white text-2xl font-bold mb-1">
                  {dest.name}
                </h3>
                <p className="text-white/90 text-sm">
                  {dest.properties} properties
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
