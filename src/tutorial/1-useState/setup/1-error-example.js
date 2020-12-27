import React from 'react';

const ErrorExample = () => {
  const handleClick = () => {
    title = 'hello people';
    console.log(title);
  };

  let title = 'random title';
  return <React.Fragment>
    <h2>{title}</h2>
    <button className='btn' onClick={handleClick}>
      change title
    </button>
  </React.Fragment>;
};

export default ErrorExample;
