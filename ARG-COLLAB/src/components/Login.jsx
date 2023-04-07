import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
import { getAuth } from "firebase/auth";
import { useState } from "react";
// import Navbar from "./Home/Navbar";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import ForgotPass from "./ForgotPass";
import Navbar from "./Navbarmain";

function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const [showForgotPass, setShowForgotPass] = useState(false);

  const handleForgotPassClick = () => {
    setShowForgotPass(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <>
      {/* <Navbar/> */}
      <form onSubmit={handleSubmit}>
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol col="12">
              <MDBCard
                className="bg-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "500px" }}
              >
                <MDBCardBody className="p-5 w-100 d-flex flex-column">
                  <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                  {/* <p className="text-white-50 mb-3">Please enter your login and password!</p> */}

                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                    name="email"
                    onChange={(e) => {
                      console.log(e.target.value);
                      localStorage.setItem(
                        "email",
                        JSON.stringify(e.target.value)
                      );
                    }}
                  />
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    name="password"
                  />

                  {/* <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' /> */}

                  <MDBBtn size="lg">LogIn</MDBBtn>
                </MDBCardBody>
              </MDBCard>
              {/* {err && alert("Something went wrong: ")} */}

              {err && <span>Something went wrong</span>}
              {/* {err && alert("Something went wrong: ")} */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </form>
    </>
  );
}

export default Login;
