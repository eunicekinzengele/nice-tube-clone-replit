import React, { useState, useEffect } from "react";
import SocialNetworkLinks from "./SocialNetworkLinks";
import { useNavigate, useParams } from "react-router-dom";

function Profil() {
  const[user, setUser] = useState([]);
  const { userId } = useParams();
  const navigate = useNavigate();

  const fetchData = `http://localhost:8100/api/user/${userId}`;
  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    fetch(fetchData, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log("items: ", data);
      });
  }, []);

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <div>
      <SocialNetworkLinks user={user} />
    </div>
  );
}

export default Profil;
