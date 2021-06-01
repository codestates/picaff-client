import { itemResult } from 'interface'
import { OverlayContainer } from './Overlay.style'

type Props = {
  coffeeItem: itemResult
  name: string
}
export default function Overlay({ coffeeItem, name }: Props) {
  return (
    <OverlayContainer>
      <div className='image'>
        <img src={coffeeItem.imageUrl} alt='' />
      </div>
      <span>{name}</span>
    </OverlayContainer>
  )
}
