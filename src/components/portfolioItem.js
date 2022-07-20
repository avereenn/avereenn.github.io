import React from 'react';

export default function PortfolioItem({ item }) {
  const {
    imgSrc,
    imgSrcMobile,
    imgDesc,
    title,
    shortDesc,
  } = item;
  return (
    <article className="portfolio-list__article  portfolio-article">
      <figure>
        <picture>
          <source media="(max-width: 500px)" srcset={imgSrcMobile} />
          <img src={imgSrc} alt={imgDesc} />
        </picture>
        <figcaption>
          <h2 className="portfolio-article__title">{title}</h2>
        </figcaption>
      </figure>
      <p className="portfolio-article__desc">{shortDesc}</p>
    </article>
  );
}