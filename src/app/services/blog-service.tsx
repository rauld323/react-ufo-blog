import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchBlogs = async () => {
  try {
    const response = await axiosInstance.get("/blogs");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching blogs: " + error.message);
  }
};
