import Nav from "../components/Nav/Nav.jsx"
import './landingpage.css'
import React from "react"
import logo from '../assets/soccer-player.png'
const LandingPage = () => {
  return (
    <div className="landingpage-container">
      <div className="ec-soccer">
        <h1 className='title'>EC Soccer</h1>
        <img className="soccer-image" src={logo} alt="soccerball" />
      </div>
      <div className="app-content">
        <Nav />
      </div>

    </div>
  )
}

export default LandingPage