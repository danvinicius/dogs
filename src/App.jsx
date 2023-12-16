import "./App.scss";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/home/Home";
import User from "./components/user/User";
import Login from "./components/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./context/UserContext";
import ProtectedRoute from "./components/helper/ProtectedRoute";
import Photo from "./components/photo/Photo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="user/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="foto/:id" element={<Photo />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
