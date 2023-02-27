import React from 'react'
import styled from 'styled-components'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;

    @media screen and (max-width:768px){
        margin-right: 0;
        margin-bottom: 50px;
  }
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;

    @media screen and (max-width:768px){
        margin-left: 0;
  }
`;

const Title = styled.h1`
  font-size: 2.0rem;
  margin-bottom: 30px;

    @media screen and (max-width:768px){
        text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 350px;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  font-size: 1.1rem;

  &:focus {
    outline: none;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  }

    @media screen and (max-width:768px){
        width: 100%;
  }
`;

const Textarea = styled.textarea`
  width: 350px;
  height: 200px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  font-size: 1.1rem;
  resize: none;

  &:focus {
    outline: none;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  }

    @media screen and (max-width:768px){
        width: 100%;
  }
`;

const Button = styled.button`
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
`;

const InfoContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const IconWrapper = styled.div`
    margin-right: 10px;
`
const InfoText = styled.a`
    font-size: 1.1rem;
    color: #333;
    cursor: pointer;
    text-decoration: none;

      @media screen and (max-width:768px){
        text-align: center;
  }
    
`
const Contact = () => {
  return (
    <Container>
        <FormContainer>
            <Title>Contact Us</Title>
            <Form>
                <Input placeholder="Name" />
                <Input placeholder="Email" />
                <Textarea placeholder="Message" />
                <Button>Send Message</Button>
            </Form>
        </FormContainer>
        <AddressContainer>
            <Title>Contact Information</Title>
            <InfoContainer>
                <InfoItem>
                    <IconWrapper>
                        <FaMapMarkerAlt color='#00A6FB'/>
                    </IconWrapper>
                    <InfoText href='https://www.google.com/maps?q=Ghorahi,+Dang,+Nepal'>Ghorahi, Dang, Nepal</InfoText>
                </InfoItem>
                <InfoItem>
                    <IconWrapper>
                        <FaPhoneAlt color='#00A6FB' />
                    </IconWrapper>
                    <InfoText href='tel:+97782564077'>+977 82564077</InfoText>
                </InfoItem>
                <InfoItem>
                    <IconWrapper>
                        <FaEnvelope color='#00A6FB' />
                    </IconWrapper>
                    <InfoText href='mailto:info.dbsnepal@gmail.com'>info.dbsnepalgmail.com</InfoText>
                </InfoItem>
            </InfoContainer>
        </AddressContainer>
    </Container>
  )
}

export default Contact