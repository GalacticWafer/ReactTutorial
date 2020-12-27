import React, {useState} from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message'
  });

  // individual state handlers
  const [name, setName] = useState('peter');
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState('random message');
  setMessage('hello world');


const changeMessage = () => {
  // object state handler, using the spread operator to leave the other fields of person alone and only change the message
  // setPerson({...person, message:  'hello world'});

  // use this version to use the individual state handlers
  setMessage('hello world');
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
