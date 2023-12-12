import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import JatekokApp from "./pages/JatekokApp";
import LightOnApp from "./pages/LightOnApp";
import TictacToeApp from "./pages/TictacToeApp";
import Layout from "./Layout";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<JatekokApp />} />
          <Route path="tictactoe" element={<TictacToeApp />} />
          <Route path="lighton" element={<LightOnApp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
