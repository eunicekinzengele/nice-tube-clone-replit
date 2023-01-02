import React from "react";
import { useState, useEffect } from "react";
import Image from "../Images/profil_picture2.jpg";
import { FcLike, FcDislike } from "react-icons/fc";


function Comment() {
  return (
    <div className="comment_subcomment_space">
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
        <span className="name_author_comment">Eunice kinzengele</span>
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
            <button className="col btn_react_comment btn_answer" type="submit">
              Répondre
            </button>
          </div>
        </div>
        <div className="nomber_of_answer">
          <button className="btn_nbr_of_answer">4 réponses</button>
        </div>

        {/* <div className="sub_comment_and_reaction">
          <img className=" img_comment" src={Image} />
          <span className="name_author_comment">Eunice kinzengele</span>
          <div className="sub_comment">J'aime aussi ça</div>
          <div className="like_dislike_subcomment">
            <button className="col btn_react_comment btn_like">
              <FcLike /> <span>12</span>
            </button>
            <button className="col btn_react_comment btn_dislike">
              <FcDislike />
              <span>3</span>
            </button>
            <button className="col btn_react_comment btn_answer" type="submit">
              Répondre
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Comment;
