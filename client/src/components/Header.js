import React from 'react'

const Header = ({darkMode}) => {
  return (
    <div className="header">
      <div className="supreme">
        <a>Supreme</a>
      </div>
      <div className={darkMode ? "time" : "time-white"}>20/02/2020 05:25am PRC</div>
    </div>
  )
}

export default Header
