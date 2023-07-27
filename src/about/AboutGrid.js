import * as React from 'react';
import Box from '@mui/material/Box';
import { CardMedia } from '@mui/material';
import profile1 from "../assets/images/profile1.jpg"
import profile2 from "../assets/images/profile2.jpg"
import profile3 from "../assets/images/profile3.jpg"

const AboutGrid = () => {
  return (
    <Box sx={{ height: '848px', overflowY: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', '@media screen and (max-width: 850px)':{ flexDirection:"column", height: 'auto', overflowY: 'auto' , overflowX:"auto"}}}>
      
      <Box sx={{ '@media screen and (max-width: 850px)': { width: 'calc(100% - 40px)', order: 1} }}>
        <CardMedia
          component="img"
          sx={{
            height:"320px",
            width:"230px",
           
            borderRadius:2,
            objectFit: 'cover',
            objectPosition: 'top',
            '@media screen and (max-width: 850px)': {
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              objectPosition: 'top'
            }
          }}
          src={profile1}
          alt="green iguana"
        />
      </Box>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', '@media screen and (max-width: 850px)':{ flexDirection: "row", width: 'calc(100% - 35px)', order: 2}}}>
        
        <CardMedia
          component="img"
          sx={{
            height:"320px",
            width:"230px",
            margin:0.5,
            borderRadius:2,
            '@media screen and (max-width: 768px)': {
              width: 'calc(50%-10px )',
              height: '30vh',
            //   marginRight: '30px'
            }
          }}
          src={profile2}
          alt="green iguana"
        />
        
        <CardMedia
          component="img"
          sx={{
            height:"320px",
            // width:"202px",
            margin:0.5,
            borderRadius:2,
            '@media screen and (max-width: 768px)': {
              width: 'calc(50% +10px )',
              height: '30vh'
            }
          }}
          src={profile3}
          alt="green iguana"
        />
      </Box>
      
    </Box>
  );
};

export default AboutGrid;
