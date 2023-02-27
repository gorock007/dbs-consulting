import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #101522;
`
const Wrapper = styled.div`
    padding: 45px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`
const LinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`
const LinkWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`
const LinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width:420px){
        margin:0;
        padding: 10px;
        width: 100%;
    }
`
const LinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`
const FooterLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    list-style: none;
    cursor: pointer;

    &:hover{
        color: #00A6FB;
        transition: 0.3s ease-out;
    }
`
const FooterContainer = styled.footer`
    font-size: 12px;
    color: #fff;
    margin-bottom: 10px;
    padding: 30px;
    text-align: center;
`


const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <LinksContainer>
                <LinkWrapper>
                    <LinkItems>
                        <LinkTitle>Contact</LinkTitle>
                        <FooterLink style={{ cursor: 'none', pointerEvents: 'none' }}>Address</FooterLink>
                        <FooterLink style={{ cursor: 'none', pointerEvents: 'none' }}>Phone Number</FooterLink>
                        <FooterLink style={{ cursor: 'none', pointerEvents: 'none' }}>Email</FooterLink>
                        {/* <FooterLink to='/about'>Terms of Service</FooterLink> */}
                    </LinkItems>
                </LinkWrapper>
                <LinkWrapper>
                    <LinkItems>
                        <LinkTitle>Us</LinkTitle>
                        <FooterLink href='https://www.google.com/maps?q=Ghorahi,+Dang,+Nepal' target='_blank' rel='noopener noreferrer'>Ghorahi, Dang, Nepal</FooterLink>
                        <FooterLink href='tel:+97782564077'>+977 82564077</FooterLink>
                        <FooterLink href='mailto:info.dbsnepal@gmail.com' target='_blank' rel='noopener noreferrer'>info.dbsnepal@gmail.com</FooterLink>
                        {/* <FooterLink to='/about'>Terms of Service</FooterLink> */}
                    </LinkItems>
                    <LinkItems>
                        <LinkTitle>Social Media</LinkTitle>
                        <FooterLink href='https://www.facebook.com/contactdbs' target='_blank'>Facebook</FooterLink>
                        <FooterLink to='/about'>Instagram</FooterLink>
                        <FooterLink href='https://www.linkedin.com/in/ca-deepak-shetty-42630a4a/' target='_blank'>Linkedin</FooterLink>
                    </LinkItems>
                </LinkWrapper>
            </LinksContainer>
            
        </Wrapper>
          <FooterContainer>
              DBS Business Consulting Pvt. Ltd. <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </FooterContainer>
    </Container>
  )
}

export default Footer