import Navbar from "../components/Navbar";
import BlogList from "../components/Bloglist";

const blog = {
  name: "krjekrj",
  id: "1",
  authod: "4343433",
};

const Home = () => {
  // const {
  //   data: blogs,
  //   isPending,
  //   error,
  // } = useFetch("http://localhost:8000/blogs/");

  return (
    <div className="home">
      <Navbar />
      <BlogList blog={blog} title={"jkjdkjfd"} slogan={"All Blogs!"} />
      {/* {error && <div>{error}</div>}
      {isPending && <div>The Truth is out...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />} */}
      {/* {blogs && (
				<BlogList
					blogs={blogs.filter(
						blog =>
							blog.author ===
							'Mausan'
					)}
					title="Mausan's Blogs!"
					slogan='*Top Contributor*'
				/>
			)} */}
    </div>
  );
};

export default Home;
