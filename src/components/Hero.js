import React from 'react'
import { Fade, Bounce } from 'react-reveal';
import Section from '../elements/Section.js'
import HeroImage from '../assets/images/hero-image.png'

const Hero = () => {
  return (
    <Section className='hero illustration-section-01' isCenteredContent>
      <div className="container-sm">
        <div className="hero-inner section-inner">
          <div className="hero-content">
            <Fade bottom delay={200}>
              <h1
                className="mt-0 mb-16"
              >
                Landing template for startups
								</h1>
            </Fade>
            <div className="container-xs">
              <Fade bottom delay={400}>
                <p
                  className="mt-0 mb-32 reveal-from-bottom"
                >
                  Our landing page template works on all
                  devices, so you only have to set it up
                  once, and get beautiful results forever.
									</p>
              </Fade>
            </div>
          </div>
          <Bounce bottom delay={800}>
            <div
              className="hero-figure illustration-element-01"
            >
              <img
                className="has-shadow"
                src={HeroImage}
                alt="Hero"
                width="896"
                height="504"
              />
            </div>
          </Bounce>
        </div>
      </div>
    </Section>
  )
}

export default Hero