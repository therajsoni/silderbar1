// import Login from "./component/login/Login";
// import SignUp from "./component/signUp/signUp";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Contact from "./pages/contactUs/Contact";
// import Help from "./pages/Help/Help";

import Index from "./sildebar";

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router> */}
      <Index/>
    </>
  );
}

export default App;
