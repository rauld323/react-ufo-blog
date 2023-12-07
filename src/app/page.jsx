"use client";
import BlogList from "./components/Bloglist";
import useBlogs from "./hooks/blog-hook";

const Home = () => {
  const { data } = useBlogs();
  console.log(data, "gtrt");

  return (
    <div className="home">
      {data?.map((blog, key) => (
        <BlogList
          key={key}
          author={blog.author}
          body={blog.body}
          blogId={blog.id}
          title={blog.title}
          slogan={"All Blogs!"}
        />
      ))}
    </div>
  );
};

export default Home;
