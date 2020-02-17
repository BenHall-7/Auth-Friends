import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../axiosWithAuth';
import Friend from './Friend';
import AddFriendForm from './AddFriendForm';

export default props => {
  let [friends, setFriends] = useState([]);

  const getFriends = () => {
    axiosWithAuth().get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(() => {
        localStorage.setItem("token", null);
        props.history.push("/");
      });
  }

  const addFriend = ({name, age, email}) => {
    axiosWithAuth().post("http://localhost:5000/api/friends", {
      name, age, email
    }).then(res => {
      setFriends(res.data);
    }).catch(err => {
      localStorage.setItem("token", null);
      props.history.push("/");
    })
  }

  useEffect(() => {
    getFriends();
  }, []);

  return <div>
    <AddFriendForm addFriend={addFriend}/>
    {friends.map(f => <Friend key={f.id} {...f}/>)}
  </div>
}