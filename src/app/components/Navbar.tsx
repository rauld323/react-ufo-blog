"use client";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const Navbar: FC = () => {
  return (
    <StyledNavBar>
      <Link href="/">
        <h1>The UFO Blog</h1>
      </Link>

      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
        {/* <Link href="/create">New Blog</Link> */}
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </StyledNavBar>
  );
};

export default Navbar;

const StyledNavBar = styled.nav`
  padding: 20px;
  display: flex;
  align-items: center;
  min-width: 600px;
  margin: 0 auto;
  border-bottom: 1px solid #f2f2f2;
  justify-content: space-between;
  height: 75px;

  h1 {
    color: #316e83;
  }

  .links {
    display: flex;
  }

  a {
    margin-left: 16px;
    text-decoration: none;
    padding: 6px;
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }

  a:hover {
    color: #316e83;
  }
`;
