import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import NavLayout from "./pages/NavLayout";
import GamePage from "./pages/GamePage";
import "./styles/App.css";
import HelpPage from "./pages/HelpPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Home />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="game" element={<GamePage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
