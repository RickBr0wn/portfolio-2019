import React from 'react'
import profilePicture from '../Images/profilePicture.jpg'

const Header = () => {
  return (
    <div className='side-bar'>
      <div className='side-bar-inner'>
        <img
          src={profilePicture}
          alt='my fat face'
          className='profile-picture'
        />
        <h1>Rick Brown</h1>
        <h3>Web developer</h3>
        <h5>I'm a self taught react developer</h5>
      </div>
    </div>
  )
}

export default Header
