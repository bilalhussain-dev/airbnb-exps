import React from 'react'
import HeroImg from '../images/hero-image.png'
function Hero() {
  return (
    <section className='hero'>
        
        <div className="hero-content">
            <h1 className='hero-text hero-heading'>Online Experiences</h1>
            <p className='hero-text hero-detailed-text'>
              <span>Join online intractive activities led by on-of-a-kind hotels-all without leaving home.</span>
            </p>
            <a href="#" className="btn btn-hero">
                <span>Explore Experiences</span>
                <span className="icon">
                    <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
                </span>
            </a>
        </div>
        <img src={HeroImg} alt="" className="hero-img" />
    </section>
  )
}

export default Hero