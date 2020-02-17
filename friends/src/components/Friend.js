import React, { createRef, useState, useEffect } from 'react';

export default ({name, age, email, id, putFriend, delFriend}) => {
  let [nameSelected, setNameSelected] = useState(false);
  let [nameInput, setNameInput] = useState(name);
  let nameRef = createRef();

  useEffect(() => {
    if (nameSelected) {
      nameRef.current.focus();
    }
  }, [nameSelected]);

  return <div className='friend'>
    {!nameSelected ? 
      <p onClick={() => {
        setNameSelected(true);
      }}>{name}</p>
    :
      <input ref={nameRef}
        type="text"
        placeholder="New Name"
        value={nameInput}
        onChange={ev => setNameInput(ev.target.value)}
        onKeyDown={ev => {
          if (ev.key === "Escape") {
            setNameSelected(false);
            setNameInput(name);
          } else if (ev.key === "Enter") {
            setNameSelected(false);
            putFriend({name: nameInput, age, email, id});
          }
        }}
        onBlur={() => {
          setNameSelected(false);
          setNameInput(name);
        }}
      />}
    <button onClick={() => {delFriend({id});}}>Delete :(</button>
    <p>Age: {age}</p>
    <p>{email}</p>
  </div>
}