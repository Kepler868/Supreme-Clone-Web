import React from 'react'
import Header from '../components/Header'
import DarkCarousel from '../components/Carousel'
import { NavLink } from 'react-router-dom'
import { MAIN_ROUTE } from '../utils/consts'

const News = () => {
  return (
    <div className="app-white">
      <Header darkMode={false} />
      <article className="article-news">
        <DarkCarousel />
        <div className="section">
          <div className="date">11/18/2019</div>
          <div className="title">Supreme(Vol. 2)</div>
          <div className="text">
            This Fall, Supreme will release its second hardcover monograph,
            published by Phaidon. Following the first monograph, published in
            2010, the book documents the brand’s visual history from 2010-2018,
            including products, collaborations and cultural
          </div>
          <div className="archive">archive</div>
        </div>
      </article>

      <footer className="footer-news">
        <NavLink className="footer-item" to={MAIN_ROUTE}>
          home
        </NavLink>
        <div className="footer-item">shop</div>
        <div className="footer-item">fall/winter 2020 preview</div>
        <div className="footer-item">lookbook</div>
        <div className="footer-item">random</div>
        <div className="footer-item">about</div>
        <div className="footer-item">stores</div>
      </footer>
    </div>
  )
}

export default News
