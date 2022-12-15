import React from "react";
import "../Styles/socialnetworklinks.css";

export const SocialNetworkLinks = () => {
  
  return (
    <div className="container socialNetworks">
      <div className="div_profil_name">
        <label className="nom_complet text-light">Nom</label>
      </div>
      <ul className="socialNetwors_list">
        <li>
          <label className="socialNetwork_links facebook_link text-light">
            Facebook
          </label>
        </li>
        <li>
          <label className="socialNetwork_links instagram_link text-light">
            Instagram
          </label>
        </li>
        <li>
          <label className="socialNetwork_links tiktok_link text-light">
            Tiktok
          </label>
        </li>
        <li>
          <label className="socialNetwork_links twitter_link text-light">
            Twitter
          </label>
        </li>
      </ul>
    </div>
  );
};

export default SocialNetworkLinks;
