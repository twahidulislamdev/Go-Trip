import React from "react";
import Container from "../ui/Container";
import SectionSlider from "../ui/SectionSlider";
import SliderControls from "../ui/SliderControls";
import LosAngeles from "../../../public/losangeles.png";
import Reykjavik from "../../../public/reykjavik.png";
import Paris from "../../../public/paris.png";
import Amsterdam from "../../../public/amsterdam.png";
import Istanbul from "../../../public/istanbul.png";

const sliderNavId = "top-destinations";

const sliderBreakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};

const destinations = [
  {
    id: 1,
    name: "Los Angeles",
    properties: "1,714",
    image: LosAngeles,
  },
  {
    id: 2,
    name: "London",
    properties: "1,714",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Reykjavik",
    properties: "1,714",
    image: Reykjavik,
  },
  {
    id: 4,
    name: "Paris",
    properties: "1,714",
    image: Paris,
  },
  {
    id: 5,
    name: "Amsterdam",
    properties: "1,714",
    image: Amsterdam,
  },
  {
    id: 6,
    name: "Istanbul",
    properties: "1,714",
    image: Istanbul,
  },
];

export default function MostVisitPlaceAbroad() {
  return (
    <section className="bg-white px-3 py-8 sm:px-5 sm:py-10 lg:px-0">
      <Container>
        <div className="mb-6 flex items-end justify-between gap-4 sm:mb-10">
          <div className="min-w-0">
            <div className="flex justify-start items-center gap-2 mb-2">
              <span className="w-1.5 h-5 rounded-full bg-primaryColor"></span>
              <span className="text-[10px] lg:text-sm font-bold text-primaryColor uppercase tracking-[0.15em] ">
                Explore the World
              </span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-black text-primaryColor tracking-tight">
              Top Destinations
            </h2>
          </div>
          <SliderControls navId={sliderNavId} />
        </div>

        <SectionSlider breakpoints={sliderBreakpoints} navId={sliderNavId}>
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="relative h-60 rounded-xl overflow-hidden group cursor-pointer sm:h-[300px] md:h-[400px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${dest.image.src || dest.image}')`,
                }}
              ></div>
              {/* Overlay gradient to make text readable */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-80"></div>

              <div className="absolute top-5 left-5 z-10 sm:top-6 sm:left-6">
                <h3 className="text-white text-xl font-bold mb-1 sm:text-2xl">
                  {dest.name}
                </h3>
                <p className="text-white/90 text-sm">
                  {dest.properties} properties
                </p>
              </div>
            </div>
          ))}
        </SectionSlider>
      </Container>
    </section>
  );
}
