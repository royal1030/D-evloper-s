// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Registration from "./components/Register";
// <<<<<<< HEAD
// <<<<<<< HEAD
// // <<<<<<< HEAD
// =======
// <<<<<<< HEAD
// =======
// >>>>>>> a7daa45f21fb209b39f9f9c2887144192bd95892
// import Coding from "./pages/Coding";
// import Academics from "./pages/Academics";
// import Internship from "./pages/Internship";
// import Job from "./pages/Job";
// import Opensource from "./pages/Opensource";
// <<<<<<< HEADd
// =======
// <<<<<<< HEAD
// >>>>>>> ffd0d63252782945c113c0978662f3622a7e897b
// =======
// >>>>>>> a7daa45f21fb209b39f9f9c2887144192bd95892
import Coding from "./pages/coding";
// import Academics from "./pages/academics";
import Job from "./pages/job";
import Opensource from "./pages/opensource";
import Internship from "./pages/internship"

// <<<<<<< HEAD
// <<<<<<< HEAD
// // =======
// // import Coding from "./pages/coding";
// // >>>>>>> 4ff27f34cfcede3eb4824829ec1cd8bace2f21d9
// =======
// =======
// import Coding from "./pages/Coding";
// >>>>>>> 4ff27f34cfcede3eb4824829ec1cd8bace2f21d9
// >>>>>>> 82d9522b001f6affeaa2a3d65da25d482cdfb80b
// >>>>>>> ffd0d63252782945c113c0978662f3622a7e897b
// =======
// import Coding from "./pages/Coding";
// >>>>>>> a7daa45f21fb209b39f9f9c2887144192bd95892
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.css";
// import { Home } from "@mui/icons-material";
import Main from "./components/Main";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
// <<<<<<< HEAD
import Navbarmain from "./components/Navbarmain";
// import HomePage from "./components/Home/homePage"
import Home from "./components/Home/Home";
// =======
// import Navbar from "./components/Navbar";
// <<<<<<< HEAD
import Academics from "./pages/academics";
import NotesLayout from "./components/Guide/NotesLayout";
// >>>>>>> 4ff27f34cfcede3eb4824829ec1cd8bace2f21d9
// =======
// import Academics from "./pages/Academics";
// >>>>>>> a7daa45f21fb209b39f9f9c2887144192bd95892

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
          <Route path="" element={<Home />} />
          <Route
            path="home"
            index
            element={
              <ProtectedRoute>
                <Navbarmain />
                <Main />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="home/coding" element={<Coding />} />
{/* <<<<<<< HEAD */}
{/* <<<<<<< HEAD */}
          {/* <<<<<<< HEAD */}
{/* ======= */}
{/* <<<<<<< HEAD
=======

>>>>>>> a7daa45f21fb209b39f9f9c2887144192bd95892
          <Route path="home/internship" element={<Academics />} />
          <Route path="home/academics" element={<Internship />} />
          <Route path="home/job" element={<Opensource />} />
          <Route path="home/opensource" element={<Job />} />
<<<<<<< HEAD
======= */}
{/* <<<<<<< HEAD */}
{/* >>>>>>> ffd0d63252782945c113c0978662f3622a7e897b */}
          <Route path="home/internship" element={<Internship />} />
          <Route path="home/academics" element={<Academics />} />
          <Route path="home/job" element={<Job />} />
          <Route path="home/Guide" element={<NotesLayout />} />
{/* ======= */}
{/* ======= */}

{/* >>>>>>> a7daa45f21fb209b39f9f9c2887144192bd95892 */}
          {/* <Route path="home/internship" element={<Coding />} /> */}
          {/* <Route path="home/Academics" element={<Academics />} /> */}
          {/* <Route path="home/job" element={<Coding />} /> */}
          {/* <Route path="home/opensource" element={<Coding />} /> */}
{/* <<<<<<< HEAD */}
{/* <<<<<<< HEAD */}
{/* >>>>>>> 4ff27f34cfcede3eb4824829ec1cd8bace2f21d9 */}
{/* <Route path="home/Guide" element={<NotesLayout />} /> */}
{/* =======
>>>>>>> 4ff27f34cfcede3eb4824829ec1cd8bace2f21d9
>>>>>>> 82d9522b001f6affeaa2a3d65da25d482cdfb80b
>>>>>>> ffd0d63252782945c113c0978662f3622a7e897b */}
{/* ======= */}

{/* >>>>>>> a7daa45f21fb209b39f9f9c2887144192bd95892 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
