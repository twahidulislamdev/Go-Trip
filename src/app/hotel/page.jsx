"use client";

import Container from "@/components/ui/Container";
import Flex from "@/components/ui/Flex";
import HotelCard from "@/components/ui/HotelCard";
import HotelSearchCard from "@/components/ui/HotelSearchCard";
import HotelSidebar from "@/components/ui/HotelSidebar";

const Page = () => {
  return (
    <>
      <div className="pt-25">
        <Container>
          {/* Heading And Dest Search Bar Start */}
          <div className="bg-gradient-to-b from-blue-50/100 via-white to-pink-50/100 py-5 rounded-2xl shadow-lg">
            <h3 className="text-3xl text-center font-bold text-primaryColor">
              Find Your Dream Luxury Hotel
            </h3>
            <HotelSearchCard
              className={
                "w-full m-auto mt-3 !px-5 [&>div:last-child]:w-full [&>div:first-child]:hidden !py-0"
              }
            />
          </div>
          {/* Heading And Dest Search Bar End */}
          <div className="mt-8 mb-16">
            <Flex className={"items-start gap-8"}>
              <div className="w-[280px] flex-shrink-0">
                <HotelSidebar />
              </div>
              <div className="flex-1 flex flex-col gap-5">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-gray-900">
                    London: 3,014 properties found
                  </h2>
                  <select className="border border-gray-300 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Sort by: Top picks</option>
                    <option>Price (lowest first)</option>
                    <option>Rating (highest first)</option>
                  </select>
                </div>
                <HotelCard />
                <HotelCard />
                <HotelCard />
              </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
