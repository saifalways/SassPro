import React from 'react'
import Flex from "../Components/Flex"
import Image from "../Components/Image"

const RatingCard = ({src,alt,heading,pera}) => {
  return ( 
     <Flex className="items-center gap-x-5">
                <div className="w-[75px] h-[75px]">
                    <Image src={src} alt={alt} className="w-full h-full"/> 
                </div>
                <div >
                    <h3 className="text-3xl font-bold font-inter leading-10 text-skyBlue">{heading}</h3>
                    <p className="text-base font-semibold font-raleway leading-10 text-[#495E6C]">{pera}</p>
                </div>
            </Flex>
  )
}

export default RatingCard