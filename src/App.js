/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import NewPost from "./components/NewPost";
import PostDetails from "./components/PostDetails";
import PostList from "./components/PostList";

export default function App() {
  const [postId, setPostId] = useState(-1);

  return (
    <main className="container">
      <h1 className="mb-4">React-Query Demo</h1>
      {postId > -1 && (
        <div>
          <a onClick={() => setPostId(-1)} href="#">
            Back
          </a>
        </div>
      )}
      {postId > -1 ? (
        <PostDetails postId={postId} setPostId={setPostId} />
      ) : (
        <div className="row gap-4">
          <div className="col-md">
            <NewPost />
          </div>
          <div className="col-md">
            <PostList setPostId={setPostId} />
          </div>
        </div>
      )}
    </main>
  );
}
