import './App.css'
import React, {useState, useRef} from 'react'

const App=()=>{
  const [turn, setTurn]=useState("X")
  const turnBox=useRef()
  const b1=useRef()
  const b2=useRef()
  const b3=useRef()
  const b4=useRef()
  const b5=useRef()
  const b6=useRef()
  const b7=useRef()
  const b8=useRef()
  const b9=useRef()
  const winner=useRef()
  const replayBtn1=useRef()
  const line1=useRef()
  const line2=useRef()
  const line3=useRef()
  const line4=useRef()
  const line5=useRef()
  const line6=useRef()
  const line7=useRef()

  const replay=()=>{
    let boxes=document.querySelectorAll('.box');
    boxes.forEach((b)=>{
      b.innerHTML=""
    })
    turnBox.current.style="visibility:visible"
    winner.current.innerHTML=""
    replayBtn1.current.style.visibility="hidden"
    line1.current.style.visibility="hidden"
    line2.current.style.visibility="hidden"
    line3.current.style.visibility="hidden"
    line4.current.style.visibility="hidden"
    line5.current.style.visibility="hidden"
    line6.current.style.visibility="hidden"
    line7.current.style.visibility="hidden"
  }

  const boxClick=(e)=>{
    turnBox.current.style="visibility:hidden"

    if(turn==="X" && e.target.innerHTML=="" && winner.current.innerHTML=="")
    {
      e.target.innerHTML=turn;
      e.target.style="color:red;"
      setTurn("O")
    }
    else if(turn==="O" && e.target.innerHTML=="" && winner.current.innerHTML=="")
    {
      e.target.innerHTML=turn;
      e.target.style="color:yellow;"
      setTurn("X")
    }

    if((b1.current.innerText=="X" && b2.current.innerText=="X" && b3.current.innerText=="X") || (b1.current.innerText=="X" && b4.current.innerText=="X" && b7.current.innerText=="X") || (b1.current.innerText=="X" && b5.current.innerText=="X" && b9.current.innerText=="X") || (b2.current.innerText=="X" && b5.current.innerText=="X" && b8.current.innerText=="X") || (b3.current.innerText=="X" && b6.current.innerText=="X" && b9.current.innerText=="X") || (b4.current.innerText=="X" && b5.current.innerText=="X" && b6.current.innerText=="X") || (b2.current.innerText=="X" && b5.current.innerText=="X" && b8.current.innerText=="X") || (b3.current.innerText=="X" && b5.current.innerText=="X" && b7.current.innerText=="X") || (b7.current.innerText=="X" && b8.current.innerText=="X" && b9.current.innerText=="X"))
    {
      winner.current.innerText="X Won"
      setTurn("X")
      turnBox.current.style="visibility:visible"
      replayBtn1.current.style.visibility="visible"
    }

    if(b1.current.innerText=="X" && b4.current.innerText=="X" && b7.current.innerText=="X")
    {
      line1.current.style.visibility="visible"
    }
    if(b1.current.innerText=="X" && b5.current.innerText=="X" && b9.current.innerText=="X")
    {
      line3.current.style.visibility="visible"
    }
    if(b4.current.innerText=="X" && b5.current.innerText=="X" && b6.current.innerText=="X")
    {
      line4.current.style.visibility="visible"
    }
    if(b7.current.innerText=="X" && b8.current.innerText=="X" && b9.current.innerText=="X")
    {
      line5.current.style.visibility="visible"
    }
    if(b3.current.innerText=="X" && b6.current.innerText=="X" && b9.current.innerText=="X")
    {
      line6.current.style.visibility="visible"
    }
    if(b3.current.innerText=="X" && b5.current.innerText=="X" && b7.current.innerText=="X")
    {
      line7.current.style.visibility="visible"
    }
    
    if((b1.current.innerText=="O" && b2.current.innerText=="O" && b3.current.innerText=="O") || (b1.current.innerText=="O" && b4.current.innerText=="O" && b7.current.innerText=="O") || (b1.current.innerText=="O" && b5.current.innerText=="O" && b9.current.innerText=="O") || (b2.current.innerText=="O" && b5.current.innerText=="O" && b8.current.innerText=="O") || (b3.current.innerText=="O" && b6.current.innerText=="O" && b9.current.innerText=="O") || (b4.current.innerText=="O" && b5.current.innerText=="O" && b6.current.innerText=="O") || (b2.current.innerText=="O" && b5.current.innerText=="O" && b8.current.innerText=="O") || (b3.current.innerText=="O" && b5.current.innerText=="O" && b7.current.innerText=="O") || (b7.current.innerText=="O" && b8.current.innerText=="O" && b9.current.innerText=="O"))
    {
      winner.current.innerText="O Won"
      setTurn("X")
      turnBox.current.style="visibility:visible"
      replayBtn1.current.style.visibility="visible"
    }

    if(b1.current.innerText=="O" && b4.current.innerText=="O" && b7.current.innerText=="O")
    {
      line1.current.style.visibility="visible"
    }
    if(b1.current.innerText=="O" && b5.current.innerText=="O" && b9.current.innerText=="O")
    {
      line3.current.style.visibility="visible"
    }
    if(b4.current.innerText=="O" && b5.current.innerText=="O" && b6.current.innerText=="O")
    {
      line4.current.style.visibility="visible"
    }
    if(b7.current.innerText=="O" && b8.current.innerText=="O" && b9.current.innerText=="O")
    {
      line5.current.style.visibility="visible"
    }
    if(b3.current.innerText=="O" && b6.current.innerText=="O" && b9.current.innerText=="O")
    {
      line6.current.style.visibility="visible"
    }
    if(b3.current.innerText=="O" && b5.current.innerText=="O" && b7.current.innerText=="O")
    {
      line7.current.style.visibility="visible"
    }

    if(b1.current.innerHTML!="" && b2.current.innerHTML!="" && b3.current.innerHTML!="" && b4.current.innerHTML!="" && b5.current.innerHTML!="" && b6.current.innerHTML!="" && b7.current.innerHTML!="" && b8.current.innerHTML!="" && b9.current.innerHTML!="" && winner.current.innerHTML=="")
    {
      winner.current.innerHTML="Match Drawn!"
      replayBtn1.current.style="visibility:visible"
    }
  }

  return (
    <>
      <div id='container'>
        <div id='turn' ref={turnBox}>
          <span>Choose First Turn:</span>
          <span>
            <button onClick={()=>{
                setTurn("X")
                turnBox.current.style="visibility:hidden"
                winner.current.innerHTML=""
                let boxes=document.querySelectorAll('.box');
                boxes.forEach((b)=>{
                  b.innerHTML=""
                })
              }}>X</button>
            <button className='ml-[10px]' onClick={()=>{
                setTurn("O")
                turnBox.current.style="visibility:hidden"
                winner.current.innerHTML=""
                let boxes=document.querySelectorAll('.box');
                boxes.forEach((b)=>{
                  b.innerHTML=""
                })
              }}>O</button>
          </span>
        </div>

        <div id='winner' ref={winner}></div>

        <div id='board'>
          <span id='line1' ref={line1}></span>
          <span id='line2' ref={line2}></span>
          <span id='line3' ref={line3}></span>
          <span id='line4' ref={line4}></span>
          <span id='line5' ref={line5}></span>
          <span id='line6' ref={line6}></span>
          <span id='line7' ref={line7}></span>
          <div onClick={boxClick} ref={b1} className='box border-r-[1px] border-b-[1px] border-black'>
          </div>
          <div onClick={boxClick} ref={b2} className='box border-r-[1px] border-b-[1px] border-black'></div>
          <div onClick={boxClick} ref={b3} className='box border-b-[1px] border-black'></div>
          <div onClick={boxClick} ref={b4} className='box border-r-[1px] border-b-[1px] border-black'></div>
          <div onClick={boxClick} ref={b5} className='box border-r-[1px] border-b-[1px] border-black'></div>
          <div onClick={boxClick} ref={b6} className='box border-b-[1px] border-black'></div>
          <div onClick={boxClick} ref={b7} className='box border-r-[1px] border-black'></div>
          <div onClick={boxClick} ref={b8} className='box border-r-[1px] border-black'></div>
          <div onClick={boxClick} ref={b9} className='box'></div>
        </div>

        <button id='replay' onClick={replay} ref={replayBtn1}>Replay</button>
      </div>
    </>
  )
}

export default App