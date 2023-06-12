import './Nav.css'
const Nav = () => {

  return (
    <nav className="nav-container">
      <a href="#home" className='brand-name'> EC Soccer</a>
      <div className='links-container'>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>

      </div>
    </nav>
  )
}

export default Nav