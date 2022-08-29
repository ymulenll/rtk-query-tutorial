/* eslint-disable jsx-a11y/anchor-is-valid */
import { useGetPostByIdQuery } from "../api/postsApi";

export default function PostDetails({ postId }) {
  const { data: post, error, isLoading } = useGetPostByIdQuery(postId);

  if (isLoading) {
    return (
      <div>
        <span className="spinner-border"></span> Loading Post...
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger">
        Error fetching post: {error.message}
      </div>
    );
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
