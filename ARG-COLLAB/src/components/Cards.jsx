import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Cards({ img, info }) {
  const navigate = useNavigate();
  const [rotate, setrotate] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  console.log(img, "img");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (id) => {
    if (id === 1) {
      navigate("/home/academics");
    } else if (id === 2) {
      navigate("/home/coding");
    } else if (id === 3) {
      navigate("/home/internship");
    } else if (id === 4) {
      navigate("/home/job");
    } else {
      navigate("/home/Guide");
    }
  };

  // console.log(`Img${ind}`);
  // console.log(arr[ind]);
  console.log(info.text);

  return (
    <>
      <div
        className="p-3"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ height: 400 }}
      >
        {isHovered ? null : (
          <Box sx={{ boxShadow: 10 }}>
            {/* <motion.div
              animate={{ scale: 1, rotate: rotate ? 360 : 0 }}
              transition={{ type: "tween", duration: 1.6 }}
              onClick={() => setrotate(!rotate)}
              // initial={{ scale: 0.7 }}
            > */}
            {/* <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }} image={img} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card> */}
            <Box sx={{ boxShadow: 3 }}>
              <Card sx={{ maxWidth: 700 }}>
                <CardMedia
                  component="img"
                  height={345}
                  // image={img}
                  src={`${img}`}
                  alt="Card image"
                />
              </Card>
            </Box>
            {/* </motion.div> */}
          </Box>
        )}

        {!isHovered ? null : (
          <Card sx={{ maxWidth: 600 }}>
            <CardMedia component="img" sx={{ height: 188 }} src={`${img}`} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {info.text}
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Share</Button> */}
              <Button size="small" onClick={() => handleClick(info.id)}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        )}
      </div>
    </>
  );
}
