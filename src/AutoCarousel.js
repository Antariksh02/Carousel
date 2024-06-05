import React, { useEffect, useState } from 'react'
import './AutoCarousel.css'
export default function AutoCarousel() {
    const[move,setMove] = useState(0)
    const handleClick = (dir)=>{
        if(dir === "left"){
            if(move <= 0){
              setMove(2* (33.3))
            }
            else{
              setMove(move-33.3)
            }
          }

          if(dir === "right"){
            if(move === 2*33.3){
              setMove(0)
            }
            else if(move >= 0){
              setMove(move+33.3)
            }
          }
    }
 
    useEffect(() => {
      const timeout = setTimeout(() => {
        if (move === 2 * 33.3) {
          setMove(0);
        } else if (move >= 0) {
          setMove(move + 33.3);
        }
      }, 3000);
  
      return () => clearTimeout(timeout); 
    
    }, [move]);
       

  return (
    <div className='AutoCarouselMain'>
        <div className='AutoCarouselContainer'>
        <button className='btn1' onClick={()=>handleClick("left")}> {"<"}</button>
<button className='btn2'onClick={()=>handleClick("right")} > {">"} </button>

<div className='AutoCarouselAllImg' style={{transform:`translateX(-${move}%)`}}>
<div className='AutoCarouselImg' >
<div>1</div>
</div>
<div className='AutoCarouselImg'>
<div>2</div>
</div>
<div className='AutoCarouselImg'>
<div>3</div>
</div>
</div>
        </div>
    </div>
  )
}
