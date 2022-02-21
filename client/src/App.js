import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
  
    <Route path="/" exact element={<Home />} />
    <Route path="/login" exact element={<Login />} />
    <Route path="/register" exact element={<Register />} />
    <Route path="/profile/:username"  element={<Profile />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
