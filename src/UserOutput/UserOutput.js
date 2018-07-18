import React from 'react';

const UserOutput = (props) => {
  return(
    <div className='UserOutput'>
      <p>first paragraph</p>
      <p onClick = {props.click} > Username is : {props.username}</p>
    </div>
  )
}

export default UserOutput;
