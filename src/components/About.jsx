import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll';

const Container = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg? '#f9f9f9': '#010606')};

    @media screen and (max-width: 768px){
        padding: 100px 48px;
    }
    
    @media screen and (min-width: 1024px) {
        padding: 120px 80px;
  }
`
const Wrapper = styled.div`
    display: grid;
    z-index: 1;
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
    grid-template-areas: ${({imgStart}) => (imgStart? `'col2 col1'`: `'col1 col2'`)};

    @media screen and (max-width:768px){
        grid-template-areas: ${({imgStart}) => (imgStart? `'col1' 'col2'`: `'col1 col1' 'col2 col2'`)}
    }
`
const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`
const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`
const Top = styled.p`
    color: #00a6fb;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

const Title = styled.h1`
    font-size: 48px;
    margin-bottom: 24px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText? '#f7f8fa': '#010606' )};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606': '#fff')};
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    
`
const ImgWrapper = styled.div`
    max-width: 555px;
    height: 100%;
`
const Image = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
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
const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

export const About = ({lightBg, id, imgStart, lightText, darkText, primary, dark, dark2,
                        top, title, subtitle, buttonlabel, showButton, img, isOpen, toggle}) => {
    
    const [hover, setHover] = useState(false);
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    const onHover =()=>{
        setHover(!hover)
    }
  return (
    <Container lightBg={lightBg} id={id} scrollNav={scrollNav}>
        <Wrapper>
        <Row imgStart={imgStart}>
            <Column1>
                <TextWrapper>
                    <Top>{top}</Top>
                    <Title lightText={lightText}>{title}</Title>
                    <Subtitle darkText={darkText}>{subtitle}</Subtitle>
                    <ButtonWrapper>
                        {showButton && (
                            <Button to='/about' onClick={toggleHome} onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                smooth='true' duration={500} spy='true' exact="true" offset={-80}
                                primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>
                                {buttonlabel}{hover ? <ArrowForward /> : <ArrowRight />}</Button>
                        )}
                    </ButtonWrapper>
                </TextWrapper>
            </Column1>
            <Column2>
                <ImgWrapper>
                    <Image src={img} alt='abouticon' />
                </ImgWrapper>
            </Column2>
        </Row>
        </Wrapper>
    </Container>
  )
}
