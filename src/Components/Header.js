import React from 'react'
import profilePicture from '../Images/profilePicture.jpg'

const Header = () => {
  return (
    <div className='header-container'>
      <img src={profilePicture} alt='my fat face' className='profilePicture' />
      <h1>Rick Brown</h1>
      <h3>Web developer</h3>
      <h5>I'm a self taught react developer</h5>
    </div>
  )
}

export default Header
