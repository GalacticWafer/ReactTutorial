import React, {useState} from 'react';
// use
// component name must be uppercase
// must be in the function/component body (i.e., inside UseStateBasics() function)
// cannot call conditionally

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const state = useState(1);
  // const value = state[0];
  // const handlerFunction = state[1];
  // console.log(value, handlerFunction);
  const [text, setText] = useState("random title");

  const handleClick= () => {
    if(text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
