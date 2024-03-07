import React from "react";
import Modal from "react-modal";
import Button from "react-bootstrap/Button";

const VideoModal = ({ isOpen, onRequestClose, video }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Video Modal"
    >
      <div>
        <h2>{video.snippet.title}</h2>
        <iframe
          title={video.snippet.title}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
          allowFullScreen
        ></iframe>
        <Button variant="primary" onClick={onRequestClose}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default VideoModal;
