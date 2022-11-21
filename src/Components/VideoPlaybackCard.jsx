import React from "react";
import "../Styles/videoplayback.css";
import { useParams } from "react-router-dom";

export default function VideoPlaybackCard() {
  const { lecture } = useParams();
  return (
    <div className="div__lecture">
      <div className="watch">
        <iframe
          width="650"
          height="400"
          src={`https://www.youtube.com/embed/${lecture}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
