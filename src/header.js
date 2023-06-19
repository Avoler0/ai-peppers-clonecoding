import './header.css'

function Header(){
  return (
    <div className="header">
      <div className='header-top'>
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

      </div>
    </div>
  )
}


export default Header;