import { SelectContainer } from './Select.style'

type Select = {
  title: string
  handleTestResult: (select: string) => void
  preSelect: number | null
}

export default function Select({ title, handleTestResult, preSelect }: Select) {
  const idx: string[] = ['매우 아니다', '', '', '', '매우 좋아한다']

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const index = e.currentTarget.getAttribute('value')
    index && handleTestResult(index)
  }

  return (
    <SelectContainer>
      <svg className='icon-source'>
        <defs>
          <path
            id='star'
            d='M12,1.776l3.286,6.779l7.464,1.032l-5.433,5.221l1.326,7.417L12,18.67l-6.645,3.555l1.327-7.417L1.25,9.587l7.464-1.032L12,1.776z'
          />
        </defs>
      </svg>
      <div className='contentContainer'>
        <div className='title'>{title}</div>
        <div className='selectcontainer'>
          <p dir='rtl'>
            {idx.map((i, idx) => (
              <button
                title={i}
                value={idx}
                className={idx === preSelect ? `active rate th${idx}` : `rate th${idx}`}
                onClick={handleClick}
                key={idx}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1990/link'
                  viewBox='0 0 24 24'>
                  <use xlinkHref='#star' className='icon-star' />
                </svg>
              </button>
            ))}
          </p>
        </div>
      </div>
    </SelectContainer>
  )
}
