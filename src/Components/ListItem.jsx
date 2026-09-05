import React from "react"; 
import { FaAngleDown } from "react-icons/fa6";

const ListItem = ({  type, text, classname }) => {
  return (
    <>
      <li className={`font-inter text-base font-medium text-offWhite  cursor-pointer ${classname}`}> {text} { type && <FaAngleDown className="inline ml-1" /> }  </li>
    </>
  );
};

export default ListItem;
