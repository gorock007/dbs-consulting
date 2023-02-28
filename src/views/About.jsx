import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Team from '../components/Team';
import AboutHero from '../components/AboutHero';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';


const Container = styled.div`
  background-color: #fff;
  padding: 50px 0;

  /* @media screen and (max-width: 768px){
      padding: 20px 0;
  }
   */
  @media screen and (max-width: 768px){
        padding: 20px 0;
        
    }

`
const InfoWrapper = styled.div`
  display: grid;
  z-index:1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

`
const Row = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width:768px){
      grid-template-areas: 'col1' 'col2';
  }
`
const Column1= styled.div`
  grid-area: col1;
  display: flex;
  align-items: center;
`
const Title = styled.h1`
  font-size: 48px;
  color: #00a6fb;
  line-height: 1.2;
  font-weight: 600;
`;
const Column2 =styled.div`
  grid-area: col2;
  padding: 0 15px;
  margin-bottom: 15px;

  @media screen and (max-width:768px){
    padding-left: 0px;
    margin-right: 20px;
    margin-top: 10px;
    margin-bottom: 0px;
  }
`
const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  /* @media screen and (max-width: 768px){
        padding: 100px 48px;
    } */
`
const Description = styled.p`
  max-width: 440px;
  font-size: 16px;
  line-height: 1.6rem;
  color: #010606;
  margin-bottom: 20px;
`;

const About = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <AboutHero/>
      <Container>
        <InfoWrapper>
          <Row>
            <Column1>
              <Title>Our Story</Title>
            </Column1>
            <Column2>
            <TextWrapper>
              <Description>
                DBS Business Consulting Pvt Ltd is a company that provides a wide
                range of business and finance consulting services to organizations
                with the goal of helping them develop and execute effective strategies
                to drive business growth and improve operations.
              </Description>
              <Description>
                The company was established in 2019 by a team of CAs & Business
                Experts with rich experience in financial consulting, and business
                consulting. The company is based in Ghorahi, Dang, Nepal and is
                managed and run by a team of professionals and experienced core
                staff with diversified functional expertise in the field of management
                & financial consulting.
              </Description>
              <Description>
                DBS has established itself amongst eminent Management & Financial
                consulting firms in this region and is committed to providing service
                of the highest professional standards to its valuable clients. The
                company has a young and energetic team that is always looking for
                ways to provide value-added services to its clients. The company is guided by the code of
                conduct and ethics of our professional standards to our clients.
              </Description>
            </TextWrapper>
            </Column2>
          </Row>
        </InfoWrapper>
      </Container>
      
      <Team />
      <Footer />
    </div>
  )
}

export default About