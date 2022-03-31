import React from "react";
import { PostCreate } from "./PostCreate";
import { PostList } from "./PostList";

export const App = () => {
  return (
    <div className="container">
      <h1>create post</h1>
      <PostCreate />
      <PostList />
    </div>

  );
};
