import { getBlogDetails } from "../hooks/blog-hook";

export default function BlogDetails() {
  const { data: blog, isLoading } = getBlogDetails();

  console.log(blog, "details");
  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {/* {error && <div>{error}</div>} */}
      {blog && (
        <article>
          {/* <img src={"http://localhost:8000/" + blog.blogImage} alt="aliens" />
          <h2>{blog.name}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.content}</div>
          <button onClick={null}>Delete Blog</button> */}
        </article>
      )}
    </div>
  );
}
