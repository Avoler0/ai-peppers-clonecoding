import './header.css'

function Header(){
  return (
    <div className="header w-100">
      <div className='header-top h-100'>
        <ul className="content w-75 mx-auto">
          <li className='float-start'>
            <img src="image/header_icon1.png" alt='.'/>
          </li>
          <li className='float-start'>
            <img src="image/header_icon2.png" alt='.'/>
          </li>
          <li className='float-start'>
            <img src="image/header_icon3.png" alt='.'/>
          </li>
          <li className='float-start'>
            <img src="image/header_icon5.png" alt='.'/>
          </li>
          <li className='float-start'>
            <img src="image/header_icon6.png" alt='.'/>
          </li>
          <li>
            <a href='/'>
              사이트맵
            </a>
          </li>
          <li>
            <img src="image/header_icon4.png" alt='.'/>
          </li>
        </ul>
      </div>
      <div className='header-menu'>
        <div className='menu-logo'>
          <img src='image/logo.png' alt='.' />
        </div>
        <div  className='menu-list w-75 mx-auto h-100 justify-content-between'>
          <ul className='left-menu float-start'>
            <li className='h-100'><a href='/' class="text-decoration-none">CLUB</a></li>
            <li className='h-100'><a href='/' class="text-decoration-none">TEAM</a></li>
            <li className='h-100'><a href='/' class="text-decoration-none">MATCH</a></li>
          </ul>
          <ul className='right-menu float-end ms-auto text-end'>
            <li className='h-100'><a href='/' class="text-decoration-none">NEWS</a></li>
            <li className='h-100'><a href='/' class="text-decoration-none">TICKETS</a></li>
            <li className='h-100'><a href='/' class="text-decoration-none">COMMUNITY</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Header;