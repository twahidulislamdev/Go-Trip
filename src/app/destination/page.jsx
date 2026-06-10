"use client";

import { useEffect, useState } from "react";

import Container from "@/components/ui/Container";
import DestSearchCard from "@/components/ui/DestSearchCard";
import Flex from "@/components/ui/Flex";
import DestinationCard from "@/components/ui/DestinationCard";
import DestinationSidebar from "@/components/ui/DestinationSidebar";

const DestinationPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <>
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-40 bg-black/35 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isSidebarOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      />

      <div
        className={`fixed inset-y-0 left-0 z-50 flex h-dvh w-[86vw] max-w-[360px] flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="sticky top-0 z-10 border-b border-gray-100 bg-white px-5 pb-3 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-900">Filters</h3>
            <button
              type="button"
              onClick={() => setIsSidebarOpen(false)}
              className="rounded-full p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
              aria-label="Close filters"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          <DestinationSidebar />
        </div>
        <div className="border-t border-gray-100 bg-white px-5 py-4">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            className="w-full rounded-xl bg-primaryColor px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0057b8] active:scale-[0.98]"
          >
            Show results
          </button>
        </div>
      </div>

      <div className="pt-20 sm:pt-24 lg:pt-25">
        <Container>
          <div className="rounded-2xl bg-gradient-to-b from-blue-50/100 via-white to-pink-50/100 px-4 py-8 shadow-lg sm:px-6 sm:py-10">
            <h3 className="text-center text-2xl font-bold leading-tight text-primaryColor sm:text-3xl">
              Destination In Bangladesh
            </h3>
            <DestSearchCard className="mx-auto mt-6 w-full max-w-6xl px-0 sm:px-4" />
          </div>
          <div className="mt-8 mb-16">
            <Flex className={"items-start gap-6 flex-col lg:flex-row xl:gap-8"}>
              <div className="hidden w-[260px] flex-shrink-0 lg:block xl:w-[280px]">
                <DestinationSidebar />
              </div>
              <div className="flex-1 flex w-full flex-col gap-5">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex min-w-0 justify-between items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsSidebarOpen(true)}
                      className="inline-flex items-center gap-2 rounded-xl bg-primaryColor px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0057b8] active:scale-[0.98] lg:hidden"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                      </svg>
                      Filter
                    </button>
                    <h2 className="hidden min-w-0 text-sm font-bold text-gray-900 sm:block sm:text-xl">
                      Bali: 1,245 packages found
                    </h2>
                  </div>
                  <select className="min-w-[155px] bg-primaryColor text-white rounded-xl border-2 border-primaryColor px-1 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Sort by: Top picks</option>
                    <option>Price (lowest first)</option>
                    <option>Rating (highest first)</option>
                  </select>
                  <p className="basis-full text-sm font-semibold text-gray-900 sm:hidden">
                    Bali: 1,245 packages found
                  </p>
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
