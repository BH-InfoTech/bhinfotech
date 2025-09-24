import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          {/* Define your routes here */}
          <Route path="/" exact>
            {/* Home Page */}
          </Route>
          <Route path="/about">{/* About Page */}</Route>
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
