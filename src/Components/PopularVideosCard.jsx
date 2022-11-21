import React from "react";
import "../Styles/popularvideocard.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function PopularVideosCard() {
  const [loading, setLoading] = useState(true) 
  const key = import.meta.env.VITE_API_KEY;

  const [video, setVideo] = useState([]);
  const storage = localStorage.getItem("token");
  const fechUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=33&regionCode=US&key=${key}`;

  console.log("clé : ", key);
  console.log("requete:", fechUrl);

  useEffect(() => {
    // b84673ab21ecab1011b57af0232ad72095cd246d
    fetch(fechUrl, {
      method: "GET",
      headers: { Authorization: "Bearer " + storage },
    })
      .then((response) => response.json())
      .then((data) => {setVideo(data.items)
    setLoading(false)}); 

  }, [storage]);
  return (
    <div className="div__container">
      <div className="row">
          {loading ? <Loader/>: video &&  
          video.map((item) => {
            const lecture = item.id;
            return (
              <div className="videos__emplacement">
                <Link to={`/PageOfVideoPlayback/${lecture}`}>
                  <img
                    className="img_logo"
                    src={item.snippet.thumbnails.medium.url}
                  />
                  <p className="title__video">{item.snippet.title}</p>
                </Link>
              </div>
            );
          })}  
      </div>
    </div>
  );
}
export default PopularVideosCard;
