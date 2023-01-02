import React from 'react'

function Comment() {

  return (
    <div>
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
    </div>
  )
}

export default Comment