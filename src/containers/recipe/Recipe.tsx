import { RecipeContainer } from './Recipe.style'
import { MenuType } from 'interface'
import { useState } from 'react'

export default function Recipe() {
  const [coffeeName, setCoffeeName] = useState<string>('CHOOSE YOUR COFFEE')
  const [menu, setMenu] = useState<MenuType>({
    americano: false,
    latte: false,
    cappuccino: false,
    macchiato: false,
    mocha: false,
    flatwhite: false,
    vienna: false,
    espresso: false,
  })

  return (
    <RecipeContainer menu={menu}>
      <div className='container'>
        <h1 className='coffee_name'>{coffeeName}</h1>
        <div className='cup'>
          <div className='filling reset'>
            <div className='coffee'>espresso</div>
            <div className='water'>water</div>
            <div className='milk'>milk</div>
            <div className='steamed_milk'>steamed milk</div>
            <div className='milk_foam'>milk foam</div>
            <div className='whipped_cream'>whipped cream</div>
            <div className='chocolate'>chocolate</div>
          </div>
          <div className='plate'></div>
        </div>
      </div>
      <div className='options'>
        <button
          id='americano'
          onClick={() => {
            setMenu({
              americano: true,
              latte: false,
              cappuccino: false,
              macchiato: false,
              mocha: false,
              flatwhite: false,
              vienna: false,
              espresso: false,
            })
            setCoffeeName('Americano')
          }}>
          AMERICANO
        </button>
        <button
          id='latte'
          onClick={() => {
            setMenu({
              americano: false,
              latte: true,
              cappuccino: false,
              macchiato: false,
              mocha: false,
              flatwhite: false,
              vienna: false,
              espresso: false,
            })
            setCoffeeName('Caffe Latte')
          }}>
          CAFFE LATTE
        </button>
        <button
          id='cappuccino'
          onClick={() => {
            setMenu({
              americano: false,
              latte: false,
              cappuccino: true,
              macchiato: false,
              mocha: false,
              flatwhite: false,
              vienna: false,
              espresso: false,
            })
            setCoffeeName('Cappuccino')
          }}>
          CAPPUCCINO
        </button>
        <button
          id='macchiato'
          onClick={() => {
            setMenu({
              americano: false,
              latte: false,
              cappuccino: false,
              macchiato: true,
              mocha: false,
              flatwhite: false,
              vienna: false,
              espresso: false,
            })
            setCoffeeName('Macchiato')
          }}>
          MACCHIATO
        </button>
        <button
          id='mocha'
          onClick={() => {
            setMenu({
              americano: false,
              latte: false,
              cappuccino: false,
              macchiato: false,
              mocha: true,
              flatwhite: false,
              vienna: false,
              espresso: false,
            })
            setCoffeeName('Caffe Mocha')
          }}>
          CAFFE MOCHA
        </button>
        <button
          id='flatwhite'
          onClick={() => {
            setMenu({
              americano: false,
              latte: false,
              cappuccino: false,
              macchiato: false,
              mocha: false,
              flatwhite: true,
              vienna: false,
              espresso: false,
            })
            setCoffeeName('Flat White')
          }}>
          FLAT WHITE
        </button>
        <button
          id='vienna'
          onClick={() => {
            setMenu({
              americano: false,
              latte: false,
              cappuccino: false,
              macchiato: false,
              mocha: false,
              flatwhite: false,
              vienna: true,
              espresso: false,
            })
            setCoffeeName('Vienna Coffee')
          }}>
          VIENNA COFFEE
        </button>
        <button
          id='espresso'
          onClick={() => {
            setMenu({
              americano: false,
              latte: false,
              cappuccino: false,
              macchiato: false,
              mocha: false,
              flatwhite: false,
              vienna: false,
              espresso: true,
            })
            setCoffeeName('Espresso')
          }}>
          ESPRESSO
        </button>
      </div>
    </RecipeContainer>
  )
}
