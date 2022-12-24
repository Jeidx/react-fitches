import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../Styled/GlobalStyled';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';
import AvatarCash from './Avatar/AvatarCash';

const Header = ({counter}) => {
  return (
    <HeaderMenu>
        <Wrapper>
            <WrapContent>
                <ButtonGroup >
                    <Link style={{padding:"5px 15px",color: "#000", textDecoration:"none", backgroundColor:"#fff"}} to="/">Main</Link>
                </ButtonGroup>
                <ButtonGroup aria-label="outlined primary button group">
                    <AvatarCash counter={counter} />
                </ButtonGroup>
            </WrapContent>
        </Wrapper>
    </HeaderMenu>
  )
}

const HeaderMenu = styled.div`
    position:sticky;
    left: 0;
    top:0;
    z-index:2;
    background-color: seagreen;
    height: auto;
    padding:15px 5px;
    margin-bottom: 5px;
`
const WrapContent = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`


export default Header