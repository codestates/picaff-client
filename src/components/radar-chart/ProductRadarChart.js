import { useRef, useState } from 'react'
import { Radar } from 'react-chartjs-2'
import { RadarData, RadarOptions } from './ProductRadarConfig'
import RadarChartComponent from './ProductRadarChart.style'

export default function ProductRadarChart() {
  const chartRef = useRef()
  const Chart = chartRef.current

  // 서버쪽에서 테이블을 이런 객체형태로 준다고 가정 (순서는 seed에서 가져옴)
  const [result, setResult] = useState({
    productName: 'Capsule Machine',
    productCharacter: {
      accessibility: 3,
      convenience: 5,
      effectiveness: 2,
    },
  })

  // 최종적으로 차트에 들어갈 상태
  const [ProductRadarData, setProductRadarData] = useState(RadarData)

  // productName 지정
  ProductRadarData.datasets[0].label = result.productName

  // productCharacter 순회하면서 data에 추가
  for (let key in result.productCharacter) {
    ProductRadarData.datasets[0].data.push(result.productCharacter[key])
  }

  return (
    <RadarChartComponent className='top'>
      <Radar ref={chartRef} data={ProductRadarData} options={RadarOptions} className='box_canvas' />
    </RadarChartComponent>
  )
}
