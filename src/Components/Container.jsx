import React from "react";
import "../Styles/container.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Container() {
  const clientId = import.meta.env.REACT_APP_CLIENT_ID;
  const key = /* import.meta.env.REACT_APP_API_KEY; */"AIzaSyB54oBHFCv-NoZwc6oAf8T56HXA2xNlIjo";
  const [video, setVideo] = useState([]);
  const params = useParams();
  const storage = localStorage.getItem("token");
  const fechUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=33&regionCode=US&key=${key}`;

  useEffect(() => {
    fetch(fechUrl)
      .then((response) => response.json())
      .then((data) => setVideo(data.items));
  }, []);
  return (
    <div className="div__container">
      <div className="row">
        {video.map((item) => {
          const lecture = item.id;
          return (
            <div className="videos__emplacement">
              <Link to={`/ParentsContainersLecture/${lecture}`}>
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
export default Container;
