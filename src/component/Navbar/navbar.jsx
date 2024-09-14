import { Link } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
  const [th, setTh] = useState(false);

  const theme = () => {
    if (document.body.style.backgroundColor === "black") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setTh(true);
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setTh(false);
    }
  };
  return (
    <div>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/about"> AboutUs</Link>
        </li>
        <li>
          <Link to="/contact"> ContactUs</Link>
        </li>
        <li>
          <Link to="/help"> Help</Link>
        </li>
        <li>
          <Link to="/signUp">SignUp</Link>
        </li>
        <li>
          <Link to="/signIn">SignIn</Link>
        </li>
        <span onClick={theme}>{th ? <CiDark /> : <CiLight />}</span>
      </ul>
      <div></div>
    </div>
  );
};

export default Navbar;
