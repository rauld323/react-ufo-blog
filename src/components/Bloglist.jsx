import Link from "next/link";

const BlogList = ({ blog, title, slogan }) => {
  return (
    <div className="blog-list">
      <h2>
        {title} {slogan}
      </h2>
      {
        <div className="blog-preview" key={blog._id}>
          <Link href={`/blogs/${blog._id}`}>
            <h2>{blog.name}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      }
    </div>
  );
};

export default BlogList;
