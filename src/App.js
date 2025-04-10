import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import './App.css'
import Details from "./pages/dashboard/details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}

export default App;
