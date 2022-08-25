import React from 'react'
import styled from 'styled-components'
import data from "../data.json";

const Projects = () => {
  return (
    <Container>
      <Heading>
        Projects
      </Heading>
        {data.data.map((portfolio) => (
        <div key={portfolio.portfolio_website} className='wrapper'>
        <div className='project'> 
          <img
              src={
                portfolio.portfolio_image ? portfolio.portfolio_image : "no image"
              }
              alt={
                portfolio.portfolio_name ? portfolio.portfolio_name : "no image"
              }
          />
          <div className="container">
            <p className="personName">{portfolio.portfolio_name}</p>
            <div className ='links'>
              <a 
                className="project_link"
                href={portfolio.portfolio_website}
                target="_blank"
                rel="noreferrer"
              >View portfolio</a>
              <a
                className="project_link"
                href={portfolio.portfolio_code}
                target="_blank"
                rel="noreferrer"
              >Source Code</a>
            </div>
          </div>
        </div>
        </div>
      ))}
    </Container>
  )
}

export default Projects

const Container = styled.section`
display:flex;
flex-wrap:wrap;
padding:0 4em 2em;
gap:2em 1em;
justify-content:space-between;
column-fill:auto;

@media screen and (min-width:980px){
  padding:0 2em 2em; 
  justify-content:flex-start;
}

& img{
  font-size:.8em;
  position: absolute;
  min-height: 150px;
  width: 150px;
  object-fit: cover;
  top: -30%;
  left:50%;
  transform:translateX(-50%);
  border-radius: 50px;
  margin:auto;
  margin-bottom: -30px;
  background:whitesmoke;

}

& .wrapper{
  margin:auto;
}
& .project{
background:white;
filter:grayscale(1);
margin:2em 0;
border-radius: 15px;
color: var(--text-3);
background: var(--project-background);
z-index: 1;
position:relative;
cursor:pointer;
display: flex;
justify-content: end;
 

  .container{
    display:none;
    flex-wrap:wrap;
    justify-content:center;
    width:100%;
    padding:0em 0 1em;
    transition:display .5s linear;
    z-index:0;
  }

  .personName {
    font-size: 24px;
    font-weight:bold;
    padding: 0px;
    margin: .5em 0;
  }

  .project_link {
    border-radius: 5px;
    padding: 1em .5em;
    font-size:16px;
    cursor:pointer;
    position:relative;
    color:var(--text-3);

    ::after{
        content:'';
        position:absolute;
        bottom:10px;
        left:50%;
        width:0%;
        transform:translateX(-50%);
        height:1px;
        background-clip:content-box;
        box-sizing:content-box;
        background:var(--text-3);
        opacity:.7;
      }

      @keyframes UNDERLINE{
        from{width: 0;}
        to{width:100%}
      }

    :hover{
      font-weight:bold;
      color:var(--text-3);
     
      ::after{
        width:80%;
        animation:UNDERLINE .3s linear alternate;
      }
    }

    
  }


  :hover{
    filter:grayscale(0);
    z-index:999;
    box-shadow: 0px 2px 1px 2000px #00000087;

    .container{
      display:flex;
    }
    img{
      box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.161);
      padding:1em;
      z-index:1;
    }
  }
  /* :not(:hover){
    .container{
      display:none;
    }
  } */

}
`

const Heading = styled.h1`
display:flex;
width:100%;
position:relative;
padding:0 0 1em;
font-size:5rem;
font-weight:800;
color: var(--text);

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