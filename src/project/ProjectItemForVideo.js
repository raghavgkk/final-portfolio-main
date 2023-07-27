import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import TouchRipple from '@mui/material/ButtonBase/TouchRipple';
import { Link } from 'react-router-dom';


const ProjectItemForVideo = ({imageUrl,title,description,routerLink}) => {
  return (
    <Card sx={{ width: 312, height:460 , margin:"10px" , marginBottom:"25px",  background:"black" ,'@media screen and (max-width: 650px)': {
        width: '68%', // Reduce width for mobile view
        height: 'auto', // Set height to auto for mobile view to maintain aspect ratio
        margin: "4px", // Adjust margin for mobile view
      }}}>    <CardActionArea LinkComponent={Link} to={routerLink}>
      <CardMedia
    //   sx={{autoPlay:"true"}}
        component="img"
        sx={{
        
          height: {
            xs: '300px', // Custom height for mobile view (adjust as needed)
            sm: '350px', // Custom height for tablet view (adjust as needed)
            md: '400px', // Custom height for desktop view (adjust as needed)
          },
          objectFit:"fill"

        }}
        
        src={imageUrl}
        alt="green iguana"
        // controls
      />
      <CardContent sx={{background:"black", fontSize :"22px" , paddingLeft:"0px"}  } >
        <Typography fontSize={"20px"} padding={0} fontWeight={800} fontFamily={"Poppins"}  color="#FFFFFF">
         {title}
        </Typography>
        <Typography variant="body2" fontSize={"12px"} fontWeight={800} fontFamily={"Poppins"} color="#FFFFFF">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default ProjectItemForVideo