import React from "react";
import Container from "../ui/Container";
import SectionSlider from "../ui/SectionSlider";
import SliderControls from "../ui/SliderControls";

const sliderNavId = "most-visit-bd";

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
    name: "Chittagong",
    properties: "1,200+",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Karnafully_Bridge_CHittagong_%28cropped%29.jpg",
  },
  {
    id: 2,
    name: "Dhaka",
    properties: "2,500+",
    image:
      "https://images.trvl-media.com/place/973/c3ed463b-8307-4c24-9ce5-a543941c3bf9.jpg",
  },
  {
    id: 3,
    name: "Sylhet",
    properties: "850+",
    image: "https://www.deraresort.com/images/blog-bichanakandi-sylhet.jpg",
  },
  {
    id: 4,
    name: "Sreemangal",
    properties: "450+",
    image:
      "https://images.pexels.com/photos/35458090/pexels-photo-35458090.jpeg?cs=srgb&dl=pexels-tanhatamannasyed-35458090.jpg&fm=jpg",
  },
  {
    id: 5,
    name: "Cox's Bazar",
    properties: "1,800+",
    image:
      "https://www.shutterstock.com/image-photo/coxs-bazar-bangladesh-13-september-600nw-2535580461.jpg",
  },
  {
    id: 6,
    name: "Bandarban",
    properties: "600+",
    image:
      "https://www.travelmate.com.bd/wp-content/uploads/2021/02/Tindu-Thanchi-Bandarban.jpg",
  },
];
export default function MostVisitPlaceBd() {
  return (
    <section className="px-3 py-8 sm:px-5 sm:py-10 lg:px-0">
      <Container>
        <div className="mb-6 flex items-end justify-between gap-4 sm:mb-10">
          <div className="min-w-0">
            <div className="flex justify-start items-center gap-2 mb-3">
              <span className="w-1.5 h-5 rounded-full bg-primaryColor"></span>
              <span className="text-[10px] lg:text-sm font-bold text-primaryColor uppercase tracking-[0.15em] ">
                Explore in Bangladesh
              </span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-black text-primaryColor tracking-tight ">
              Popular Destinations
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
