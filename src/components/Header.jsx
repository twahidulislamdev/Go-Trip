import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const Header = () => {
  return (
    <div className="bg-gray-800 text-white">
      <Container>
        <Flex className="justify-between items-center py-4">
          <h1 className="text-3xl font-bold ">Go Trip</h1>
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>Destinations</li>
            <li>Contact</li>
          </ul>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
