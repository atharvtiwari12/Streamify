import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const VideoCard = ({ video, onClick }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={video.snippet.thumbnails?.medium?.url || ""}
        alt={video.snippet.title}
      />
      <Card.Body>
        <Card.Title>{video.snippet.title}</Card.Title>
        <Card.Text>{video.snippet.description}</Card.Text>
        <Button variant="primary" onClick={() => onClick(video)}>
          Watch
        </Button>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
