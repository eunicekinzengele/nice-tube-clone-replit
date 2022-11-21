import React from "react";
import "../Styles/subscribedchannels.css";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { contexteUse } from "./Contextes/UseContexte";
import { useContext } from "react";
import Loader from "./Loader";  /* ici */


export default function SubscribedChannels() {
  const [loading, setLoading] = useState(true)   /* ici */
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
      .then((data) => {setVideos(data.items)
      setLoading(false)});
  }, [token]);

  return (
    <div className="container_subscribe">
      <div className="row">
        {loading? <Loader/>: videos?.map((item) => {
          const channelId = item.snippet.resourceId.channelId;

          return (
            <div className="videos__emplacement">
              <Link to={`/PageOfVideoSubscribed/${channelId}`}>
                <img src={item?.snippet?.thumbnails?.medium?.url} alt="sub" />
                <p className="channel_name">{item.snippet.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
