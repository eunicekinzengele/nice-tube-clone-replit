import React from "react";
import "../Styles/subscribedchannels.css";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { contexteUse } from "./Contextes/UseContexte";
import { useContext } from "react";
import Logout from "./Logout";
import Loader from "./Loader";
import Sidebar from "./Sidebar";

export default function SubscribedChannels() {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const profil = localStorage.getItem("profilUser");
  const { token } = useContext(contexteUse);
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
                  const channelId = item.snippet.resourceId.channelId;

                  return (
                    <Link
                      className="card_link"
                      to={`/PageOfVideoSubscribed/${channelId}`}
                    >
                      <div className="videos__emplacement">
                        <img
                          className="img_video"
                          src={item?.snippet?.thumbnails?.medium?.url}
                          alt="sub"
                        />
                        <p className="channel_name">{item.snippet.title}</p>
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
