import { useState } from 'react'
import { CoffeeResultContainer } from './CoffeeResult.style'
import { itemResult, CoffeeResultType, Tags } from 'interface'
import CoffeeRadarChart from 'components/radar-chart/CoffeeRadarChart'
import CoffeeItem from 'containers/item/CoffeeItem'
import Tag from 'components/button/Tag'

type Props = {
  data: itemResult
}

export default function CoffeeResult({ data }: Props) {
  const [selectedItem] = useState<itemResult>(data)

  const radarInfo: CoffeeResultType | undefined = data.coffeeCharacter && {
    coffeeName: data.itemName,
    coffeeCharacter: {
      id: data.coffeeCharacter.id,
      sweetness: data.coffeeCharacter.sweetness,
      sourness: data.coffeeCharacter.sourness,
      balance: data.coffeeCharacter.balance,
      body: data.coffeeCharacter.body,
      aroma: data.coffeeCharacter.aroma,
      afterTaste: data.coffeeCharacter.afterTaste,
    },
  }

  return (
    <CoffeeResultContainer className='section_coffee'>
      <section className='section_result'>
        <div className='description'>
          <div className='box_map'>지도 확대</div>
          <div className='box_tag'>
            {data.tag.map((singleTag: Tags) => (
              <Tag style='ClearTag' key={singleTag.id} value={singleTag.tagName} />
            ))}
          </div>
          <div className='box_text'>{data.itemDetail}</div>
        </div>
        {radarInfo && <CoffeeRadarChart radarInfo={radarInfo} />}
      </section>
      <section className='section_map'>지도</section>
      <CoffeeItem selectedItem={selectedItem} />
    </CoffeeResultContainer>
  )
}
