import React from "react";
import "../Styles/lecture.css";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Lecture() {
  const { lecture } = useParams();
  const [video, setVideo] = useState([]);
  

  return (
    <div className="div__lecture">
      <div className="watch">
        
        <iframe
          width="760"
          height="500"
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
