import React, { useState } from 'react';
import axios from 'axios';

export default props => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return <form onSubmit={ev => {
    ev.preventDefault();
    setLoading(true);
    axios.post("http://localhost:5000/api/login", {
      username,
      password
    }).then(res => {
      console.log(res);
      setError(false);
      setLoading(false);
      localStorage.setItem('token', res.data.token);
      props.history.push('/');
    }).catch(err => {
      console.log(err);
      setError(err);
      setLoading(false);
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
      placeholder="Password"
      value={password}
      onChange={ev => setPassword(ev.target.value)}
    />
    <button>Submit</button>
    {loading ? <p>Loading...</p> : null}
    {error ? <p style={{color: "red"}}>Error with credentials!</p> : null}
  </form>
}