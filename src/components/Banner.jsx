import React from "react";
import Container from "./Container";

const Banner = () => {
  return (
    <div className="bg-[#F8D347] py-50">
      <Container>
        <h1 className="text-center text-6xl text-black font-bold mb-5">
          Search for the Best Car Hire Deals
        </h1>
        <p className="text-center text-base text-black mb-8">
          Book better cars from local hosts across the US and around the world.
        </p>
      </Container>
    </div>
  );
};

export default Banner;
