import React, { useState } from 'react'
import "./calculator.css"

const Calculator = () => {
    const [newValue,setValue] = useState('');
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div>
            <input type="text" value={newValue} className="text_input" />
          </div>
          <div>
            <input type="button" value="AC"  onClick={e => setValue("")}/>
            <input type="button" value="DEl"  onClick={e => setValue(newValue.slice(0,-1))}/>
            <input
              type="button"
              value="."
              onClick={(e) => setValue(newValue + e.target.value)}
            />
            <input
              type="button"
              value="/"
              onClick={(e) => setValue(newValue + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="7"
              onClick={(e) => setValue(newValue + e.target.value)}
            />
            <input
              type="button"
              value="8"
              onClick={(e) => setValue(newValue + e.target.value)}
            />
            <input
              type="button"
              value="9"
              onClick={(e) => setValue(newValue + e.target.value)}
            />
            <input
              type="button"
              value="*"
              onClick={(e) => setValue(newValue + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              onClick={(e) => setValue(newValue + e.target.value)}
            />
            <input
              type="button"
              value="5"
              onClick={(e) => setValue(newValue + e.target.value)}
            />
            <input
              type="button"
              value="6"
              onClick={(e) => setValue(newValue + e.target.value)}
            />
            <input
              type="button"
              value="+"
              onClick={(e) => setValue(newValue + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="1"
              onClick={(e) => setValue(newValue + e.target.value)}
            />
            <input
              type="button"
              value="2"
              onClick={(e) => setValue(newValue + e.target.value)}
            />
            <input
              type="button"
              value="3"
              onClick={(e) => setValue(newValue + e.target.value)}
            />
            <input
              type="button"
              value="-"
              onClick={(e) => setValue(newValue + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="00"
              onClick={(e) => setValue(newValue + e.target.value)}
            />
            <input
              type="button"
              value="0"
              onClick={(e) => setValue(newValue + e.target.value)}
            />
            <input type="button" value="=" className="equal" onClick={e => setValue(eval(newValue))} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculator;
