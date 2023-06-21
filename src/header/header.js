import './header.css'
import React from 'react';
import HeaderMenu from './menu';
import HeaderTop from './top';

function Header(){
  const subBg = React.useRef(null);
  const [menuHover,setMenuHover] = React.useState(false);

  return (
    <div className="header w-100" onMouseOut={() => setMenuHover(false)}>
      <HeaderTop />
      <HeaderMenu menuHover={menuHover} setMenuHover={setMenuHover} subBg={subBg}/>
      <div ref={subBg} className="header-sub-bg" style={{ display: menuHover ? 'block' : 'none', opacity: menuHover ? '1' : '0' }}/>
      {/* <div ref={subBg} className="header-sub-bg" style={{ display: 'block', opacity: '0' }}/> */}
    </div>
  )
}


export default Header;