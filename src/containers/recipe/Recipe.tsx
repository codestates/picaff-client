import { RecipeContainer } from './Recipe.style'
import { useState } from 'react'

export default function Recipe() {
  const [coffeeName, setCoffeeName] = useState<string>('CHOOSE YOUR COFFEE')
  const [americano, setAmericano] = useState<boolean>(false)
  const [latte, setLatte] = useState<boolean>(false)
  const [cappuccino, setCappuccino] = useState<boolean>(false)
  const [macchiato, setMacchiato] = useState<boolean>(false)
  const [mocha, setMocha] = useState<boolean>(false)
  const [flatwhite, setFlatwhite] = useState<boolean>(false)
  const [vienna, setVienna] = useState<boolean>(false)
  const [espresso, setEspresso] = useState<boolean>(false)

  return (
    <RecipeContainer
      americano={americano}
      latte={latte}
      cappuccino={cappuccino}
      mocha={mocha}
      flatwhite={flatwhite}
      vienna={vienna}
      macchiato={macchiato}
      espresso={espresso}>
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
            setAmericano(!americano)
            setCoffeeName('Americano')
          }}>
          AMERICANO
        </button>
        <button
          id='latte'
          onClick={() => {
            setLatte(!latte)
            setCoffeeName('Caffe Latte')
          }}>
          CAFFE LATTE
        </button>
        <button
          id='cappuccino'
          onClick={() => {
            setCappuccino(!cappuccino)
            setCoffeeName('Cappuccino')
          }}>
          CAPPUCCINO
        </button>
        <button
          id='macchiato'
          onClick={() => {
            setMacchiato(!macchiato)
            setCoffeeName('Macchiato')
          }}>
          MACCHIATO
        </button>
        <button
          id='mocha'
          onClick={() => {
            setMocha(!mocha)
            setCoffeeName('Caffe Mocha')
          }}>
          CAFFE MOCHA
        </button>
        <button
          id='flatwhite'
          onClick={() => {
            setFlatwhite(!flatwhite)
            setCoffeeName('Flat White')
          }}>
          FLAT WHITE
        </button>
        <button
          id='vienna'
          onClick={() => {
            setVienna(!vienna)
            setCoffeeName('Vienna Coffee')
          }}>
          VIENNA COFFEE
        </button>
        <button
          id='espresso'
          onClick={() => {
            setEspresso(!espresso)
            setCoffeeName('Espresso')
          }}>
          ESPRESSO
        </button>
      </div>
    </RecipeContainer>
  )
}
