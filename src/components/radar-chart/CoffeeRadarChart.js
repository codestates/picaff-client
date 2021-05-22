import { useRef, useState } from 'react'
import { Radar } from 'react-chartjs-2'
import { RadarData, RadarOptions } from './CoffeeRadarConfig'
import RadarChartComponent from './CoffeeRadarChart.style'

export default function CoffeeRadarChart() {
  const chartRef = useRef()
  const Chart = chartRef.current

  // 서버쪽에서 테이블을 이런 객체형태로 준다고 가정 (순서는 seed에서 가져옴)
  const [result, setResult] = useState({
    coffeeName: 'Guatemala',
    coffeeCharacter: {
      sweetness: 3,
      sourness: 2,
      balance: 4,
      body: 3,
      aroma: 4,
      afterTaste: 5,
    },
  })

  // 최종적으로 차트에 들어갈 상태
  const [CoffeeRadarData, setCoffeeRadarData] = useState(RadarData)

  // coffeeName 지정
  CoffeeRadarData.datasets[0].label = result.coffeeName

  // coffeeCharacter 순회하면서 data에 추가
  for (let key in result.coffeeCharacter) {
    CoffeeRadarData.datasets[0].data.push(result.coffeeCharacter[key])
  }

  return (
    <RadarChartComponent className='top'>
      <Radar ref={chartRef} data={CoffeeRadarData} options={RadarOptions} className='box_canvas' />
    </RadarChartComponent>
  )
}
