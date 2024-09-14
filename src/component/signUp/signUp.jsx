import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubMit = async () => {
    const post = await axios.post(
      "",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (post.status(201)) {
      alert("User created successfully");
      setEmail("");
      setPassword("");
    } else {
      alert(
        `should be email not valid otherwise you have an account , ensure user have  account then` +
          +`login`
      );
    }
  };

  return (
    <div>
      <h1>SignUp</h1>
      <p>
        if you alerady have account then{" "}
        <span>
          <Link to="/signIn">signIn</Link>
        </span>{" "}
      </p>
      <form onSubmit={handleSubMit}>
        <div>
          <div>
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              type="email"
              value={email}
              name="email"
            />
          </div>
          <div>
            <label>PASSWORD</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter PASSWORD"
              name="password"
              type="password"
              value={password}
            />
          </div>
          <buttom onClick={handleSubMit} type="button">
            Submit
          </buttom>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
