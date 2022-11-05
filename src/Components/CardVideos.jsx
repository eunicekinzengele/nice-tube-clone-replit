import React from "react";
import "../Styles/container.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CardVideos() {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const key =import.meta.env.VITE_API_KEY; 
  const [video, setVideo] = useState([]);
  const params = useParams();
  const storage = localStorage.getItem("token");
  const fechUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=33&regionCode=US&key=${key}`;

  useEffect(() => {
    fetch(fechUrl,  {
      method: "GET",
      headers: { Authorization: "Bearer " + storage },
    })
      .then((response) => response.json())
      .then((data) => setVideo(data.items));
  }, []);
  return (
    <div className="div__container">
      <div className="row">
        {video &&
          video.map((item) => {
          const lecture = item.id;
          return (
            <div className="videos__emplacement">
              <Link to={`/ParentsCardWatchVideo/${lecture}`}>
                <img src={item.snippet.thumbnails.medium.url} />
                <div className="div_title">
                  <p className="title__video">{item.snippet.title}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default CardVideos;
