import React, { useState, useEffect } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  //this useEffect will get data from database
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs);
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => {
        <Post
          key={post.id}
          profilePic={post.profilePic}
          message={post.message}
          timestamp={post.timestamp}
          username={post.username}
          image={post.image}
        />;
      })}
    </div>
  );
}

export default Feed;
