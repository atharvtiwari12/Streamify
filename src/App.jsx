import React from "react";
import Playlist from "./components/Playlist";
import "./App.css";
import Modal from "react-modal";
import NavbarComp from "./components/Navbar/NavbarComp";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <div>
        <NavbarComp></NavbarComp>
        <Playlist />
      </div>
    </>
  );
}

export default App;
