import * as React from "react";
import Box from "@mui/material/Box";
import image1 from "./image/detective.png"
import image2 from "./image/home2.png"
import image3 from "./image/home5.jpg"
import "./Home.css"
import Navbar from "./Navbar";

export default function Home() {
   
    return (
        <>
        <Box>
            <Navbar/>

            <Box className="Home">
                <Box className="first-div">
                    <div className="heading1-div">
                        <h3 className="home-heading-1">Looking for a one-stop website to stay updated with the latest tech trends and
                            advancements  </h3>
                            <span className="que-mark">?</span>
                    </div>
                    <img src={image1} className="Home-img1 home-img" />
                </Box>
                <Box className="second-div">
                    <img src={image2} className="Home-img2 home-img" />
                    <div className="heading2-div">
                        <h3 className="home-heading-2">Look no further! Our website offers a comprehensive range of
                            valuable insights and updates that will help you navigate your technical journey with ease.
                            From cutting-edge innovations to industry news and expert opinions, we've got you covered.
                            </h3>
                    </div>

                </Box>
                <Box className="third-div">
                    <img src={image3} className="Home-img3 " />
                    <div className="heading3-div">
                        <h3 className="home-heading-3"> Join our community today and stay ahead of the curve!!
                            </h3>
                    </div>
                    <div className="login-register">
                        <button className="button">Login</button>
                        <button className="button">Register</button>
                    </div>
                </Box>
               
            </Box>
            <Box className="footer">
                   <div className="footer1">
                    <p className="homeFooter-para">Made with 
                    <img src="https://media.giphy.com/media/LpDmM2wSt6Hm5fKJVa/giphy.gif" alt="heart" className="heart-giphy"/>By ARG</p>
                   </div>
                 
                </Box>
                </Box>
        </>
    );
}


