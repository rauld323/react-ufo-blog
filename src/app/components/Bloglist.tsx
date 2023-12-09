import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

interface BlogProps {
  name: string;
  body: string;
  author: string;
  blogId: string;
  title: string;
}

const BlogList: FC<BlogProps> = ({ name, author, blogId, title }) => {
  return (
    <StyledBlogList>
      <h2>{title}</h2>
      <div className="blog-preview">
        <Link href={`/blogs/${blogId}`}>
          <h2>{name}</h2>
          <p>Written by {author}</p>
        </Link>
      </div>
    </StyledBlogList>
  );
};

export default BlogList;

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
