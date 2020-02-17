import React, { useState } from 'react';

export default ({login}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return <form onSubmit={() => {
    login({
      username,
      password
    })
  }}>
    <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={ev => setUsername(ev.target.value)}
    />
    <input
      type="text"
      placeholder="Username"
      value={password}
      onChange={ev => setPassword(ev.target.value)}
    />
    <button>Submit</button>
  </form>
}