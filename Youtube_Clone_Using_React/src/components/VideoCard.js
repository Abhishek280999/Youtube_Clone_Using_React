import React from "react";
import { prettifyNumber } from "./../utils/number";

const VideoCard = ({ info }) => {
  // console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const views = statistics.viewCount;

  return (
    <div className="p-2 m-2 w-[380px] h-[355px] shadow-lg rounded-lg ">
      <img className="rounded-lg  pb-2 w-[380px] pt-3" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{prettifyNumber(views)} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
