import "../Styles/videoofsbscribechannels.css";
import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { contexteUse } from "./Contextes/UseContexte";
import { useContext } from "react";
import Logout from "./Logout";
import Loader from "./Loader";
import Sidebar from "./Sidebar";

export default function VideoOfSubscribedChannels() {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const profil = localStorage.getItem("profilUser");
  const { channelId } = useParams();
  const { token } = useContext(contexteUse);

  const key = import.meta.env.VITE_API_KEY;
  const fetchData = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&maxResults=45&key=${key}`;

  useEffect(() => {
    fetch(fetchData, { headers: { Authorization: "Bearer " + token } })
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
        setLoading(false);
      });
  }, [token]);

  return (
    <div class="container principal">
      <div class="row">
        <div className="container col-3 vh-100"></div>
        <div class="container col-3 bg-dark card vh-100 cont_left align-items-center">
        <Sidebar />
        </div>

        <div class="container col-8 col-auto bg-dark card cont-rigth">
          <div className="container">
            <div className="row_emplacement flex-wrap d-flex">
              {loading ? (
                <Loader />
              ) : (
                videos?.map((item) => {
                  const channelId = item.id.videoId;

                  return (
                    <Link
                      to={`/PageOfVideoPlayback/${channelId}`}
                      className="card_link"
                    >
                      <div className="videos__emplacement">
                        <img
                          className="img_video"
                          src={item?.snippet?.thumbnails?.default?.url}
                          alt="sub"
                        />
                        <p className="title__video">{item.snippet.title}</p>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
