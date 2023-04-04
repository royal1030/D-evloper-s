import React from "react";
import Cards from "../components/Cards";
import { Box, Grid } from "@mui/material";
import Img0 from "../Images/acadmics.jpg";
import Img1 from "../Images/coding.jpg";
import Img2 from "../Images/internship.jpeg";
import Img3 from "../Images/job.jpg";
import Img4 from "../Images/openSource.jpg";
import Basicinfo from "../components/Basicinfo.json";

// const info = Basicinfo;
const imagesArr = [Img0, Img1, Img2, Img3, Img4];
const Main = () => {
  return (
    <>
      <Grid container spacing={4}>
        {[...Array(3)].map((_, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <div className="p-2 m-2 w-full h-screen bg-[#c9cbbe] flex items-center justify-center">
              <Cards img={imagesArr[index]} info={Basicinfo[index]} />
            </div>
          </Grid>
        ))}
      </Grid>
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
