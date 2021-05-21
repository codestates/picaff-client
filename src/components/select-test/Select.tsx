import { SelectContainer } from './Select.style'

type Select = {
  title: string
}

export default function Select({ title }: Select) {
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
      <div>
        <div>
          <h1>{title}</h1>
        </div>
        <div className='selectcontainer'>
          <p dir='rtl'>
            <button title='5' className='rate'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1990/link'
                viewBox='0 0 24 24'>
                <use xlinkHref='#star' className='icon-star' />
              </svg>
            </button>
            <button title='4' className='rate'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1990/link'
                viewBox='0 0 24 24'>
                <use xlinkHref='#star' className='icon-star' />
              </svg>
            </button>
            <button title='3' className='rate'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1990/link'
                viewBox='0 0 24 24'>
                <use xlinkHref='#star' className='icon-star' />
              </svg>
            </button>
          </p>
        </div>
      </div>
    </SelectContainer>
  )
}
