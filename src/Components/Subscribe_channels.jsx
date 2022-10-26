import React from 'react'
import '../Styles/subscribe_channels.css'
import { useEffect, useState } from 'react';
import { Link , useParams} from "react-router-dom";
import {contexteUse} from './UseContexte';
import { useContext } from 'react';



export default function Subscribe_channels() {

   


  const clientId ="129788055226-glev0dl084clkeph94jhapm27uhc8tck.apps.googleusercontent.com";

  const key ="AIzaSyB54oBHFCv-NoZwc6oAf8T56HXA2xNlIjo";
  const [videos, setVideos]= useState([])
  const {token , setToken}= useContext(contexteUse)
  // const {params} = useParams()
  const storage= localStorage.getItem('token')
  
  useEffect(() => {
     console.log(token);
    fetch('https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&maxResults=10&mine=true&key=AIzaSyB54oBHFCv-NoZwc6oAf8T56HXA2xNlIjo', {
    method: 'GET',
    headers: { Authorization: "Bearer " + token}})
      .then((response) => response.json())
      .then((data) => setVideos(data.items));
  }, [token]);
  console.log(videos);

  return (
    <div className='container_subscribe'>
         <div className="row">
         { videos?.map((item)=>{
                    const channelId= item.snippet.resourceId.channelId
                    
                    return(
                    <div className="videos__emplacement"> 
                        <Link to={`/ParentsWatchSubscribe/${channelId}`}>
                        <img src={item?.snippet?.thumbnails?.medium?.url} alt="sub"/>                 
                        </Link> 
                        <p className="title__video">{item.snippet.title}</p>
                    </div>
                    )
                } 
                )}
          </div> 
    </div>
  )
}
