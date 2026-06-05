import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "next/image";
import BrandLogo from "../../public/brandLogo.png";
import Button from "./Button";

const Header = () => {
  const menuItems = [
    "Destination",
    "Hotel",
    "Activity",
    "Flights",
    "Car Rent",
    "Pages",
  ];
  return (
    <div className="w-full fixed top-0 right-0 z-50 ">
      <Container>
        <Flex className="justify-between items-center py-5">
          <div className="">
            <Image
              src={BrandLogo}
              alt="Go Trip Logo"
              width={120}
              height={120}
            />
          </div>
          <ul className="flex space-x-10">
            {menuItems.map((item) => (
              <li
                className="text-primaryColor font-semibold hover:text-neutral-800 cursor-pointer"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-5">
            <Button className="text-sm font-semibold text-primaryColor py-3 px-5 border-2 border-primaryColor rounded hover:bg-primaryColor hover:text-white transition duration-300">
              Register / Sign In
            </Button>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
