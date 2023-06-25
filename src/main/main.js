import './main.css'
import {subMenuState} from '../state';
import { useRecoilState } from 'recoil';

function Main(){
  const [menuState,setMenuState] = useRecoilState(subMenuState);

  function mouseOver(){
    console.log('마우스 오버1',menuState)
    setMenuState(false)
  }
  return (
    <div id="section1" onMouseOver={mouseOver}>

    </div>
  )
}

export default Main;