import React from "react";
import NavbarComp from "./Navbar/NavbarComp";
import Playlist from "./Playlist";
import Carousel from "./CarouselComp/Carousel";

function MainPage() {
  return (
    <>
      <div>
        <NavbarComp></NavbarComp>
        <Carousel></Carousel>
        <Playlist />
      </div>
    </>
  );
}

export default MainPage;
