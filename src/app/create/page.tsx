"use client";
import { useState } from "react";
import styled from "styled-components";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [picture, setPicture] = useState("");
  const [author, setAuthor] = useState("Maussan");

  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    //Prevents page from loading
    e.preventDefault();
    const blog = { title, body, picture, author };

    setIsPending(true);

    // This fetches the DB and declares what kind of request I want to make
    // and then the stringify method creates a json object. ID property will be automatically created
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
    });
  };

  return (
    <StyledContainer>
      <h1>Create Content</h1>
      <StyledForm onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginBottom: "20px" }}
        />

        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{ marginBottom: "20px" }}
        />
        <label>Blog Picture URL :</label>
        <input
          type="text"
          required
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
          style={{ marginBottom: "20px" }}
        />

        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{ marginBottom: "20px" }}
        >
          <option value="Anthony">Tony</option>
          <option value="Smude">Smuddge</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding to blog...</button>}
      </StyledForm>
    </StyledContainer>
  );
};

export default Create;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 70%;
  border: solid black 1px;
  border-radius: 10px;
  padding: 20px;
`;
