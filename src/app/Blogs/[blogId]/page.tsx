"use client";
import { useParams } from "next/navigation";
import styled from "styled-components";
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
          <StyledImage
            src={"http://localhost:8000/" + blogDetails.blogImage}
            alt="blogImage"
          />
          <StyledBlogText>
            <StyledName>{blogDetails.name}</StyledName>
            <p>Written by {blogDetails.author}</p>
            <StyledContent>{blogDetails.content}</StyledContent>
          </StyledBlogText>
        </article>
      )}
      {isError && <>Crap, we are having issues</>}
    </div>
  );
}

const StyledImage = styled.img`
  margin-left: 15%;
  margin-bottom: 10px;
  width: 70%;
`;

const StyledName = styled.h2`
  font-size: 20px;
  color: #f1356d;
  margin-bottom: 10px;
`;

const StyledContent = styled.div`
  margin: 20px 0;
`;

const StyledBlogText = styled.div`
  margin: 0 20px;
`;
