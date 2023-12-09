import { useParams } from "next/navigation";
import { useBlogDetails } from "../hooks/blog-hook";

export default function BlogDetails() {
  const { blogId } = useParams();
  const { data: blogDetails } = useBlogDetails(blogId as string);
  console.log(blogDetails);

  return (
    <div>
      {
        <div>
          <h1>{blogDetails.name}</h1>
          {/* <p>{blogDetails.body}</p>
          <p>{blog.author}</p>
          <p>{blog.name}</p> */}
        </div>
      }
    </div>
  );
}
