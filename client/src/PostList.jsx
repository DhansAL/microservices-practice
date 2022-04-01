import axios from "axios";
import React, { useEffect, useState } from "react";
import { CommentCreate } from "./CommentCreate";
import { Commentlist } from "./Commentlist";

export const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    console.log(res.data);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <Commentlist comments={post.comments} />
          {/* this will x no. of get requests which will be a problem for our server */}
          {/* because the 1 post will make a give comments call to a 2nd server i.e 
          our comments service. so if there were 10 posts , they will be needing 10 get requests per load 
          which is more or less spamming our server. so we will introduce async communication to our services --from next commit */}
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
