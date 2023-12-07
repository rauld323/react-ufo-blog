import Link from "next/link";
import { FC } from "react";

interface BlogProps {
  name?: string;
  body?: string;
  author: string;
  blogId?: string;
  title?: string;
  slogan?: string;
}

const BlogList: FC<BlogProps> = ({
  name,
  body,
  author,
  blogId,
  title,
  slogan,
}) => {
  return (
    <div className="blog-list">
      <h2>
        {title} {slogan}
      </h2>
      <div className="blog-preview" key={blogId}>
        <Link href={`/blogs/${blogId}`}>
          <h2>{name}</h2>
          <p>Written by {author}</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
