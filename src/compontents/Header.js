import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice'
import {useSelector} from 'react-redux'


function Header() {
    const [BurgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)

    return (
        <Container>
            <Logo>
                <a><img src='https://raw.githubusercontent.com/swwayam/tesla/f7826bd2d32c5edf1401db6485a57fc10537e82b/public/images/logo.svg' alt=''/></a>
            </Logo>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a key={index} href="#">{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
                <CustomMenu onClick={() =>setBurgerStatus(true)  }/>
            </RightMenu>
            <BurgerNav showB={BurgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() =>setBurgerStatus(false)  } />
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                   <li><a key={index} href="#">{car}</a></li>
                ))}
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-in</a></li>
                <li><a href='#'>Cybertruck</a></li>
                <li><a href='#'>Roadaster</a></li>
                <li><a href='#'>Powerwall</a></li>
                <li><a href='#'>Charging</a></li>
                <li><a href='#'>Support</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;
    z-index:10;
`

const Logo = styled.div`
    padding-right:40px;
`

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    
    a{
        font-size:14px;
        font-weight: 600;
        text-transform:uppercase;
        padding: 0 20px;
        flex-wrap: nowrap;
    }

    @media(max-width: 1020px){
        display:none;
    }
`

const RightMenu = styled.div`
    display:flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform:uppercase;
        margin-right:10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor:pointer;

`

const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    z-index:100;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction: column;
    text-align:start;
    transform: ${props => props.showB ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;

    li{
        padding:15px 0;
    }

    a{
        font-size:14px;
        font-weight: 400;
    }
`

const CloseWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
    cursor:pointer;
`

const CustomClose = styled(CloseIcon)`

`