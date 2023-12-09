import { useQuery } from "react-query";
import { Blog, fetchBlogDetails, fetchBlogs } from "../services/blog-service";

export const useBlogs = () => {
  return useQuery("blogs", fetchBlogs);
};

export const useBlogDetails = (blogId: string) => {
  return useQuery<Blog, Error>(["blog-details", blogId], () =>
    fetchBlogDetails(blogId)
  );
};
