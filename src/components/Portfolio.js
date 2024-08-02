import React, { useState } from 'react'
import PortfolioBox from '../GenericComponents/PortfolioBox'
import '../public/style/Portfolio.css'
import { PORTFOLIO_LIST, PORTFOLIO_TITLE } from '../constants/PortfolioList'
import { PORTFOLIO } from '../constants/General';
import { Para } from '../GenericComponents';

function Portfolio() {
    const [portfolios, setPortfolios] = useState(PORTFOLIO_LIST);
    function getPortfolios (title) {
        if (title === 'All') {
            setPortfolios(PORTFOLIO_LIST);
            return;
        }
        setPortfolios(PORTFOLIO_LIST.filter( (t) => t.category === title));
    }
  return (
    <section id="portfolio">
        <div className="portfolio-main">
            <h1 className="heading">{PORTFOLIO.heading}</h1>
            <Para
              text={PORTFOLIO.description}
              align="center"
              color="#707070" 
            />
            <div className="portfolio-pills">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    {PORTFOLIO_TITLE.map( (list) => (
                        <li key={list.title} className="nav-item">
                            <button onClick={() => getPortfolios(list.title)} className={`nav-link ${list.active ? ' active' : ''}`} data-bs-toggle="pill">{list.title}</button>
                        </li>
                    ))};
                </ul>
                <div className="tab-content">
                    <div className="row">
                        {portfolios.length > 0 ? portfolios.map( (item) => (
                            <div className="col-sm-6 col-lg-4 box-port" key={item.name}>
                                <PortfolioBox
                                    img={item.img}
                                    name={item.name}
                                    link={item.link}
                                />
                            </div>
                        )): <div className="no-record">No Record Found</div>}
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Portfolio
