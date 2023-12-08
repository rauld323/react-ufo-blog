"use client";
import BlogList from "./components/BlogList";
import useBlogs from "./hooks/blog-hook";

const Home = () => {
  const { data } = useBlogs();

  return (
    <div className="home">
      {data?.map((blog, key) => (
        <BlogList
          key={key}
          author={blog.author}
          body={blog.body}
          blogId={blog.id}
          title={blog.title}
          name={blog.name}
        />
      ))}
    </div>
  );
};

export default Home;
