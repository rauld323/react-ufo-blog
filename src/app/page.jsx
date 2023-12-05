// import useFetch from "../components/useFetch";
import BlogList from "../components/Bloglist";
const Home = () => {
  // const {
  //   data: blogs,
  //   isPending,
  //   error,
  // } = useFetch("http://localhost:8000/blogs/");

  return (
    <div className="home">
      HELLo
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
