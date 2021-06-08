import MagazineComponent from './Magazine.style'
import MagazineLeft from 'components/main/MagazineLeft'
import MagazineRight from 'components/main/MagazineRight'

export default function Magazine() {
  return (
    <MagazineComponent id='second'>
      <MagazineLeft />
      <MagazineRight />
    </MagazineComponent>
  )
}
