import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../axiosWithAuth';
import Friend from './Friend';

export default props => {
  let [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth().get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(() => {
        localStorage.setItem("token", null);
        props.history.push("/");
      });
  }, []);

  return <div>
    {friends.map(f => <Friend key={f.id} {...f}/>)}
  </div>
}