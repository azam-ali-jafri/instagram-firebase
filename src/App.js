import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import NotFound from "./pages/notfound";
import Dashboard from "./pages/dashboard";
import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth();
  console.log(auth.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
