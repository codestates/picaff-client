import React from 'react'
import LandingComponent from './Landing.style'

type props = {
  children: React.ReactNode
}

export default function Landing({ children }: props) {
  return <LandingComponent id='first'>{children}</LandingComponent>
}
