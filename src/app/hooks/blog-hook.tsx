import { useQuery } from "react-query";
import { fetchBlogs } from "../services/blog-service";

const useBlogs = () => {
  return useQuery("blogs", fetchBlogs);
};

export default useBlogs;
