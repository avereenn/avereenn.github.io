import React from 'react';
import PortfolioList from './portfolioList.js';

export default function Main({ content }) {
  return (
    <main className="main">
      <PortfolioList portfolioData={content} />
    </main>
  );
}