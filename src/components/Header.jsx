import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "next/image";
import BrandLogo from "../../public/brandLogo.png";

const Header = () => {
  return (
    <div className="">
      <Container>
        <Flex className="justify-between items-center py-4">
          <div className="">
            <Image src={BrandLogo} alt="Go Trip Logo" width={100} height={50} />
          </div>
          <ul className="flex space-x-10 text-black">
            <li>Tour Packages</li>
            <li>Hotel</li>
            <li>Activity</li>
            <li>Flight</li>
            <li>Car Rental</li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </button>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
