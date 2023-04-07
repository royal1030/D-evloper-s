import React from "react";
import Cards from "./Cards";
import { Box, Grid } from "@mui/material";
import Img0 from "../Images/acadmics.jpg";
import Img1 from "../Images/coding.jpg";
import Img2 from "../Images/internship.jpeg";
import Img3 from "../Images/job.jpg";
import Img4 from "../Images/openSource.jpg";
import Basicinfo from "./Basicinfo.json"
// import backgroundImage from "./Home/image/home5.jpg"
// import Img5 from "../Images/openSource.jpg";

// const info = Basicinfo;
const imagesArr = [Img0, Img1, Img2, Img3, Img4];
const Main = () => {
  return (
    <>
      <Box sx={{
        backgroundColor: "#DDF7F3",
          py: 4,
        }}>
      {/* <Grid container spacing={4}>
          {[...Array(5)].map((_, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <div className="p-2 m-2 w-full h-screen bg-[#c9cbbe] flex items-center justify-center">
                <Cards img={imagesArr[index]} info={Basicinfo[index]}/>
              </div>
            </Grid>
          ))}
        </Grid> */}
        <Grid container spacing={3}>
        {/* First row */}
        {imagesArr.slice(0, 3).map((image, index) => (
          <Grid key={index} item xs={12} sm={4}>
            <Cards img={image} info={Basicinfo[index]} />
          </Grid>
        ))}
        {/* Second row */}
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
          style={{ margin: "0 40px" }}
        >
          {[...Array(2)].map((_, index) => (
            <Grid key={index} item xs={12} sm={6}>
              <Cards img={imagesArr[index + 3]} info={Basicinfo[index + 3]} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Box>
      
    </>
  );
};

export default Main;

// import React from "react";
// import { Grid } from "@mui/material";
// import Cards from "./Cards";

// const GridComponent = () => {
//   return (
//     <Grid container spacing={4}>
//       {[...Array(6)].map((_, index) => (
//         <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
//           <div className="p-2 m-2 w-full h-screen bg-[#c9cbbe] flex items-center justify-center">
//             <Cards />
//           </div>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default GridComponent;