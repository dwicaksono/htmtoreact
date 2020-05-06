import React from 'react'
import Section from '../elements/Section.js'
import Fade from 'react-reveal/Fade';

import ClientImage01 from '../assets/images/clients-01.svg'
import ClientImage02 from '../assets/images/clients-02.svg'
import ClientImage03 from '../assets/images/clients-03.svg'
import ClientImage04 from '../assets/images/clients-04.svg'
import ClientImage05 from '../assets/images/clients-05.svg'
const Clients = () => {
  return (
    <Section className="clients" >
      <Fade delay={1000}>
        <div className="container">
          <div className="clients-inner section-inner has-top-divider has-bottom-divider">
            <ul className="list-reset">
              <li>
                <img src={ClientImage01} alt="Clients 01" />
              </li>
              <li>
                <img src={ClientImage02} alt="Clients 02" />
              </li>
              <li>
                <img src={ClientImage03} alt="Clients 03" />
              </li>
              <li>
                <img src={ClientImage04} alt="Clients 04" />
              </li>
              <li>
                <img src={ClientImage05} alt="Clients 05" />
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </Section>
  )
}

export default Clients