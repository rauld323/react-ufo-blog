import axios from "axios";
import { ContactFormValue } from "../contact/formSchema/contactFormSchema";

export interface Blog {
  id: string;
  title: string;
  body: string;
  author: string;
  name: string;
  blogId: string;
}

const API_BASE_URL = "http://localhost:8000";

export const formApiKey = process.env.CONTACT_FORM_API_KEY;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await axiosInstance.get("/blogs");
    return response.data as Blog[];
  } catch (error) {
    throw new Error("Error fetching blogs: " + error);
  }
};

export const fetchBlogDetails = async (blogId: string): Promise<Blog> => {
  try {
    const response = await axiosInstance.get(`/blogs/${blogId}`);
    return response.data as Blog;
  } catch (error) {
    throw new Error("Error fetching blog details: " + error);
  }
};

export const postContactForm = async (formData: ContactFormValue) => {
  const formDatas = { ...formData, access_key: formApiKey };
  try {
    const response = await axios.post(
      "https://api.web3forms.com/submit",
      formDatas
    );
    console.log("Submission response:", response);
    return response.data;
  } catch (error) {
    console.error("Error submitting the form:", error);
    throw error;
  }
};
