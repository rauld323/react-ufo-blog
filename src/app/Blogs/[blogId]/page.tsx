"use client";
import { useParams } from "next/navigation";
import styled from "styled-components";
import { useBlogDetails } from "../../hooks/blog-hook";
import ReactImageMagnify from "react-image-magnify";
import { StyledButton } from "../../contact/contactForm/ContactForm";

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
        <StyledBlogArticle>
          {/* <div>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: false,
                  width: 400,
                  height: 500,
                  src: "http://localhost:8000/" + blogDetails.blogImage,
                },
                largeImage: {
                  src: "http://localhost:8000/" + blogDetails.blogImage,
                  width: 900,
                  height: 1200,
                  isHintEnabled: true,
                },
              }}
            />
          </div> */}
          <StyledBlogText>
            <StyledName>{blogDetails.name}</StyledName>
            <p>Written by {blogDetails.author}</p>
            <StyledContent>{blogDetails.content}</StyledContent>
            <StyledButtonSection>
              <StyledButton disabled={false}>Purchase</StyledButton>
            </StyledButtonSection>
          </StyledBlogText>
        </StyledBlogArticle>
      )}
      {isError && <>Crap, we are having issues</>}
    </div>
  );
}

const StyledBlogArticle = styled.article`
  display: flex;
  padding: 20px 20px;
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

const StyledButtonSection = styled.div`
  display: flex;
  justify-content: center;
`;
