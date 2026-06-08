"use client";

import Container from "@/components/ui/Container";
import DestSearchCard from "@/components/ui/DestSearchCard";
import Flex from "@/components/ui/Flex";
import DestinationCard from "@/components/ui/DestinationCard";
import DestinationSidebar from "@/components/ui/DestinationSidebar";

const DestinationPage = () => {
  return (
    <>
      <div className="pt-25">
        <Container>
          {/* Heading And Dest Search Bar Start */}
          <div className="bg-gradient-to-b from-blue-50/100 via-white to-pink-50/100 py-5 rounded-2xl shadow-lg">
            <h3 className="text-3xl text-center font-bold text-primaryColor">
              Destination In Bangladesh
            </h3>
            <DestSearchCard
              className={"mt-3 w-full m-auto !px-5 [&>div:last-child]:w-full [&>div:first-child]:hidden !py-0"}
            />
          </div>
          {/* Heading And Dest Search Bar End */}
          <div className="mt-8 mb-16">
            <Flex className={"items-start gap-8"}>
              <div className="w-[280px] flex-shrink-0">
                <DestinationSidebar />
              </div>
              <div className="flex-1 flex flex-col gap-5">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-gray-900">Bali: 1,245 packages found</h2>
                  <select className="border border-gray-300 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Sort by: Top picks</option>
                    <option>Price (lowest first)</option>
                    <option>Rating (highest first)</option>
                  </select>
                </div>
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
              </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DestinationPage;