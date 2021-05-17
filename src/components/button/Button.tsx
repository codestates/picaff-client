import theme from 'styles/theme'

type Type = {
  style: 'MainBtnBrown' | 'MenuBtn' | 'UserBtn' | 'MainBtnIvory'
}

const { MainBtnBrown, MenuBtn, UserBtn, MainBtnIvory } = theme

export default function Button({ style }: Type) {
  switch (style) {
    case 'MainBtnBrown':
      return <MainBtnBrown />
    case 'MenuBtn':
      return <MenuBtn />
    case 'UserBtn':
      return <UserBtn />
    case 'MainBtnIvory':
      return <MainBtnIvory />
  }
}
