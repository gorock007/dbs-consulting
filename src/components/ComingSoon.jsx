import React from 'react'
import styled from 'styled-components';
import image from '../images/comingsoon.jpg'

const Container = styled.div`
    background-image: url(${image});
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    background-size: cover;
    background-position: center;
`
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
const Title = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
const Desc = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width:480px){
        font-size: 18px;
    }
`
const ComingSoon = () => {
  return (
    <Container>
        <Wrapper>
            <Overlay/>
        </Wrapper>
        <Content>
            <Title>Great Things Coming Soon</Title>
            <Desc>Stay tuned and come back to this page agin later to find out whats cooking.</Desc>
        </Content>
    </Container>
  )
}

export default ComingSoon