import React from 'react'
import styled from 'styled-components'
import Icon1 from '../images/s1.svg'
import Icon2 from '../images/s2.svg'
import Icon3 from '../images/s3.svg'

const Container = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    @media screen and (max-width: 768px){
        height: 1100px;
    }
    @media screen and (max-width: 480px){
        height: 1400px;
    }
`
const Wrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
const Card = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.3s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }
`
const Icon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;  
`
const Top = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
       
    }
`
const Title = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`
const Subtitle = styled.p`
    font-size: 1rem;
    text-align: center;
`

const Services = () => {
  return (
    <Container id='services'>
        <Top>Our Services</Top>
        <Wrapper>
            <Card>
                <Icon src={Icon1} />
                <Title>Business Consultant</Title>
                <Subtitle>Running a business can be challenging, but with the right guidance, it can also be incredibly rewarding.
                    Our team at DBS Business Consulting has the experience and knowledge to help you navigate the complexities of the business world.
                </Subtitle>
            </Card>
            <Card>
                <Icon src={Icon2} />
                <Title>Project Management Solution</Title>
                <Subtitle>Effective Industrial Project Management is key to success of any business.
                    At DBS Business Consulting, we have the expertise to help you streamline your operations and
                    achive your industrial project goals.
                </Subtitle>
            </Card>
            <Card>
                <Icon src={Icon3} />
                <Title>Training and Coaching</Title>
                <Subtitle>We offer comprehensive training and coaching programs to help businesses reach their full potential.
                    Our team of experienced consultants is dedicted to helping clients achive their goals through
                    customized solutions that address their unique needs and challenges.
                </Subtitle>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Services