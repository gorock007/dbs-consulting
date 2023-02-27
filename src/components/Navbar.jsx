import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link as linkR} from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll';

const Container = styled.div`
    background-color: ${({ scrollNav }) => (scrollNav ? '#000' : 'rgba(255, 255, 255, 0)')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width:960px){
        transition: 0.8s all ease;
  }
`;

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
const Logo = styled(linkR)`
    color: #fff;
    justify-self: flex-start;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
`
const HamburgerIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
const Menu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`
const MenuItem = styled(linkR)`
    height: 80px;
    font-size: 15px;
    cursor: pointer;
    margin-left: 25px;
    text-decoration: none;
`
const MenuLinks = styled(linkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &.active{
        border-bottom: 3px solid #00A6FB;
    }

`
const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () =>{
        scroll.scrollToTop()
    }
  return (
    <Container scrollNav={scrollNav} >
        <Nav>               
            <Logo to='/' onClick={toggleHome}>DBS Business Consulting.</Logo>
            <HamburgerIcon onClick={toggle}>
                <FaBars />
            </HamburgerIcon>
            <Menu>
                <MenuItem>
                      <MenuLinks to='/about' onClick={toggleHome}
                    >About</MenuLinks>
                </MenuItem>
                <MenuItem>
                    <MenuLinks to='/about' onClick={toggleHome}
                        // smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Why Us</MenuLinks>
                </MenuItem>
                <MenuItem>
                    <MenuLinks to='/services' onClick={toggleHome}
                      >Services</MenuLinks>
                </MenuItem>
                <MenuItem>
                    <MenuLinks to='/blog' onClick={toggleHome}>Blog</MenuLinks>
                </MenuItem>
                <MenuItem>
                    <MenuLinks to='/contact' onClick={toggleHome}>Contact</MenuLinks>
                </MenuItem>
            </Menu>
        </Nav>

    </Container>
  )
}

export default Navbar