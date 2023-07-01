import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div>
        <Link className="container">
          <h1>Workout Buddy</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
