import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import styles from "./Playlist.module.css";

const Playlist = () => {
  const [loading, setLoading] = useState(true);
  const [playlists, setPlaylists] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const fetchPlaylists = async () => {
    try {
      const apiKey = import.meta.env.VITE_REACT_APP_Youtube_API_KEY;
      const channelId = "UC6I2NJRHPwi47BRaZsHEFRg";
      const maxResults = 20;

      const url = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=${maxResults}&key=${apiKey}`;
      console.log("API Request URL:", url);

      const response = await axios.get(url);

      const playlistsData = response.data.items || [];

      const playlistsWithVideos = await Promise.all(
        playlistsData.map(async (playlistItem) => {
          const videosResponse = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistItem.id}&key=${apiKey}`
          );

          playlistItem.videos = videosResponse.data.items || [];
          return playlistItem;
        })
      );

      setPlaylists(playlistsWithVideos);
      setLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.toJSON());
        if (error.response) {
          console.error("Response Data:", error.response.data);
          console.error("Response Status:", error.response.status);
        }
      } else {
        console.error("General Error:", error);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalIsOpen(false);
  };

  return (
    <div className={styles.playlistContainer}>
      {loading ? (
        <p>Loading...</p>
      ) : playlists.length > 0 ? (
        playlists.map((playlist) => (
          <div key={playlist.id} className={styles.playlist}>
            <h3>{playlist.snippet?.title}</h3>
            <div className={styles.videosContainer}>
              {playlist.videos.length > 0 ? (
                playlist.videos.map((video) => (
                  <VideoCard
                    key={video.snippet.resourceId.videoId}
                    video={video}
                    onClick={() => openModal(video)}
                  />
                ))
              ) : (
                <p>No videos available.</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No playlists available.</p>
      )}

      {selectedVideo && (
        <VideoModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          video={selectedVideo}
        />
      )}
    </div>
  );
};

export default Playlist;
