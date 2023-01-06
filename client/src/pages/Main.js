import React from 'react'
import { NavLink } from 'react-router-dom'
import fb from '../assets/fb.svg'
import ig from '../assets/ig.svg'
import msg from '../assets/msg.svg'
import Header from '../components/Header'
import { NEWS_ROUTE } from '../utils/consts'


const Main = () => {
  return (
    <div className='app'>
      <Header darkMode={true}/>
      <div className="main">
        <nav>
          <ul className="navbar">
            <li className="navbar-item">
              <NavLink className="navbar-item-link" to={NEWS_ROUTE}>news</NavLink>
            </li>
            <li className="navbar-item">
              <a>fall/winter 2020 preview</a>
            </li>
            <li className="navbar-item">
              <a>fall/winter 2020 lookbook</a>
            </li>

            <li className="navbar-item">
              <a>shop</a>
            </li>
            <li className="navbar-item">
              <a>random</a>
            </li>
            <li className="navbar-item">
              <a>about</a>
            </li>
            <li className="navbar-item">
              <a>stores</a>
            </li>
            <li className="navbar-item">
              <a>contact</a>
            </li>
            <li className="navbar-item">
              <a>mailinglist</a>
            </li>
          </ul>
        </nav>
        <footer>
          <img src={fb} />
          <img src={ig} />
          <img src={msg} />
        </footer>
      </div>
    </div>
  )
}

export default Main
