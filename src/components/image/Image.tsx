import React from 'react'
import { TestImage } from 'components/image/MypageResultImg'
import { LikeImage } from 'components/image/MypageLikeImg'
import { ThumbnailNewsImage } from 'components/image/ThumbnailNewsImg'
import { ItemImage } from 'components/image/ItemImg'
import { ButtonImage } from 'components/image/ButtonImg'

type Type = {
  style: 'TestImage' | 'LikeImage' | 'ThumbnailNewsImage' | 'ItemImage' | 'ButtonImage'
  type?: 'button'
  handleClick?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void
}

export default function Image({ style, handleClick }: Type) {
  switch (style) {
    case 'TestImage':
      return <TestImage onClick={handleClick} />
    case 'LikeImage':
      return <LikeImage onClick={handleClick} />
    case 'ThumbnailNewsImage':
      return <ThumbnailNewsImage onClick={handleClick} />
    case 'ItemImage':
      return <ItemImage />
    case 'ButtonImage':
      return <ButtonImage />
  }
}
