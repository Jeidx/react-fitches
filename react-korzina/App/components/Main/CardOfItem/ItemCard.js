import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';



const ItemCard = ({title, id, setTovar, tovar, bye, price}) => {

  const { ref, inView } = useInView({
    threshold: 1, 
    triggerOnce: true,
  });

  return (
    <Wrap ref={ref}>
      {inView ?
        <Card style={{paddingBottom: "40px" ,backgroundColor : "#fff", height : "100%" , position: "relative"}} sx={{ minWidth: 275 }}>
        <CardContent>
          <h3>{title}</h3>
        </CardContent>
        <CardActions  style={{position : "absolute" ,left: "0", bottom: "0"}}>
          {bye  ? 
            <Button onClick={() => 
              setTovar((prev) => 
              [...prev , {title: title, id: id , price:price}])
            } variant="contained" aria-label="outlined primary button" size="small">Bye</Button>
                :
            <Button onClick={() => {setTovar(tovar.filter(el => el.id !== id))}  
              
            }
                style={{backgroundColor: 'red'}} variant="contained" aria-label="outlined primary button" size="small">Delete</Button>
        }
             <span style={{marginLeft: '10px'}}>Price: {price}</span>
        </CardActions>
        </Card> 
        : 
        <Box style={{width: "300px",  height: "100%"}} >
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      }
        
    </Wrap>
  );
}

const Wrap = styled.div`
   margin: 5px;
   width: 300px;
   border: 2px solid #000;
`

export default ItemCard