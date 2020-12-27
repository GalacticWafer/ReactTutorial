import React, {useState} from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message'
  });

  const [name, setName] = useState('peter');
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState('random message');

const changeMessage = () => {
  /*
   // Object state handler, using the spread operator to leave the other fields of person alone and only change the message
  setPerson({...person, message:  'hello world'});
   */

  // Use this version to use the individual state handlers
  if(message === 'hello world') {
    setMessage('goodbye world');
  } else {
    setMessage('hello world');
  }
};

  return (<>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className='btn' onClick={() => changeMessage()}>
      change message
    </button>
  </>)
};

export default UseStateObject;
