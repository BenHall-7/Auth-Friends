import React, { useState } from 'react';

export default ({addFriend}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  return <form onSubmit={ev => {
    ev.preventDefault();
    addFriend({name, age, email});
  }}>
    <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={ev => setName(ev.target.value)}
    />
    <input
      type="text"
      placeholder="Age"
      value={age}
      onChange={ev => setAge(ev.target.value)}
    />
    <input
      type="text"
      placeholder="Email"
      value={email}
      onChange={ev => setEmail(ev.target.value)}
    />
    <button>Submit</button>
  </form>
}