import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__title"><Link to="/">Frontend-разработка на React. Игорь Аверин</Link></h1>
      </div>
    </header>
  );
}