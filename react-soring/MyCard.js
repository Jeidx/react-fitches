import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
// name email username company.name
const MyCard = ({name, email, username, company}) => {
    return (
        <Card sx={{ minWidth: 275 , m: 1.5}}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {email}
            </Typography>
            <Typography variant="h5" component="div">
              {username}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
             {company.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      );
}

export default MyCard