import React from 'react'
import App from './App'
import './Main.css'
import AutoCarousel from './AutoCarousel'
import VerticalCarousel from './VerticalCarousel'
import ResponsiveCarousel from './ResponsiveCarousel'

export default function Main() {
  return (
    <div className='main'>
          <div>Carousel</div>
        <App/>
        <div>Autoplay Carousel</div>
        <AutoCarousel/>
        <div>Vertical Carousel</div>
        <VerticalCarousel/>
        <div>Responsive Carousel</div>
        <ResponsiveCarousel/>
    </div>
  )
}
