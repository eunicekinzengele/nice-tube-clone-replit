import React from "react";
import { Link } from "react-router-dom";
import "../Styles/socialnetworklinks.css";

export const SocialNetworkLinks = ({ user }) => {
  return (
    <div className="container socialNetworks">
      <div className="div_profil_name">
        <label className="nom_complet ">{user.name}</label>
      </div>
      <ul className="socialNetwors_list">
        <li>
          <a href={user.facebook}>
            <span>
              <button className="socialNetwork_links facebook_link ">
                Facebook
              </button>
            </span>
          </a>
        </li>
        <li>
          <a href={user.email} mailto={`mailto:${user.email}`}>
            <span>
              <button className="socialNetwork_links instagram_link ">
                Email
              </button>
            </span>
          </a>
        </li>
        <li>
          <a href={user.tiktok}>
            <span>
              <button className="socialNetwork_links tiktok_link ">
                Tiktok
              </button>
            </span>
          </a>
        </li>
        <li>
          <a href={user.linkedin}>
            <span>
              <button className="socialNetwork_links twitter_link ">
                Linkedin
              </button>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialNetworkLinks;
