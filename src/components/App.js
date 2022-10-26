import React from "react";
import {Route,Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Jobs from "./Jobs";
import Profile from "./Profile";
import Apply from "./Apply";
import Admin from "./Admin";
import PostJob from "./PostJob";
import AdminLogin from "./AdminLogin";
import Logout from "./Logout";


function App() {
  return (
    <div>

      <Navbar />
      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/postJob" element={<PostJob />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
