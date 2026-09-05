import React from "react";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import Pera from "../Components/Pera";
import ButtonBlue from "../Components/ButtonBlue";
import Image from "../Components/Image";
import HeroImg from "../assets/hero.png"

const Hero = () => {
  return (
    <section className="bg-navBg pt-[160px] pb-[200px] relative">
      <Container>
        <Flex>
          <div className="w-1/2">
            <h5 className="font-raleway text-lg font-bold text-white">Business & Technologies</h5>
            <h1 className="w-[460px] text-[52px] leading-[69px] pt-3 pb-8 text-white font-raleway font-bold">We help tech companies deliver great software</h1>
            <Pera text="Since 1999. For millions of users. We transform businesses with powerful and
             "   classname= "   w-[552px] font-roboto font-normal text-base leading-7 text-white"   />
            <Pera text="  adaptable digital solutions that satisfy the needs of today and unlock the
             opportunities of tomorrow."   classname= " pb-8 w-[552px] font-roboto font-normal text-base leading-7 text-white"   />
             <div className=" w-[560px] relative">
                <input type="" className="w-full py-4 rounded-r-lg" /> 
                <button className="absolute top-1/2 -translate-y-1/2 py-4 px-5 right-0  bg-skyBlue text-white  font-semibold rounded-r-lg border border-transparent font-raleway hover:text-skyBlue hover:bg-transparent  duration-300 ease-in-out ">Request for Demo</button> 
             </div>
          </div>
          <div className="w-1/2 absolute top-1/2 right-0 -translate-y-1/2"> 
            <div className="w-[755px] h-[537px] ml-10 ">
                <Image src={HeroImg} alt="" className="w-full h-full  " />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Hero;
