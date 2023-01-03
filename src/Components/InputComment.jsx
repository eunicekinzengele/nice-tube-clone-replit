import React from "react";
import { useState, useEffect } from "react";


function InputComment() {
    const [text, setText] = useState('')
   const isInputTextDisable = text.trim().length === 0
   const onSubmit = (event) => {
      event.preventDefault()
      handleSubmit(text)
      setText('')

  return (
    <div>
      <form onSubmit={onSubmit} className="comment-input">
        <input
          className="input_comment"
          placeholder="laissez un commentaire"
          type="texte"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn_submit_comment" type="submit" disabled={isInputTextDisable}>
          Ajouter un commentaire
        </button>
      </form>
    </div>
  );
  }
}
export default InputComment;
