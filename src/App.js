import React,{useState} from 'react';
import './App.css';

function App() {
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
    if(move === 2 * 33.3){
      setMove(0)
    }
    else if(move >= 0){
      setMove(move + 33.3)
    }

  }


}

  return (
    <div className="App">
  
<div className='container'>
<button className='btn1' onClick={()=>handleClick("left")}> {"<"} </button>
<button className='btn2' onClick={()=>handleClick("right")}> {">"} </button>



<div className="allImgContainer" style={{transform:`translateX(-${move}%)`}}>
<div className="imgContainer">
  <div className='img'>
    <div>
1
    </div>

  </div>

</div>
<div className="imgContainer">
<div className='img'>
<div>
2
    </div>
  </div>
</div>
<div className="imgContainer">
<div className='img'>
<div>
3
    </div>
  </div>
</div>

</div>

</div>
    </div>
  );
}

export default App;
