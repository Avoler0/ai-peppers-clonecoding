

function HeaderMenu(){
  const leftSurMenu = ['CLUB','TEAM','MATCH']
  const rightSurMenu = ['NEWS','TICKETS','COMMUNITY']

  const subMenu = {
    CLUB:['구단주 인사말','구단 소개','엠블럼 & 유니폼','경기장 안내','구단 조직'],
    TEAM:['선수','코칭스태프','구단SNS'],
    MATCH:['경기일정 및 결과','팀순위','선수기록'],
    NEWS:['구단뉴스'],
    TICKETS:['티켓예매'],
    COMMUNITY:['공지사항','이벤트']

  }

  return(
    <div className='header-menu'>
      <div className='menu-logo'>
        <img src='image/logo.png' alt='.' />
      </div>
      <div  className='menu-list w-75 mx-auto h-100 justify-content-between'>
        <ul className='sur-menu left-menu float-start'>
          {leftSurMenu.map((name)=>{
            return(
              <li className='sur-item position-relative h-100'>
                <a href='/' class="text-decoration-none">{name}</a>
                <ul className="sub-menu position-absolute w-100 text-center">
                  {subMenu[name].map((name) => {
                    return (
                      <li className="w-100">
                        <a href="#main" className="h-100 text-decoration-none">{name}</a>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
        <ul className='sur-menu right-menu float-end ms-auto text-end'>
          {rightSurMenu.map((name)=>{
            return(
              <li className='sur-item position-relative h-100'>
                <a href='/' class="text-decoration-none">{name}</a>
                <ul className="sub-menu position-absolute w-100 text-center">
                  {subMenu[name].map((name) => {
                    return (
                      <li className="w-100">
                        <a href="#main" className="h-100 text-decoration-none">{name}</a>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default HeaderMenu;