import React from 'react';

const userInput = (props) =>{
const style = {
  border : '2px solid blue'
};

  return (
    <div className='UserInput' >
      <input type='text' style={style} onChange={props.changed} value={props.value} />
    </div>
  )
}

export default userInput;
