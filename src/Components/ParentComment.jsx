import React from "react";
import { useState, useEffect } from "react";
import Comment from "./Comment";
import Image from "../Images/profil_picture2.jpg";
import InputComment from "./InputComment";
import { FcLike, FcDislike } from "react-icons/fc";
import "../Styles/videoplayback.css";


function ParentComment({videoId, socket}) {
  const [Comments, setComments] = useState([]);
  const [tapComment, setTapComment] = useState("");
  // userId = localStorage.getItem("userId");
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
  //     .post("http://localhost:3000/comment", {
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

  useEffect(() => {
    socket.on("comment-send", (data) => {
      console.log("comment-send", data);
      if (data){
        const newComments = [...Comments, data];
        setComments(newComments)
      }
    });
    socket.on("comment-reply", (data) => {
      console.log("reply", data);
        const newComments = Comments.map((comment) =>{
          if (comment._id === data._id) return data;
          return comment
        })
        setComments(newComments)
    });

      return () => {
        socket.removeListener ("comment-send");
        socket.removeListener("comment-reply");
      };
  }, [socket, Comments]);

  useEffect(() =>{
    fetch('http://localhost:3000/comment')
    .then((response) => response.json())
    .then((data) => {
      console.log(" données", data);
      // setComments(data.Commentaires)
    })
  })

  const post = () =>{
    if (tapComment.trim()) {
      socket.emit("comment-send", {
        commentaire: tapComment,
        socketID: socket.id,
         userId: "aaaaa",
        videoId,
      });
      setTapComment("");
    } 
  };

    // fetch(fecthData, {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json", 
    // // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //   body: JSON.stringify({ commentaire: Comments, videoId }),
    // })
    // })
      
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
        <input
          className="input_comment"
          value={tapComment}
          onChange={(e)=> setTapComment(e.target.value)}
          placeholder="laissez un commentaire"
          type="texte"
        />
        <button className="btn_submit_comment" onClick={post} type="submit">
          Ajouter un commentaire
        </button>
        {/* <InputComment submitLabel="Send Comment" handleSubmit={addComment}/> */}
      </div>
      <div>
      {
        Comments
        ?.filter ((comment) => comment.videoId === videoId)
        .map((comment) =>{
          return(
            <Comment key={comment._id} comment={comment} socket={socket} />
          )
        })
      }
      </div>
    </div>
  );
}

export default ParentComment;
