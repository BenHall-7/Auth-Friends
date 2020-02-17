import React from 'react';

export default ({name, age, email}) => {
  return <div>
    <p>{name}</p>
    <p>Age: {age}</p>
    <p>{email}</p>
  </div>
}