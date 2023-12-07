"use client";
import Link from "next/link";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNavBar>
      <Link href="/">
        <h1>The UFO Blog</h1>
      </Link>

      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/create">New Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </StyledNavBar>
  );
};

export default Navbar;

const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  justify-content: space-between;
`;
