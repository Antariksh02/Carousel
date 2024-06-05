import React, { useState } from 'react'
import './VerticalCarousel.css'

export default function VerticalCarousel() {
  const[move,setMove] = useState(0)
  const handleClick = (dir)=>{
if(dir === "left"){
  if(move === 0){
    setMove(2*80)
  }else{
    setMove(move - 80)
  }
}
if(dir === "right"){
  if(move >= 2*80){
    setMove(0)
  }else{
    setMove(move + 80)
  }
}
  }
  return (
    <div className='VerticalCarouselMain'>
      <div className='VerticalCarouselContainer'>
              <button className='btn1' onClick={()=>handleClick("left")}>{'<'}</button>
              <button className='btn2' onClick={()=>handleClick("right")}>{'>'}</button>
         <div className='VerticalCarouselAllImg' style={{transform:`translateY(-${move}vh)`}}>
            <div className='VerticalCarouselImg'>
<div>
  1
</div>
            </div>
            <div className='VerticalCarouselImg'>
            <div>
  2
</div>
            </div>
            <div className='VerticalCarouselImg'>
            <div>
  3
</div>
            </div>
         </div>
      </div>
        
    </div>
  )
}
