import React from 'react'
import profilePicture from '../Images/profilePicture.jpg'

const Header = () => {
  return (
    <div className='side-bar'>
      <div className='header'>
        <img
          src={profilePicture}
          alt='my fat face'
          className='profile-picture'
        />
        <h1>Rick Brown</h1>
        <p>React Developer</p>
      </div>
      <div className='menu-links'>
        <p>Projects</p>
        <p>GitHub</p>
        <p>About</p>
      </div>
      <div className='footer'>
        <p>Rick Brown © {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default Header
