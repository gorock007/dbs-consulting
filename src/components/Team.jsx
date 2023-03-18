import React from 'react'
import styled from 'styled-components';
import dpkimg from '../images/deepak.jpg'
import nikimg from '../images/nikunja.jpg'
import artiimg from '../images/arti.JPG'
import gangaimg from '../images/ganga.JPG'
import roshanimg from '../images/roshan.jpeg'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 24px;

  @media screen and (max-width: 768px){

      margin-right: auto;
      margin-left: auto;
      padding: 0 24px;
      justify-content: center;
        
    }
 
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #00A6FB;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  text-align: center;

`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const MemberImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const MemberName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const MemberRole = styled.p`
  font-size: 18px;
`;

const Team = () => {
    return (
        <div>
        <Container>
            <Title>Meet Our Team</Title>
            <Description>
                We are a team of professionals who are dedicated to providing expert services in various fields.
              The team consists of engineers,
              chartered accountants, surveyors, researchers, business experts, and other
              members who have experience in similar areas. The company is proud to
              introduce its front-line team members who are key to the success of the
              company.
            </Description>
            <TeamContainer>
                <MemberContainer>
                    <MemberImage src={dpkimg} alt="Team member 1" />
                    <MemberName>CA Deepak Shetty</MemberName>
                    <MemberRole>Financial & Management Consultant</MemberRole>
                </MemberContainer>
                <MemberContainer>
                    <MemberImage src={nikimg} alt="Team member 2" />
                    <MemberName>Nikunja Neupane</MemberName>
                    <MemberRole>Industrial Project & Management Consultant</MemberRole>
                </MemberContainer>
                <MemberContainer>
                    <MemberImage src={roshanimg} alt="Team member 3" />
                    <MemberName>Roshan Adhikari</MemberName>
                    <MemberRole>Associate Manager</MemberRole>
                </MemberContainer>
                <MemberContainer>
                    <MemberImage src={artiimg} alt="Team member 3" />
                    <MemberName>Arati Neupane</MemberName>
                    <MemberRole>Operation Manager</MemberRole>
                </MemberContainer>
                <MemberContainer>
                    <MemberImage src={gangaimg} alt="Team member 3" />
                    <MemberName>Ganaga KC</MemberName>
                    <MemberRole>Account & Admin Officer</MemberRole>
                </MemberContainer>
            </TeamContainer>
        </Container>
        </div>
    )
}

export default Team