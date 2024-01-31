import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap css import
import Home from "./Components/Home";
import Header from "./Components/Header";
import Error from "./Components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
