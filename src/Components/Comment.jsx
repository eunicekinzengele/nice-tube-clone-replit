import React from "react";
import { useState, useEffect } from "react";
import Image from "../Images/profil_picture2.jpg";
import InputComment from "./InputComment";
import { FcLike, FcDislike } from "react-icons/fc";

function Comment(currentUserId) {
  const [Comments, setComments] = useState();
  // const [activeComment, setActiveComment] = useState(null);
  // const [userData, setUserData] = useState([]);

  // const rootComments = backendComments
  //   .filter((backendComment) => backendComment.parentComment === null)
  //   .sort(
  //     (a, b) =>
  //       new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  //   );

  // const getReplies = (commentId) => {
  //   return backendComments
  //     .filter((backendComment) => backendComment.parentComment === commentId)
  //     .sort(
  //       (a, b) =>
  //         new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  //     );
  // };

  // const addComment = (text, parentComment) => {
  //   console.log("addComment", text, parentComment);
  //   axios
  //     .post("http://localhost:8100/api/comment", {
  //       message: text,
  //       videoId: "1980431",
  //       userId: localStorage.getItem("userId"),
  //       parentComment: parentComment,
  //     })
  //     .then((comment) => {
  //       setBackendComments([comment, ...backendComments]);
  //     });
  //   setActiveComment(null);
  // };

  // const fecthData = `http://localhost:3000/comment`;
  // const fetchUser = "http://localhost:8100/api/user/";

  // useEffect(() => {
  //   fetch(fecthData, {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json", 
  //   // 'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //     body: JSON.stringify({ commentaire: Comments, videoId }),
  //   })
  //   })
      
      // .then((res) => res.json())
      // .then((data) => setComments(data));

  //   fetch(fetchUser, {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setUserData(data));
  // }, []);

  console.log("Commentaire : ", setComments);
  // console.log("Backend Users : ", userData);

  return (
    
    <div className="comment_subcomment_space">
      <div className="comment_space">
        <img className=" img_comment" src={Image} />
        <InputComment submitLabel="Send Comment" handleSubmit={addComment}/>
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
