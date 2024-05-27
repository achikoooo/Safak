import './navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src='icons/logo.svg' alt='logo' />
        <span>lamadmin</span>
      </div>
      <div className='icons'>
        <img className='icon' src='icons/search.svg' alt='icon' />
        <img className='icon' src='icons/app.svg' alt='icon' />
        <img className='icon' src='icons/expand.svg' alt='icon' />
        <div className='notifications'>
          <img src='icons/notifications.svg' alt='notifications' />
          <span>1</span>
        </div>
        <div className='user'>
          <img src='images/avatar.jpg' alt='notifications' />
          <span>Archil</span>
        </div>
        <img className='icon' src='icons/settings.svg' alt='icon' />
      </div>
    </nav>
  )
}

export default Navbar
