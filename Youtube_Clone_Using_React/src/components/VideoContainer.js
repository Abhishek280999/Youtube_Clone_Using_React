
import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "./../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_API_KEY);
      const data = await response.json();
      console.log(data.items)
      setVideos(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  // Conditional rendering
  if (!videos.length) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-wrap  justify-around ">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
