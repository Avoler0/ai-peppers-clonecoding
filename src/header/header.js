import './header.css'
import React from 'react';
import HeaderMenu from './menu';
import HeaderTop from './top';
import {subMenuState} from '../state';
import { useRecoilValue } from 'recoil';

function Header(){
  const menuState = useRecoilValue(subMenuState);
  const subBg = React.useRef(null);
  const [menuHover,setMenuHover] = React.useState(false);
  console.log('메뉴 스테이트',menuState)
  return (
    <div className="header w-100" >
      <HeaderTop />
      <HeaderMenu menuHover={menuHover} setMenuHover={setMenuHover} subBg={subBg}/>
      <div ref={subBg} className={`header-sub-bg ${menuState ? 'sub-menu on' : 'sub-menu off'}`}/>
      {/* <div ref={subBg} className="header-sub-bg" style={{ display: 'block', opacity: '0' }}/> */}
      {/*  style={{ display: menuHover ? 'block' : 'none', opacity: menuHover ? '1' : '0' }} */}
    </div>
  )
}


export default Header;