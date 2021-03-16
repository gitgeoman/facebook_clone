import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {/* <Post
        key={id}
        profilePic={profilePic}
        message=simple message
        timestamp={timestamp}
        username={username}
        image={image}
      /> */}
      <Post
        profilePic="https://robohash.org/asdf"
        message="simple message"
        timestamp="{timestamp}"
        username="{username}"
        image="https://robohash.org/asdf"
      />
      <Post
        profilePic="https://robohash.org/asdf"
        message="simple message"
        timestamp="{timestamp}"
        username="{username}"
        image="https://robohash.org/asdf"
      />{" "}
      <Post
        profilePic="https://robohash.org/asdf"
        message="simple message"
        timestamp="{timestamp}"
        username="{username}"
        image="https://robohash.org/asdf"
      />
    </div>
  );
}

export default Feed;
