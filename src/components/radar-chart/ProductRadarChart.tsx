import RadarChartComponent from './ProductRadarChart.style'
import { useRef, useState } from 'react'
import { Radar } from 'react-chartjs-2'
import { ChartData } from 'chart.js'
import { ProductResultType } from 'interface'
import { RadarData, RadarOptions } from './ProductRadarConfig'

type Props = {
  radarInfo: ProductResultType
}

export default function ProductRadarChart({ radarInfo }: Props) {
  const chartRef = useRef().current

  // 최종적으로 차트에 들어갈 상태
  const [ProductRadarData] = useState<ChartData>(RadarData)

  // productName 지정
  ProductRadarData.datasets[0].label = radarInfo.productName

  // productCharacter 순회하면서 data에 추가
  for (let key in radarInfo.productCharacter) {
    ProductRadarData.datasets[0].data.push(radarInfo.productCharacter[key])
  }

  return (
    <RadarChartComponent className='radarChart'>
      <Radar
        type='radar'
        ref={chartRef}
        data={ProductRadarData}
        options={RadarOptions}
        className='box_canvas'
      />
    </RadarChartComponent>
  )
}
