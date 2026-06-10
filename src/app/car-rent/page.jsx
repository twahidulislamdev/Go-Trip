"use client";

import Container from "@/components/ui/Container";
import Flex from "@/components/ui/Flex";
import CarSearchCard from "@/components/ui/CarSearchCard";
import CarSidebar from "@/components/ui/CarSidebar";
import CarCard from "@/components/ui/CarCard";

const CarRentPage = () => {
  return (
    <>
      <div className="pt-25">
        <Container>
          {/* ── Search Hero ── */}
          <div className="bg-gradient-to-b from-blue-50/100 via-white to-pink-50/100 py-5 rounded-2xl shadow-lg">
            <h3 className="text-3xl text-center font-bold text-primaryColor">
              Find Your Next Adventure
            </h3>

            <CarSearchCard className="w-full m-auto mt-3 !px-5 !py-3" />
          </div>

          {/* ── Results Layout ── */}
          <div className="mt-8 mb-16">
            <Flex className="items-start gap-8">
              {/* Sidebar */}
              <div className="w-[280px] flex-shrink-0">
                <CarSidebar />
              </div>

              {/* Car List */}
              <div className="flex-1 flex flex-col gap-5">
                {/* Results Header */}
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-gray-900">
                    Dhaka: 28 cars found
                  </h2>
                  <select className="border border-gray-300 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Sort by: Top picks</option>
                    <option>Price (lowest first)</option>
                    <option>Rating (highest first)</option>
                  </select>
                </div>

                {/* Car Cards */}
                <div className="flex flex-col gap-5">
                  <CarCard />
                  <CarCard />
                  <CarCard />
                </div>
              </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CarRentPage;
