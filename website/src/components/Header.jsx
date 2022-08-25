import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
        <Heading>About this project</Heading>
        <Text>
            Want to build a portfolio 
            for yourself but could not get a satisfactory motivation?
        </Text>
        <Text>
            This project brings together some awesome portfolio sites designed by 
            developers to get you the right motivaiton. Click on the portfolio cards below and it will redirect you to that site. To view the code, 
            click on the source code button.
        </Text>
    </Container>

  )
}

export default Header

const Container = styled.section`
display:flex;
max-width:90%;
flex-direction:column;
justify-content:flex-start;
padding:2em;
min-height:100vh;
color: var(--text);
`

const Heading = styled.h1`
display:flex;
position:relative;
padding:0 0 1em;
font-size:5rem;
font-weight:800;

 &::after{
    content:'';
    position:absolute;
    bottom:0;
    left:0;
    width:15%;
    height:5px;
    background:var(--text);
 }
`

const Text = styled.p`
font-size:18px;
color: var(--text-2);
`