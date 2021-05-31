import RadarChartComponent from './CoffeeRadarChart.style'
import { useEffect, useRef, useState } from 'react'
import { Radar } from 'react-chartjs-2'
import { ChartData } from 'chart.js'
import { CoffeeResultType } from 'interface'
import { RadarData, RadarOptions } from './CoffeeRadarConfig'

type Props = {
  radarInfo: CoffeeResultType
}

export default function CoffeeRadarChart({ radarInfo }: Props) {
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
  }, [])

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
