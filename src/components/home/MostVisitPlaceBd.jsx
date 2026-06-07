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
    name: "Chittagong",
    properties: "1,200+",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Karnafully_Bridge_CHittagong_%28cropped%29.jpg",
    colSpan: "col-span-1",
  },
  {
    id: 2,
    name: "Dhaka",
    properties: "2,500+",
    image:
      "https://images.trvl-media.com/place/973/c3ed463b-8307-4c24-9ce5-a543941c3bf9.jpg",
    colSpan: "col-span-2",
  },
  {
    id: 3,
    name: "Sylhet",
    properties: "850+",
    image: "https://www.deraresort.com/images/blog-bichanakandi-sylhet.jpg",
    colSpan: "col-span-1",
  },
  {
    id: 4,
    name: "Sreemangal",
    properties: "450+",
    image:
      "https://images.pexels.com/photos/35458090/pexels-photo-35458090.jpeg?cs=srgb&dl=pexels-tanhatamannasyed-35458090.jpg&fm=jpg",
    colSpan: "col-span-1",
  },
  {
    id: 5,
    name: "Cox's Bazar",
    properties: "1,800+",
    image:
      "https://www.shutterstock.com/image-photo/coxs-bazar-bangladesh-13-september-600nw-2535580461.jpg",
    colSpan: "col-span-2",
  },
  {
    id: 6,
    name: "Bandarban",
    properties: "600+",
    image:
      "https://www.travelmate.com.bd/wp-content/uploads/2021/02/Tindu-Thanchi-Bandarban.jpg",
    colSpan: "col-span-1",
  },
];
export default function MostVisitPlaceBd() {
  return (
    <section className="py-5 bg-white px-3 lg:px-0">
      <Container>
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-1.5 h-6 rounded-full bg-primaryColor"></span>
            <span className="text-sm font-bold text-primaryColor uppercase tracking-[0.15em]">
              Explore in Bangladesh
            </span>
          </div>
          <h2 className="text-4xl font-black text-[#0a1128] tracking-tight">
            Most Popular Destinations
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
