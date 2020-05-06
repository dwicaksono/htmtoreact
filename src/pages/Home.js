import React from 'react'
import Header from '../components/Header.js'
import Section from '../elements/Section.js'
import Hero from '../components/Hero.js'
import Client from '../components/Client.js'
import Feature from '../components/Features.js'
import Card from '../elements/Card.js'
import List from '../elements/List.js'
import Button from '../elements/Button.js'
import Footer from '../components/Footer.js'

import Fade from 'react-reveal/Fade'

import FeatureImg01 from '../assets/images/feature-tile-icon-01.svg'
import FeatureImg02 from '../assets/images/feature-tile-icon-02.svg'
import FeatureImg03 from '../assets/images/feature-tile-icon-03.svg'


const Home = () => {
  const features = [
    {
      imgSrc: FeatureImg01,
      imgAlt: 'Feature tile icon 01',
      title: 'Join the system 01',
      description: 'A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.'
    },
    {
      imgSrc: FeatureImg02,
      imgAlt: 'Feature tile icon 02',
      title: 'Join the system 02',
      description: 'A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.'
    },
    {
      imgSrc: FeatureImg03,
      imgAlt: 'Feature tile icon 03',
      title: 'Join the system 03',
      description: 'A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.'
    },
  ]

  const listPricing = [
    {
      price: 27,
      currencySysmbol: "$",
      description: "Lorem ipsum is a common text",
      features: [
        { isChecked: true, content: "Excepteur sint occaecat velit" },
        { isChecked: true, content: "Excepteur sint occaecat velit" },
        { isChecked: true, content: "Excepteur sint occaecat velit" },
        { isChecked: false, content: "Excepteur sint occaecat velit" },
        { isChecked: false, content: "Excepteur sint occaecat velit" },
      ]
    },
    {
      price: 45,
      currencySysmbol: "$",
      description: "Lorem ipsum is a common text",
      features: [
        { isChecked: true, content: "Excepteur sint occaecat velit" },
        { isChecked: true, content: "Excepteur sint occaecat velit" },
        { isChecked: true, content: "Excepteur sint occaecat velit" },
        { isChecked: false, content: "Excepteur sint occaecat velit" },
        { isChecked: false, content: "Excepteur sint occaecat velit" },
      ]
    },
    {
      price: 50,
      currencySysmbol: "$",
      description: "Lorem ipsum is a common text",
      features: [
        { isChecked: true, content: "Excepteur sint occaecat velit" },
        { isChecked: true, content: "Excepteur sint occaecat velit" },
        { isChecked: true, content: "Excepteur sint occaecat velit" },
        { isChecked: true, content: "Excepteur sint occaecat velit" },
        { isChecked: true, content: "Excepteur sint occaecat velit" },
      ]
    },
  ]
  return (
    <div className='body-wrap'>
      <Header></Header>
      <main className="site-content">
        <Hero></Hero>
        <Client></Client>
        <Section className='features-tiles'>
          <div className="container">
            <div className="features-tiles-inner section-inner">
              <div className="tiles-wrap">
                {
                  features.map((feature, idx) => (
                    <Feature key={idx} delayinMs={idx * 500} data={feature} />
                  ))
                }
              </div>
            </div>
          </div>
        </Section>
        <Section className='pricing'>
          <div className="container">
            <div className="pricing-inner section-inner has-top-divider">
              <div className="section-header center-content">
                <div className="container-xs">
                  <h2 className="mt-0 mb-16">
                    Simple, transarent pricing
								</h2>
                  <p className="m-0">
                    Lorem ipsum is common placeholder text
                    used to demonstrate the graphic elements
                    of a document or visual presentation.
								</p>
                </div>
              </div>
              <div className="tiles-wrap">
                {
                  listPricing.map((list, idx) => (
                    <Fade left key={idx} delay={idx * 500}>
                      <Card hasShadow>
                        <div className="pricing-item-content">
                          <div className="pricing-item-header pb-24 mb-24">
                            <div className="pricing-item-price mb-4">
                              <span className="pricing-item-price-currency h2">{list.currencySysmbol}</span><span
                                className="pricing-item-price-amount h1 pricing-switchable" data-pricing-monthly="34"
                                data-pricing-yearly="27">{list.price}</span>
                            </div>
                            <div className="text-xs text-color-low">
                              {list.description}
                            </div>
                          </div>
                          <div className="pricing-item-features mb-40">
                            <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                              What’s included
											</div>
                            <List data={list.features} isSmall className='pricing-item-features-list mb-32'></List>
                          </div>
                        </div>
                        <div className="pricing-item-cta mb-8">
                          <Button isPrimary isBlock>
                            Start free trial
                      </Button>
                        </div>
                      </Card>
                    </Fade>
                  ))
                }
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Home