import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./SignUp";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import AddCourse from "./AddCourse";

// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {
  return (
    <div className="outer-container">
      <AppBar></AppBar>
      <Router>
        <Routes>
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
