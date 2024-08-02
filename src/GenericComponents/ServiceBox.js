import React from 'react'

function ServiceBox({img, title, description}) {
  return (
    <div className="inner">
      <img src={img} />
      <div className="service-name">{title}</div>
      <p className="service-des">{description}</p>
    </div>
  )
}

export default ServiceBox
