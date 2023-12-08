import { useQuery } from "react-query";
import { fetchBlogDetails, fetchBlogs } from "../services/blog-service";

export const useBlogs = () => {
  return useQuery("blogs", fetchBlogs);
};

export const getBlogDetails = () => {
  return useQuery("blog-details", fetchBlogDetails);
};
