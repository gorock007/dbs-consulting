import React, {useState} from 'react'
import styled from 'styled-components'
import Video from '../videos/bg2.mp4'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Container =styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`;
const Wrapper =styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; 
`;
const Background = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover ;
    object-fit: cover;
`
const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
   
`
const Content = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const HeroDesc = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width:768px){
        font-size: 40px;
    }
    @media screen and (max-width:480px){
        font-size: 32px;
    }
`
const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width:768px){
        font-size: 24px;
    }
    @media screen and (max-width:480px){
        font-size: 18px;
    }
`
const ButtonWrapper = styled.div`
    margin-top:32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Button = styled(Link)`
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    border: none;
    outline: none;
    border-radius: 50px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    box-shadow: 0px 5px 30px rgba(0, 100, 148, 0.5);
    background-image: linear-gradient(25deg, #2427c6, #334ccd, #386cd4, #338cdb);
    transition: all 0.4s ease-in-out;
     &:hover{
        transform: translateX(8px);
    }

`
const ArrowForward =styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
const Hero = () => {
    const [hover, setHover] = useState(false)
    const onHover =()=>{
        setHover(!hover)
    }
  return (
    <Container>
        <Wrapper>
           <Background autoPlay loop muted src={Video} type='video/mp4'></Background>
           <Overlay/>
        </Wrapper>
        <Content>
            <HeroDesc>Taking Your Business to the Next Level</HeroDesc>
            <HeroP>Join us and find out about all the services 
                that we provide.
            </HeroP>
            <ButtonWrapper>
                <Button to='/about' onMouseEnter={onHover} onMouseLeave={onHover}>
                    About Us {hover? <ArrowForward/>:<ArrowRight/>}</Button>
            </ButtonWrapper>
        </Content>
    </Container>
  )
}

export default Hero