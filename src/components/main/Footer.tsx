import { FooterComponent } from './Footer.style'

export default function Footer() {
  return (
    <FooterComponent>
      <div className='service'>
        <span id='logo'>PICAFF</span>
        <span id='copyright'>Copyright © 2021 PICAFF All Rights Reserved</span>
      </div>
      <div className='info'>
        <div id='repo' onClick={() => window.open('https://github.com/codestates/picaff-client')}>
          Picaff Repository
        </div>
        <div id='crew'>
          <span onClick={() => window.open('https://github.com/byronkim')}>GYUTAE KIM</span>
          <span onClick={() => window.open('https://github.com/jeonghun-project')}>
            JEONGHUN CHOI
          </span>
          <span onClick={() => window.open('https://github.com/Lucky-kor')}>JUNGMIN LEE</span>
          <span onClick={() => window.open('https://github.com/miraecod')}>MIRAE KYUNG</span>
        </div>
      </div>
    </FooterComponent>
  )
}
