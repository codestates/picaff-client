import theme from 'styles/theme'

type Type = {
  style: 'GreenTag' | 'ClearTag'
  value: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const { GreenTag, ClearTag } = theme

export default function Tag({ style, value, onClick }: Type) {
  switch (style) {
    case 'GreenTag':
      return <GreenTag onClick={onClick}># {value}</GreenTag>
    case 'ClearTag':
      return <ClearTag onClick={onClick}># {value}</ClearTag>
  }
}
