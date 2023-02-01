import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Help from "./pages/Help";
import Home from "./pages/Home";
import NavLayout from "./pages/NavLayout";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Home />} />
          <Route path="help" element={<Help />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
