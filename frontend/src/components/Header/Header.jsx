import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header' style={{ backgroundImage: `url(${assets.header_img})` }}>
      <div className="header-content">
        <h2>Order Your Favourite <br />Food Here !</h2>
        <p>Choose from a diverse menu of expertly crafted dishes made with the finest <br />ingredients. We’re here to satisfy your cravings <br /> — whenever hunger strikes.</p>
       <button>View menu</button>
      </div>
    </div>
  )
}

export default Header