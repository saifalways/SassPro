import React from "react";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import Image from "../Components/Image";
import Heading from "../Components/Heading"; 
import { FaStar } from "react-icons/fa"; 
import Rating1 from "../assets/rating1.png"
import Rating2 from "../assets/rating2.png"
import Rating3 from "../assets/rating3.png" 
import RatingCard from "../Components/RatingCard";

const Rating = () => {
  return (
    <section >
      <Container  >
        <div className="shadow-2xl pt-20 px-12 pb-1 rounded-xl">
            <Flex className="justify-between items-center pb-8 border-b  ">
          <div className="1 ">
            <h6 className="font-raleway font-bold text-base leading-4 text-skyBlue mb-4">Who we are?</h6>
            <Heading text="More than 5,000 users around the world are already using STDEV actively " className="w-[750px] font-raleway font-bold leading-[45px]" />
          </div>
          <div className="pt-7 bg-[#CFDDDB] px-11 flex flex-col items-center justify-center rounded-md ">
            <h2 className="font-inter font-bold text-5xl leading-[60px] text-headColor pt-7.5 mb-1.5">4.8</h2>
            <ul className="flex gap-x-1 mb-1 text-starColor">
                <li ><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
            </ul>
            <p className="font-roboto text-base leading-7 text-[#495E6C] pb-10 ">35 Reviews</p>
          </div>
        </Flex>
        <Flex className="mt-6 justify-between">
           <RatingCard src={Rating1} alt="rating" heading="70+ " pera="Professionals"/>
           <RatingCard src={Rating2} alt="rating" heading="22 Years " pera="Year of experience"/>
           <RatingCard src={Rating3} alt="rating" heading="$40+M " pera="Fundraised by customers"/>
        </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Rating;
