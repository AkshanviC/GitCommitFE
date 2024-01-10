import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/repositories" element={<Home />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
