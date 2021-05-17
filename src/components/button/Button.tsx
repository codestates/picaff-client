import React from 'react'
import theme from 'styles/theme'

type Type = {
  style: 'MainBtnBrown' | 'MenuBtn' | 'UserBtn' | 'MainBtnIvory'
  handleClick?: (e: React.MouseEventHandler<HTMLButtonElement>) => void
}

const { MainBtnBrown, MenuBtn, UserBtn, MainBtnIvory } = theme

export default function Button({ style }: Type) {
  switch (style) {
    case 'MainBtnBrown':
      return <MainBtnBrown onClick={} />
    case 'MenuBtn':
      return <MenuBtn />
    case 'UserBtn':
      return <UserBtn />
    case 'MainBtnIvory':
      return <MainBtnIvory />
  }
}
