import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <h1>The UFO Blog</h1>
      </Link>

      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/create">New Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
