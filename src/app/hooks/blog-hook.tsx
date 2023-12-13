import { useMutation, useQuery } from "react-query";
import { ContactFormValue } from "../contact/formSchema/contactFormSchema";
import {
  Blog,
  fetchBlogDetails,
  fetchBlogs,
  postContactForm,
} from "../services/blog-service";

export const useBlogs = () => {
  return useQuery("blogs", fetchBlogs);
};

export const useBlogDetails = (blogId: string) => {
  return useQuery<Blog, Error>(["blog-details", blogId], () =>
    fetchBlogDetails(blogId)
  );
};

export const useContactForm = () => {
  const contactFormMutation = useMutation((formData: ContactFormValue) =>
    postContactForm(formData)
  );

  return contactFormMutation;
};
