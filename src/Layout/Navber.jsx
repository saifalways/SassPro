import React from "react";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import Image from "../Components/Image";
import Logo from "..//assets/logo.png";
import ListItem from "../Components/ListItem"; 

const Navber = () => {
  return (
    <nav className="bg-navBg py-6 ">
      <Container>
        <Flex className="justify-between items-center">
          <Image src={Logo} alt="logo image" className="cursor-pointer"/>
          <Flex className="items-center gap-9">
            <ul className="flex gap-7 ">
              <ListItem type={true} text="Home" />
              <ListItem type={true} text="Pages" />
              <ListItem text="About Us" />
              <ListItem text="Services" />
              <ListItem text="Blog" />
              <ListItem text="Contact" />
            </ul>
            <button className="text-inter text-base font-semibold py-2 px-5 border border-offWhite rounded-lg text-offWhite ">
              Let's Talk
            </button>
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navber;
