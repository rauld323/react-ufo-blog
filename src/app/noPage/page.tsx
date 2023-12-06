import Link from "next/link";

const NoPage = () => {
  return (
    <div className="noPage">
      <h2>The truth is not really other there....</h2>
      <p>Seems like the FBI got this page before you!</p>
      <Link href="/">Go back to safety, quick!</Link>
    </div>
  );
};

export default NoPage;
