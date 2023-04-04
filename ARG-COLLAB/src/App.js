// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Registration from "./components/Register";
import Coding from "./pages/Coding";
import Academics from "./pages/Academics";
import Internship from "./pages/Internship";
import Job from "./pages/Job";
import Opensource from "./pages/Opensource";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.css";
// import { Home } from "@mui/icons-material";
import Main from "./components/Main";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Navbar from "./components/Navbar";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       exact
    //       element={
    //         <>
    //           {/* <Header /> */}
    //           <Registration />
    //         </>
    //       }
    //     />
    //   </Routes>

    //   <Routes>
    //     <Route
    //       path="/registration"
    //       exact
    //       element={
    //         <>
    //           {/* <Header /> */}
    //           <Registration />
    //         </>
    //       }
    //     />
    //   </Routes>

    //   <Routes>
    //     <Route
    //       path="/home"
    //       exact
    //       element={
    //         <>
    //           {/* <Header /> */}
    //           <Main />
    //         </>
    //       }
    //     />
    //   </Routes>
    //   <Routes>
    //     <Route
    //       path="/login"
    //       exact
    //       element={
    //         <>
    //           {/* <Header /> */}
    //           <Login />
    //         </>
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="" element={<Registration />} />
          <Route
            path="home"
            index
            element={
              <ProtectedRoute>
                <Navbar />
                <Main />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="home/coding" element={<Coding />} />
          <Route path="home/internship" element={<Academics />} />
          <Route path="home/academics" element={<Internship />} />
          <Route path="home/job" element={<Opensource />} />
          <Route path="home/opensource" element={<Job />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
