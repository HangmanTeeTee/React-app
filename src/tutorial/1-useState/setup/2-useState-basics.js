import React, { useState } from 'react';

const UseStateBasics = () => {
// console.log(useState('hello world'));
// const value = useState(1)[0];
//const value = useState(1)[1];
// return <h2>useState basic example</h2>;
const [text,setText] = useState('random title');

const handleClick = () =>{
  if (text==='random title'){
    setText('hello world');
  }
  else{
    setText('random title')
  }
};
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
