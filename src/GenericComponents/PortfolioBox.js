import React from 'react'
function openLink (link) {
    window.open(link, '_blank')
  }
function PortfolioBox({img, name, link}) {
  return (
    <>
      <div className="portfolio-box" onClick={() => openLink(link)}>
          <img src={img} />
          <div className="project-name">{name}</div>
          <div className="hover">View More</div>
      </div>
    </>
  )
}

export default PortfolioBox
