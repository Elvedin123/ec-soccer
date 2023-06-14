import Nav from "../components/Nav/Nav.jsx"
import './landingpage.css'
import React from "react"
import logo from '../assets/soccer-player.png'
import ball from '../assets/football.png'
const LandingPage = () => {
  return (
    <div className="landingpage-container">
      <div className="ec-soccer">
        <h1 className='title'>EC Soccer</h1>
        <img className="soccer-image" src={logo} alt="soccerball" />
      </div>
      <div className="app-content">
        <Nav />
        <img src={ball} alt="soccerball" className="soccer-ball" width={200} height={200} />
        <div className="goal-text-container">

          <p className="soccer-quote">
            “I am not a perfectionist, but I like to feel that things are done well. More important than that, I feel an endless need to learn, to improve, to evolve, not only to please the coach and the fans but also to feel satisfied with myself. It is my conviction that here are no limits to learning, and that it can never stop, no matter what our age.”
            - Cristiano Ronaldo
          </p>
          <p className="soccer-quote">
            “Becoming a footballer is only the first half of the silent prayer a kid offers up to the sky or confides to his teacher in a primary school essay. The second part is the name of the team he wants to play for.”
            - Andrea Pirlo
          </p>
          <p className="soccer-quote">
            “You have to fight to reach your dream. You have to sacrifice and work hard for it.”
            - Lionel Messi
          </p>
          <p className="soccer-quote">
            “The secret is to believe in your dreams; in your potential that you can be like your star, keep searching, keep believing and don’t lose faith in yourself.”
            Neymar
          </p>
        </div>
      </div>

    </div>
  )
}

export default LandingPage