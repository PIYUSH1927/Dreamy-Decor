import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import first from '../assets/first.jpg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'
const Hero = () => {
  return (
    <Wrapper className='section-center' >
      <article style={{textAlign:"center",position:"relative" }} className='content'>
        <h1 style={{
          fontFamily:"cursive",
          fontStyle:"italic",
          marginRight:"20px",
          color:"hsl(204, 75%, 38%)"

        }}>
          where comfort <br />
          meets desgin
        </h1>
        <p style={{color:"black",textAlign:"left"}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p >
        
        <Link  to='/products' className='btn hero-btn'>
          shop now
        </Link>
        
      </article>
      <article className='img-container'>
        
        <img style={{height:"470px",width:"620px",top:"-200px",left:"120px"}}   src={first} alt='person working' className='accent-img' />
        <img style={{height:"200px",width:"340px",position:"relative",top:"180px",left:"130px"}} src={heroBcg2} alt='person working' className='accent-img' />
        
      </article>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  backgroundImage: URL('first.jpg')
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
      position:relative;
      bottom:50px;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
  @media (max-width: 786px) {

    h1 {
      font-size:30px;
      margin-top:30px;
    }
 
`

export default Hero
