import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateQR from "./pages/CreateQR";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateQR />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;