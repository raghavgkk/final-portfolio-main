import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const ProjectItemForVideo = ({ imageUrl, title, description, routerLink, target }) => {
  const handleClick = (event) => {
    if (target === '_blank') {
      // Prevent default navigation for internal links
      event.preventDefault();
      // Open the provided routerLink in a new tab
      window.open(routerLink, '_blank');
    }
    // For internal links, the Link component will handle the navigation
  };

  return (
    <Card
      sx={{
        width: 312,
        height: 460,
        margin: '10px',
        marginBottom: '25px',
        background: 'black',
        '@media screen and (max-width: 650px)': {
          width: '68%',
          height: 'auto',
          margin: '4px',
        },
      }}
    >
      <CardActionArea
        component={Link}
        to={routerLink}
        onClick={handleClick} // Call the custom handleClick function
        target={target} // Set the target attribute for the anchor tag
      >
        <CardMedia
          component="img"
          sx={{
            height: {
              xs: '300px',
              sm: '350px',
              md: '400px',
            },
            objectFit: 'fill',
          }}
          src={imageUrl}
          alt="green iguana"
        />
        <CardContent sx={{ background: 'black', fontSize: '22px', paddingLeft: '0px' }}>
          <Typography fontSize="20px" padding={0} fontWeight={800} fontFamily="Poppins" color="#FFFFFF">
            {title}
          </Typography>
          <Typography variant="body2" fontSize="12px" fontWeight={800} fontFamily="Poppins" color="#FFFFFF">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectItemForVideo;