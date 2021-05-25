import MagazineRightComponent from './MagazineRight.style'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Button from 'components/button/Button'

export default function MagazineRight() {
  return (
    <Router>
      <MagazineRightComponent id='magazineRight' className='right'>
        <div className='box_title'>PICAFF MAGAZINE</div>
        <div className='box_desc'>매거진 설명</div>
        <div className='box_follow'>최신 소식들을 알아보세요</div>
        <Link to='/mazagine'>
          <Button style='MainBtnIvory' type='button' value='check latest news'></Button>
        </Link>
      </MagazineRightComponent>
    </Router>
  )
}
