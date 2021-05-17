import theme from 'styles/theme'

type Type = {
  style: 'GreenTag' | 'ClearTag'
}

const { GreenTag, ClearTag } = theme

export default function Tag({ style }: Type) {
  switch (style) {
    case 'GreenTag':
      return <GreenTag />
    case 'ClearTag':
      return <ClearTag />
  }
}
