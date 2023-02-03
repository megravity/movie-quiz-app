import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import NavLayout from "./pages/NavLayout";
import GamePage from "./pages/GamePage";
import "./styles/App.css";
import HelpPage from "./pages/HelpPage";
import End from "./components/End/End";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Home />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="game" element={<GamePage />} />
          <Route path="end" element={<End />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
