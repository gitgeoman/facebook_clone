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
        profilePic="https://robohash.org/asdfef"
        message="simple message"
        timestamp="{timestamp}"
        username="{username}"
        image="https://robohash.org/asdferr"
      />
      <Post
        profilePic="https://robohash.org/asdfdf"
        message="simple message"
        timestamp="{timestamp}"
        username="{username}"
        image="https://robohash.org/asdfff"
      />{" "}
      <Post
        profilePic="https://robohash.org/asdf"
        message="simple message"
        timestamp="{timestamp}"
        username="{username}"
        image="https://robohash.org/asdfaa"
      />
    </div>
  );
}

export default Feed;
