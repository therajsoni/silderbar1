import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
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
      alert("User login successfully");
      setEmail("");
      setPassword("");
    } else {
      alert(
        "should be password or email is incorrect otherwise user not assists"
      );
    }
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <p>
          if you have not account then{" "}
          <span>
            <Link to="/signUp">signUp</Link>
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
          </div>
          <buttom onClick={handleSubMit} type="button">
            Submit
          </buttom>
        </form>
      </div>
    </div>
  );
};

export default Login;
