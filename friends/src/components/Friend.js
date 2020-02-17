import React from 'react';

export default ({name, age, email}) => {
  return <div className='friend'>
    <p>{name}</p>
    <p>Age: {age}</p>
    <p>{email}</p>
  </div>
}