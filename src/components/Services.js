import React from 'react'
import '../public/style/Services.css'
import { SERVICES_LIST } from '../constants/ServicesList'
import { Para, ServiceBox } from '../GenericComponents'
import { SERVICES } from '../constants/General'

function Services() {
  return (
    <section id='services'>
        <div className="section-main">
            <h1 className="heading">{SERVICES.heading}</h1>
            <Para
              text={SERVICES.description}
              align="center"
              color="#707070" 
            />
            <div className="boxes">
                <div className="row box">
                    {SERVICES_LIST.map( (item) => (
                        <ServiceBox
                            img={item.img}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
