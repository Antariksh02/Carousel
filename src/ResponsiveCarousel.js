import React, { useEffect, useState } from 'react'
import './ResponsiveCarousel.css'
export default function ResponsiveCarousel() {
    const[move,setMove] = useState(0);
    const[count,setCount] = useState(0)
    const[numberToSlide,setNumberToSlide] = useState(3)
    const handleClick = (dir)=>{
        if(dir === "left"){
            if(move === 0){
                setMove(numberToSlide*count)
            }
        else{setMove(move - count)}
        }
if(dir === "right"){
    if(move === numberToSlide*count){
        setMove(0)
    }
else{setMove(move + count)}
}
    }
console.log(count)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);

      if (width <= 768) {
        setCount(8.33);
     setNumberToSlide(11)
      } else if (width >= 1440) {
     
        setCount(25);
      } else {
        setCount(16.67);
        setNumberToSlide(5)
      }
    };


    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <div className='ResponsiveCarouselMain'>
        <div className='ResponsiveCarouselContainer'>
        <button className='btn1' onClick={()=>handleClick("left")}> {"<"}</button>
<button className='btn2'onClick={()=>handleClick("right")} > {">"} </button>
            <div className='ResponsiveCarouselAllImg' style={{transform:`translateX(-${move}%)`}}>
                <div className='ResponsiveCarouselImg'>
<div>1</div>
                </div>
                <div className='ResponsiveCarouselImg'>
                <div>2</div>
                    </div>
                    <div className='ResponsiveCarouselImg'>
                    <div>3</div>
                    </div>


                    <div className='ResponsiveCarouselImg'>
                    <div>4</div>
</div>
<div className='ResponsiveCarouselImg'>
<div>5</div>
    </div>
    <div className='ResponsiveCarouselImg'>
    <div>6</div>
    </div>



    <div className='ResponsiveCarouselImg'>
                    <div>7</div>
</div>
<div className='ResponsiveCarouselImg'>
<div>8</div>
    </div>
    <div className='ResponsiveCarouselImg'>
    <div>9</div>
    </div>




    <div className='ResponsiveCarouselImg'>
                    <div>10</div>
</div>
<div className='ResponsiveCarouselImg'>
<div>11</div>
    </div>
    <div className='ResponsiveCarouselImg'>
    <div>12</div>
    </div>


            </div>

        </div>

    </div>
  )
}
