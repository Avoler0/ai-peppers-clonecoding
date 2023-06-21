import './header.css'
import HeaderMenu from './menu';
import HeaderTop from './top';

function Header(){
  return (
    <div className="header w-100">
      <HeaderTop />
      <HeaderMenu />
    </div>
  )
}


export default Header;