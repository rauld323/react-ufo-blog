"use client";
import Link from "next/link";
import styled from "styled-components";
import { useBlogs } from "../hooks/blog-hook";

const Blogs = () => {
  const { data } = useBlogs();
  console.log(data);
  return (
    <div>
      {data?.map((blog, key) => (
        <StyledBlogList key={key}>
          <h2>{blog.title}</h2>
          <div className="blog-preview">
            <Link href={`/blogs/${blog.id}`}>
              <h2>{blog.name}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        </StyledBlogList>
      ))}
    </div>
  );
};

export default Blogs;

const StyledBlogList = styled.div`
  padding: 10px 16px;
  margin: 20px 0;
  border-bottom: 1px solid #fafafa;
  h2 {
    font-size: 20px;
    color: #316e83;
    margin-bottom: 8px;
  }
  a {
    text-decoration: none;
  }
  &:hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;
