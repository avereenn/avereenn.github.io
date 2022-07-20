import React from 'react';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
import portfolioData from '../data.js';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Main content={portfolioData} />
      <Footer />
    </React.Fragment>
  );
}