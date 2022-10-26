import '../Styles/watchSubscribe.css'
import { useEffect, useState } from 'react';
import { Link , useParams} from "react-router-dom";
import {contexteUse} from './UseContexte';
import { useContext } from 'react';


export default function WatchSubscribe() {

    const [videos, setVideos]= useState([])
    const { channelId } = useParams();
    const {token , setToken}= useContext(contexteUse)


    const key ="AIzaSyB54oBHFCv-NoZwc6oAf8T56HXA2xNlIjo";
    const fetchData = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&maxResults=45&key=${key}`



    useEffect(() => {
        console.log(token);
       fetch(fetchData, {headers: { Authorization: "Bearer " + token}})
         .then((response) => response.json())
         .then((data) => setVideos(data.items));
     }, [token]);


  return (
    <div className='div_watch_sub'>
<div className="row">
         { videos?.map((item)=>{
                    const channelId= item.id.videoId
                    
                    return(
                    <div className="videos__emplacement"> 
                        <Link  to={`/ParentsContainersLecture/${channelId}`} >
                        <img src={item?.snippet?.thumbnails?.default?.url} alt="sub"/>                 
                        </Link> 
                        <p className="title">{item.snippet.title}</p>
                    </div>
                    )
                } 
                )}
          </div>
    </div>
  )
}
