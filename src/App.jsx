import React from "react";
import Image from "./Components/Image";
import hook from "./assets/hero.png";
import hok from "./assets/react.svg";
import Container from "./Components/Container";

const App = () => {
  return (
    <>
      <Container>
        <Image src={hook} alt="as" />
        <Image src={hok} alt="as" />
      </Container>
    </>
  );
};

export default App;
