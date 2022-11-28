import React from "react";
import "../Styles/search.css";
import { useEffect, useState } from "react";
import Logout from "./Logout";
import { useParams, Link, NavLink } from "react-router-dom";

export default function SearchResult() {
  const { searchWord } = useParams();
  const [videoFound, setVideoFound] = useState([]);
  const profil = localStorage.getItem("profilUser");
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
    <div class="container principal">
      <div class="row">
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
              {videoFound?.map((item) => {
                const channelId = item.id.videoId;
                return (
                  <div className="videos__emplacement">
                    <Link
                      to={`/PageOfVideoPlayback/${channelId}`}
                      className="card_link"
                    >
                      <img
                        className="img_video"
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
        </div>
      </div>
    </div>
    // <div className="Place_filter">
    //   <div className="row">
    //     {videoFound?.map((item) => {
    //       const channelId = item.id.videoId;
    //       return (
    //         <div className="videos__emplacement">
    //           <Link to={`/PageOfVideoPlayback/${channelId}`}  className="card_link">
    //             <img className="img_video"
    //               src={item?.snippet?.thumbnails?.medium?.url}
    //               alt="search"
    //             />
    //             <p className="title__video">{item?.snippet?.title}</p>
    //           </Link>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
}
