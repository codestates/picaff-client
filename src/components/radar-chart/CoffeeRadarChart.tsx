import RadarChartComponent from './CoffeeRadarChart.style'
import { useEffect, useRef, useState } from 'react'
import { Radar } from 'react-chartjs-2'
import { ChartData } from 'chart.js'
import { CoffeeResultType } from 'interface'
import { RadarData, RadarOptions } from './CoffeeRadarConfig'

type Props = {
  radarInfo: CoffeeResultType
  type: 'item' | 'result'
}

export default function CoffeeRadarChart({ radarInfo, type }: Props) {
  const chartRef = useRef().current

  const [CoffeeRadarData, setCoffeeRadarData] = useState<ChartData>(RadarData)

  const { sweetness, sourness, balance, body, aroma, afterTaste } = radarInfo.coffeeCharacter

  useEffect(() => {
    setCoffeeRadarData({
      ...CoffeeRadarData,
      datasets: [
        {
          ...CoffeeRadarData.datasets[0],
          label: radarInfo.coffeeName,
          data: [sweetness, sourness, balance, body, aroma, afterTaste],
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
  RadarOptions.plugins.title.text = radarInfo.coffeeName
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
