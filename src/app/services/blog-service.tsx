import axios from "axios";
import { useParams } from "next/navigation";

interface Blog {
  id: string;
  title: string;
  body: string;
  author: string;
  name: string;
}

const API_BASE_URL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await axiosInstance.get("/blogs");
    return response.data as Blog[];
  } catch (error) {
    throw new Error("Error fetching blogs: " + error.message);
  }
};

export const fetchBlogDetails = async (): Promise<Blog[]> => {
  const { blogId } = useParams();

  try {
    const response = await axiosInstance.get("/blogs/" + blogId);
    return response.data as Blog[];
  } catch (error) {
    throw new Error("Error fetching blogs: " + error.message);
  }
};
