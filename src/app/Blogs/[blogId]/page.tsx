"use client";
import { useParams } from "next/navigation";
import { useBlogDetails } from "../../hooks/blog-hook";

export default function BlogDetails() {
  const { blogId } = useParams();
  const { data: blogDetails } = useBlogDetails(blogId as string);
  console.log(blogDetails);
  return (
    <div>
      <>
        <h2>{blogDetails?.title}</h2>
        <div className="blog-preview">
          <h2>{blogDetails?.name}</h2>
          <article>{blogDetails?.body}</article>
          <p>Written by {blogDetails?.author} </p>
        </div>
      </>
    </div>
  );
}
