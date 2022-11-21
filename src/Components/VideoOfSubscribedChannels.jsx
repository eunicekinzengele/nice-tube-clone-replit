import "../Styles/videoofsbscribechannels.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { contexteUse } from "./Contextes/UseContexte";
import { useContext } from "react";
import Loader from "./Loader";  /* ici */


export default function VideoOfSubscribedChannels() {
  const [loading, setLoading] = useState(true)   /* ici */
  const [videos, setVideos] = useState([]);
  const { channelId } = useParams();
  const { token } = useContext(contexteUse);

  const key = import.meta.env.VITE_API_KEY;
  const fetchData = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&maxResults=45&key=${key}`;

  useEffect(() => {
    fetch(fetchData, { headers: { Authorization: "Bearer " + token } })
      .then((response) => response.json())
      .then((data) => {setVideos(data.items)
        setLoading(false)});
  }, [token]);

  return (
    <div className="div_watch_sub">
      <div className="row">
        { loading ? <Loader/> : videos?.map((item) => {
          const channelId = item.id.videoId;

          return (
              <Link to={`/PageOfVideoPlayback/${channelId}`}>
            <div className="videos__emplacement">
                <img  className="img_video" src={item?.snippet?.thumbnails?.default?.url} alt="sub" />
              <p className="title__video">{item.snippet.title}</p>
            </div>
              </Link>
          );
        })}
      </div>
    </div>
  );
}
