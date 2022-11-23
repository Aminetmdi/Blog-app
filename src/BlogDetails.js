import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPendeing,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();
  const hancleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      console.log("blog delete");
      navigate("/");
    });
  };
  return (
    <div className="blog-details">
      {isPendeing && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={hancleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
