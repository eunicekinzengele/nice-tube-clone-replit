import React from "react";
import { useState, useEffect } from "react";
import "../Styles/videoplayback.css";
import { NavLink, Link, useParams } from "react-router-dom";
import Logout from "./Logout";

export default function VideoPlaybackCard() {
  const { lecture } = useParams();
  const key = import.meta.env.VITE_API_KEY;
  const [video, setVideo] = useState([]);
  const profil = localStorage.getItem("profilUser");
  const storage = localStorage.getItem("token");
  const fechUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=${key}`;

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
            <div className="col row_emplacement flex-wrap d-flex">
              <div className="card_playback">
                <iframe
                  width="520"
                  height="350"
                  src={`https://www.youtube.com/embed/${lecture}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                {/* <div className="col bg-danger color-light">
                  {video &&
                    video.map((item) => {
                      const lecture = item.id;
                      return (
                          <div className="random_videos_emplacement">
                            <p className="title__video_random">
                              {item.snippet.title}
                            </p>
                          </div>
                      );
                    })}
                </div> */}
                {/*  */}
              </div>
              <div className="col random_videos">
                {video &&
                  video.map((item) => {
                    const lecture = item.id;
                    return (
                      <Link
                        to={`/PageOfVideoPlayback/${lecture}`}
                        className="card_link"
                      >
                        <div className="random_videos_emplacement">
                          <img
                            className="img_video_random"
                            src={item.snippet.thumbnails.medium.url}
                          />
                          <p className="title__video_random">
                            {item.snippet.title}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
