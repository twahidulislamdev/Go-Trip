"use client";

import { useState, useEffect } from "react";

import Container from "@/components/ui/Container";
import Flex from "@/components/ui/Flex";
import ActivityCard from "@/components/ui/ActivityCard";
import ActivitySearchCard from "@/components/ui/ActivitySearchCard";
import ActivitySidebar from "@/components/ui/ActivitySidebar";

const ActivityPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* ── Mobile Filter Drawer ── */}
      {/* Backdrop */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden
          ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Drawer panel */}
      <div
        className={`
          fixed inset-y-0 left-0 z-50 flex h-dvh w-[86vw] max-w-[360px] flex-col
          bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Drag handle + header */}
        <div className="sticky top-0 z-10 bg-white px-5 pt-4 pb-3 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-900">Filters</h3>
            <button
              type="button"
              onClick={() => setIsSidebarOpen(false)}
              className="rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
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

        {/* Sidebar content */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          <ActivitySidebar />
        </div>

        {/* Apply button pinned at bottom */}
        <div className="bg-white border-t border-gray-100 px-5 py-4">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            className="w-full rounded-xl bg-primaryColor py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0057b8] active:scale-[0.98]"
          >
            Show results
          </button>
        </div>
      </div>

      {/* ── Page Content ── */}
      <div className="pt-20 sm:pt-24 lg:pt-25">
        <Container>
          {/* Search Hero */}
          <div className="rounded-2xl bg-gradient-to-b from-blue-50/100 via-white to-pink-50/100 px-3 py-5 shadow-lg sm:px-5 sm:py-6">
            <h3 className="text-center text-2xl font-bold leading-tight text-primaryColor sm:text-3xl">
              Find Your Next Adventure
            </h3>
            <ActivitySearchCard className="mx-auto mt-3 w-full !px-0 !py-0 sm:!px-2" />
          </div>

          {/* Results Layout */}
          <div className="mt-8 mb-16">
            <Flex className="items-start gap-6 flex-col lg:flex-row xl:gap-8">
              {/* Desktop sidebar — always visible */}
              <div className="hidden w-[260px] flex-shrink-0 lg:block xl:w-[280px]">
                <ActivitySidebar />
              </div>

              {/* Results column */}
              <div className="flex-1 flex w-full flex-col gap-5">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
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
                        <line x1="8" y1="12" x2="20" y2="12" />
                        <line x1="12" y1="18" x2="20" y2="18" />
                      </svg>
                      Filter
                    </button>
                    <h2 className="hidden min-w-0 text-sm font-bold text-gray-900 sm:block sm:text-xl">
                      Bali: 714 activities found
                    </h2>
                  </div>
                  <select className="min-w-[155px] text-primaryColor rounded-xl border-2 border-primaryColor px-1 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Sort by: Top picks</option>
                    <option>Price (lowest first)</option>
                    <option>Rating (highest first)</option>
                  </select>
                  <p className="basis-full text-sm font-semibold text-gray-900 sm:hidden">
                    Bali: 714 activities found
                  </p>
                </div>

                {/* Activity Cards */}
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
              </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ActivityPage;
