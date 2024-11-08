import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";
import React, { useEffect } from "react";

const PostsArea = () => {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;
  //what to render goes here.
  if (isLoading) content = <h2>Loading .....</h2>;
  if (!isLoading && isError) content = <h1>{error}</h1>;
  if (!isLoading && !isError && posts.length > 0) {
    content = (
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <p style={{ margin: 0 }}>{post.title}</p>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      {content}
    </div>
  );
};

export default PostsArea;
