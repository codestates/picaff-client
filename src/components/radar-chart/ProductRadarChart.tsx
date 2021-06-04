import RadarChartComponent from './ProductRadarChart.style'
import { useEffect, useRef, useState } from 'react'
import { Radar } from 'react-chartjs-2'
import { ChartData } from 'chart.js'
import { ProductResultType } from 'interface'
import { RadarData, RadarOptions } from './ProductRadarConfig'

type Props = {
  radarInfo: ProductResultType
  type: 'item' | 'result'
}

export default function ProductRadarChart({ radarInfo, type }: Props) {
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

    if (type === 'item') {
      RadarOptions.scales.r = {
        ...RadarOptions.scales.r,
        grid: {
          ...RadarOptions.scales.r.grid,
          color: '#ffffff50',
        },
        ticks: {
          ...RadarOptions.scales.r.ticks,
          color: '#ffffff',
        },
        angleLines: {
          ...RadarOptions.scales.r.angleLines,
          color: '#ffffff50',
        },
        pointLabels: {
          ...RadarOptions.scales.r.pointLabels,
          color: '#ffffff',
        },
      }
    } else if (type === 'result') {
      RadarOptions.scales.r = {
        ...RadarOptions.scales.r,
        grid: {
          ...RadarOptions.scales.r.grid,
          color: '#36241550',
        },
        ticks: {
          ...RadarOptions.scales.r.ticks,
          color: '#362415',
        },
        angleLines: {
          ...RadarOptions.scales.r.angleLines,
          color: '#36241550',
        },
        pointLabels: {
          ...RadarOptions.scales.r.pointLabels,
          color: '#362415',
        },
      }
    }
  }, [])
  RadarOptions.plugins.title.text = radarInfo.productName
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
