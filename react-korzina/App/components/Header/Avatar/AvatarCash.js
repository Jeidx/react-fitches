import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import { Link } from "react-router-dom";

function AvatarCash({counter}) {
    return (
      <Stack direction="row" spacing={2}>
         <Link to="korzina" style={{borderRadius:"50%", position:"relative"}}>
            <Avatar/>
            <Counter>
                {counter}
            </Counter>
         </Link>
      </Stack>
    );
}


const Counter = styled.span`
    position: absolute;
    right: -5px;
    top: -5px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`



export default AvatarCash