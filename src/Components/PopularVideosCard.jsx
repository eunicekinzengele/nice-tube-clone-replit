import React from "react";
import "../Styles/popularvideocard.css";
import { NavLink, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Logout from "./Logout";
import Loader from "./Loader";
// import { Container } from "react-bootstrap";

function PopularVideosCard() {
  const [loading, setLoading] = useState(true);
  const key = import.meta.env.VITE_API_KEY;
  const [video, setVideo] = useState([]);
  const profil = localStorage.getItem("profilUser");
  const storage = localStorage.getItem("token");
  const fechUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=US&key=${key}`;

  console.log("clé : ", key);
  console.log("requete:", fechUrl);

  useEffect(() => {
    // b84673ab21ecab1011b57af0232ad72095cd246d
    fetch(fechUrl, {
      method: "GET",
      headers: { Authorization: "Bearer " + storage },
    })
      .then((response) => response.json())
      .then((data) => {
        setVideo(data.items);
        setLoading(false);
      });
  }, [storage]);
  console.log(video);
  return (
    <div className="container principal">
      <div className="row">
        <div className="container col-3 vh-100"></div>
        <div class="container col-3 bg-dark card vh-100 cont_left align-items-center">
          <div className="side_link align-items-center">
            <NavLink
              className={(nav) =>
                nav.isActive ? "side_list_red" : "side_list "
              }
              to={"/PageOfPopularVideo"}
            >
              Accueil
            </NavLink>
          </div>
          <div className="side_link align-items-center">
            <NavLink
              className={(nav) =>
                nav.isActive ? "side_list_red" : "side_list "
              }
              to={"/PageOfSubscribedChannels"}
            >
              Abonnements
            </NavLink>
          </div>
          <div className="img_buton">
            <img className="profil_img" src={profil} />
            <button className="btn btn_logout">
              <Logout />
            </button>
          </div>
        </div>

        <div class="container col-8 col-auto bg-dark card cont-rigth">
          <div className="container">
            <div className="row_emplacement flex-wrap d-flex">
              {loading ? (
                <Loader />
              ) : (
                video &&
                video.map((item) => {
                  const lecture = item.id;
                  return (
                    <Link
                      to={`/PageOfVideoPlayback/${lecture}`}
                      className="card_link"
                    >
                      <div className="videos__emplacement">
                        <img
                          className="img_video"
                          src={item.snippet.thumbnails.medium.url}
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
export default PopularVideosCard;
