const BlogList = ({ blogs, title, slogan }) => {
  return (
    <div className="blog-list">
      <h2>
        {title} {slogan}
      </h2>
      {blogs.blogs.map((blog) => (
        <div className="blog-preview" key={blog._id}>
          <Link to={`/blogs/${blog._id}`}>
            <h2>{blog.name}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
