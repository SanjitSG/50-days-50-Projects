import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>Page not found..</h2>
      <p>
        Return to <Link to="/">Home Page</Link>
      </p>
    </div>
  );
};

export default Error;
