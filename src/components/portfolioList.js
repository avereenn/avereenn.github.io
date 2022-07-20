import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PortfolioItem from './portfolioItem.js';

export default function PortfolioList({ portfolioData }) {
  const portfolioItems = portfolioData.map(item => {
    return (
      <li key={uuidv4()} className="portfolio-list__item">
        <PortfolioItem item={item} />
      </li>
    );
  });
  
  return (
    <section className="main__portpholio-list portfolio-list container">
      <ul className="portpholio-list__list">
        {portfolioItems}
      </ul>
    </section>
  );
}