import React from "react";
import Playlist from "./components/Playlist";
import "./App.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <div>
        <Playlist />
      </div>
    </>
  );
}

export default App;
