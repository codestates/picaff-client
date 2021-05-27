import RadarChartComponent from './CoffeeRadarChart.style'
import { useRef } from 'react'
import { Radar } from 'react-chartjs-2'
import { ChartData } from 'chart.js'
import { CoffeeResultType } from 'interface'
import { RadarData, RadarOptions } from './CoffeeRadarConfig'

type Props = {
  radarInfo: CoffeeResultType
}

export default function CoffeeRadarChart({ radarInfo }: Props) {
  const chartRef = useRef().current

  // 최종적으로 차트에 들어갈 데이터 (RadarData = 데이터 포맷)
  const CoffeeRadarData: ChartData = RadarData

  // coffeeName 지정
  CoffeeRadarData.datasets[0].label = radarInfo.coffeeName

  // coffeeCharacter 순회하면서 data에 추가
  for (let key in radarInfo.coffeeCharacter) {
    if (key !== 'id') {
      CoffeeRadarData.datasets[0].data.push(radarInfo.coffeeCharacter[key])
    }
  }

  return (
    <RadarChartComponent className='radarChart'>
      <Radar
        type='radar'
        ref={chartRef}
        data={CoffeeRadarData}
        options={RadarOptions}
        className='box_canvas'
      />
    </RadarChartComponent>
  )
}
