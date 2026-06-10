"use client";
import React, { useState, useEffect } from "react";
import Container from "../ui/Container";
import Flex from "../ui/Flex";
import Image from "next/image";
import BrandLogo from "../../../public/brandLogo.png";
import Button from "../ui/Button";
import NavLink from "../ui/NavLink";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: "Hotel", href: "/hotel" },
    { title: "Destination", href: "/destination" },
    { title: "Activity", href: "/activity" },
    { title: "Flights", href: "/flight" },
    { title: "Car Rent", href: "/car-rent" },
    { title: "Pages", href: "/pages" },
  ];
  return (
    <div className="w-full fixed top-0 right-0 z-50 transition-all duration-300 bg-gradient-to-b from-blue-50/100 via-white to-pink-50/100">
      <Container>
        <Flex
          className={`relative justify-between items-center px-4 lg:px-0 transition-all duration-300 ${
            isScrolled ? "py-3" : "py-5"
          }`}
        >
          <div className="md:static">
            <Link href="/">
              <Image
                src={BrandLogo}
                alt="Go Trip Logo"
                width={120}
                height={120}
                className="w-[96px] md:w-[120px] h-auto"
              />
            </Link>
          </div>

          <ul className="hidden md:flex space-x-5">
            {menuItems.map((item) => (
              <li key={item.title}>
                <NavLink href={item.href}>
                  <span className="text-black font-semibold cursor-pointer">
                    {item.title}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-5">
            <Button className="hidden md:block text-sm font-semibold text-primaryColor py-3 px-5 border-2 border-primaryColor rounded hover:bg-primaryColor hover:text-white transition duration-300 cursor-pointer whitespace-nowrap">
              Register / Sign In
            </Button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded border border-primaryColor/20 text-primaryColor"
            >
              <FaBars />
            </button>
          </div>
        </Flex>
      </Container>

      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-[280px] max-w-[82vw] bg-white shadow-2xl transition-transform duration-300 md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isSidebarOpen}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <Link href="/" onClick={() => setIsSidebarOpen(false)}>
            <Image
              src={BrandLogo}
              alt="Go Trip Logo"
              width={104}
              height={104}
              className="h-auto w-[104px]"
            />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsSidebarOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded border border-primaryColor/20 text-primaryColor"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="px-5 py-6">
          <Button className="mb-5 w-full text-center text-sm font-semibold text-primaryColor py-3 px-5 border-2 border-primaryColor rounded hover:bg-primaryColor hover:text-white transition duration-300 cursor-pointer">
            Register / Sign In
          </Button>

          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className="block rounded px-3 py-3 text-base font-semibold text-primaryColor transition hover:bg-primaryColor hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Header;
