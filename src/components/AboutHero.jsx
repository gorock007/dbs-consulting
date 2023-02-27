import React from 'react'
import styled from 'styled-components'
import image from '../images/abouthero1.jpg'

const Container = styled.div`
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    padding: 0 30px;
    height: 400px;
    position: relative;
    z-index: 1;
`;

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
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
const Desc = styled.h1`
    color: #fff;
    font-size: 50px;
    text-align: center;
    @media screen and (max-width:768px){
        font-size: 42px;
    }
    @media screen and (max-width:480px){
        font-size: 34px;
    }
`
const AboutHero = () => {
  return (
    
    <Container>
        <Wrapper>
            <Overlay />
        </Wrapper>
        <Content>
            <Desc>We are so good, you don't have to be'</Desc>
        </Content>
    </Container>
  )
}

export default AboutHero