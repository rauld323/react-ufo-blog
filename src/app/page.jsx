import BlogList from "./components/Bloglist";

const blog = {
  name: "krjekrj",
  id: "1",
  authod: "4343433",
};

const Home = () => {
  return (
    <div className="home">
      <BlogList blog={blog} title={"jkjdkjfd"} slogan={"All Blogs!"} />
    </div>
  );
};

export default Home;
