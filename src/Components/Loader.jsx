import React from 'react'
import '../Styles/loader.css'
import loading from '../Images/loading.gif';

export default function Loader() {
  return (
    <div className='container_img_loader'>
        <div className='img__loader'>
             <img src={loading}/>
         </div>
    </div>
  )
}
