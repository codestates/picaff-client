import RadarChartComponent from './ProductRadarChart.style'
import { useEffect, useRef, useState } from 'react'
import { Radar } from 'react-chartjs-2'
import { ChartData } from 'chart.js'
import { ProductResultType } from 'interface'
import { RadarData, RadarOptions } from './ProductRadarConfig'

type Props = {
  radarInfo: ProductResultType
}

export default function ProductRadarChart({ radarInfo }: Props) {
  const chartRef = useRef<HTMLCanvasElement>()
  const [ProductRadarData, setProductRadarData] = useState<ChartData>(RadarData)
  const { accessibility, convenience, effectiveness } = radarInfo.productCharacter

  useEffect(() => {
    setProductRadarData({
      ...ProductRadarData,
      datasets: [
        {
          ...ProductRadarData.datasets[0],
          label: radarInfo.productName,
          data: [accessibility, convenience, effectiveness],
        },
      ],
    })
  }, [])

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
