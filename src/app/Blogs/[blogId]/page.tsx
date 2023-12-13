"use client";
import { useParams } from "next/navigation";
import { useBlogDetails } from "../../hooks/blog-hook";

export default function BlogDetails() {
  const { blogId } = useParams();
  const {
    data: blogDetails,
    isFetching,
    isError,
  } = useBlogDetails(blogId as string);

  return (
    <div>
      {isFetching && <div>Loading...</div>}
      {blogDetails && (
        <article>
          <img
            src={"http://localhost:8000/" + blogDetails.blogImage}
            alt="blogImage"
          />
          <h2>{blogDetails.name}</h2>
          <p>Written by {blogDetails.author}</p>
          <div>{blogDetails.content}</div>
        </article>
      )}
      {isError && <>Crap, we are having issues</>}
    </div>
  );
}
