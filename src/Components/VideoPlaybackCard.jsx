import React from "react";
import { useState, useEffect } from "react";
import "../Styles/videoplayback.css";
import { NavLink, Link, useParams } from "react-router-dom";
import Logout from "./Logout";
import Sidebar from "./Sidebar";
import Image from "../Images/profil_picture2.jpg";
import ParentComment from "./ParentComment";
import Comment from "./ParentComment";
import { FcLike, FcDislike } from "react-icons/fc";


export default function VideoPlaybackCard({socket}) {
  const { lecture } = useParams();
  const key = import.meta.env.VITE_API_KEY;
  const [video, setVideo] = useState([]);
  const [titlePlayback, setTitlePlayback] = useState();
  const profil = localStorage.getItem("profilUser");
  const storage = localStorage.getItem("token");
  const fechUrl1 = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=${key}`;
  const fetchUrl2 = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=${key}`;

  console.log("clé : ", key);
  console.log("requete:", fechUrl1);

  useEffect(() => {
    // b84673ab21ecab1011b57af0232ad72095cd246d
    fetch(fechUrl1, {
      method: "GET",
      headers: { Authorization: "Bearer " + storage },
    })
      .then((response) => response.json())
      .then((data) => {
        setVideo(data.items);
      });
  }, [storage]);
  console.log(video);

  useEffect(() => {
    fetch(fetchUrl2, {
      method: "GET",
      headers: { Authorization: "Bearer " + storage },
    })
      .then((response) => response.json())
      .then((data) => {
        setTitlePlayback(data.items);
      });
  }, [storage]);
  console.log(titlePlayback);

  return (
    <div className="container principal">
      <div className="row">
        <div className="container col-3 vh-100"></div>
        <div class="container col-3 bg-dark card vh-100 cont_left align-items-center">
          <Sidebar />
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
                <div className="title_of_video_playing">
                  {/* {titlePlayback.map((item) => {
                    // const title = item.id;
                      return( */}
                  {/* <p>{item.snippet.title}</p> */}
                  {/* );
                    })} */}
                </div>
                <ParentComment videoId ={lecture} socket= {socket}/>
                {/* <div className="comment_subcomment_space">
                  <div className="comment_space">
                    <img className=" img_comment" src={Image} />
                    <input
                      className="input_comment"
                      placeholder="laissez un commentaire"
                      type="texte"
                    />
                    <button className="btn_submit_comment" type="submit">
                      Ajouter un commentaire
                    </button>
                  </div>
                  <div className="comments_posted_space">
                    <img className=" img_comment" src={Image} />
                    <span className="name_author_comment">
                      Eunice kinzengele
                    </span>
                    <div className="comment_and_answer">
                      <div className="comment">J'aime bien cela</div>
                      <div className="like_dislike_answer">
                        <button className="col btn_react_comment btn_like">
                          <FcLike /> <span>12</span>
                        </button>
                        <button className="col btn_react_comment btn_dislike">
                          <FcDislike />
                          <span>3</span>
                        </button>
                        <button
                          className="col btn_react_comment btn_answer"
                          type="submit"
                        >
                          Répondre
                        </button>
                      </div>
                    </div>
                    <div className="nomber_of_answer">
                      <button className="btn_nbr_of_answer">4 réponses</button>
                    </div>

                    <div className="sub_comment_and_reaction">
                      <img className=" img_comment" src={Image} />
                      <span className="name_author_comment">
                        Eunice kinzengele
                      </span>
                      <div className="sub_comment">J'aime aussi ça</div>
                      <div className="like_dislike_subcomment">
                        <button className="col btn_react_comment btn_like">
                          <FcLike /> <span>12</span>
                        </button>
                        <button className="col btn_react_comment btn_dislike">
                          <FcDislike />
                          <span>3</span>
                        </button>
                        <button
                          className="col btn_react_comment btn_answer"
                          type="submit"
                        >
                          Répondre
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
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
