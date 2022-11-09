import React from "react";
import "../Styles/search.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function SearchResult() {
  const { searchWord } = useParams();
  const [videoFound, setVideoFound] = useState([]);
  const fetchData = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=60&type=video&q=${searchWord}&safeSearch=none&key=AIzaSyB54oBHFCv-NoZwc6oAf8T56HXA2xNlIjo`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setVideoFound(data.items);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, [searchWord]);
  return (
    <div className="Place_filter">
      <div className="row">
        {videoFound?.map((item) => {
          const channelId = item.id.videoId;
          return (
            <div className="videos__emplacement">
              <Link to={`/ParentsCardWatchVideo/${channelId}`}>
                <img
                  src={item?.snippet?.thumbnails?.medium?.url}
                  alt="search"
                />
                <p className="title__video">{item?.snippet?.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
