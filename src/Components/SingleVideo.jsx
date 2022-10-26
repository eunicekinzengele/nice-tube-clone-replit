import React from 'react'

export default function SingleVideo(id,thumbs__video, profile__img, title, channel__name, views, timestamp) {
  return (
    <div className='col__4'>
        <div className='thumbmail__img'>
             <img src='thumb__img' alt='' className='thumb__img'></img>
        </div>
    </div>
  )
}


