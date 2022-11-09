import React from "react";
import "../Styles/subscribedchannels.css";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { contexteUse } from "./Contextes/UseContexte";
import { useContext } from "react";

export default function SubscribedChannels() {
  // const clientId =
  //   "129788055226-glev0dl084clkeph94jhapm27uhc8tck.apps.googleusercontent.com";

  // const key = "AIzaSyB54oBHFCv-NoZwc6oAf8T56HXA2xNlIjo";
  const [videos, setVideos] = useState([]);
  const {token} = useContext(contexteUse);
  useEffect(() => {
    console.log(token);
    fetch(
      "https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&maxResults=10&mine=true&key=AIzaSyB54oBHFCv-NoZwc6oAf8T56HXA2xNlIjo",
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    )
      .then((response) => response.json())
      .then((data) => setVideos(data.items));
  }, [token]);

  return (
    <div className="container_subscribe">
      <div className="row">
        {videos?.map((item) => {
          const channelId = item.snippet.resourceId.channelId;

          return (
            <div className="videos__emplacement">
              <Link to={`/ParentsCardChannelVideo/${channelId}`}>
                <img src={item?.snippet?.thumbnails?.medium?.url} alt="sub" />
              </Link>
              <p className="title__video">{item.snippet.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
