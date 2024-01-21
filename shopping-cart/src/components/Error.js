import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>Error Page Not found</h1>
      <Link to="/">
        <p>Back to Home page</p>
      </Link>
    </>
  );
};

export default Error;
