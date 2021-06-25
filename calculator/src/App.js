import {useState} from 'react'
import './App.css';

const App = () => {

  const [result,setResult] =useState("")  

  const yazmaq =(e)=>{
    setResult(result.concat(e.target.name))
  }

  const clear =()=>{
    setResult("")
  }

  const backspace=()=>{
    setResult(result.slice(0,result.length-1))
  }


  const hesablamaq=()=>{
    try{
      setResult(eval(result).toString());  
    }
    catch(error)
    {
      setResult("error");
    }
  }

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
      <div className="calculator">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keyboard">
        <div className="row1">
          <button onClick={clear} className="element" id="clear">Clear</button>
          <button onClick={backspace} className="num element">C</button>
          <button onClick={yazmaq} name="/" className=" num element">/</button>
        </div>
        <div className="row2">
          <button onClick={yazmaq} name="7" className="num">7</button>
          <button onClick={yazmaq} name="8" className="num">8</button>
          <button onClick={yazmaq} name="9" className="num">9</button>
          <button onClick={yazmaq} name="*" className="num element">x</button>
        </div>
        <div className="row3">
          <button onClick={yazmaq} name="4" className="num">4</button>
          <button onClick={yazmaq} name="5" className="num">5</button>
          <button onClick={yazmaq} name="6" className="num">6</button>
          <button onClick={yazmaq} name="-" className="num element">-</button>
        </div>
        <div className="row4">
          <button onClick={yazmaq} name="1" className="num">1</button>
          <button onClick={yazmaq} name="2" className="num">2</button>
          <button onClick={yazmaq} name="3" className="num">3</button>
          <button onClick={yazmaq} name="+" className="num element">+</button>
        </div>
        <div className="row5">
          <button onClick={yazmaq} name="0" className="num">0</button>
          <button onClick={yazmaq} name="." className="num">.</button>
          <button onClick={hesablamaq} id="beraber" name="=" className="element">=</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App;
