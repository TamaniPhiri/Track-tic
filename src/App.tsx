import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "lucide-react";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  );
}

export default App;
