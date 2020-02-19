import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../axiosWithAuth';
import Friend from './Friend';
import AddFriendForm from './AddFriendForm';

export default props => {
  let [friends, setFriends] = useState([]);

  const catchErr = () => {
    localStorage.setItem("token", null);
    props.history.push("/");
  }

  const getFriends = () => {
    axiosWithAuth().get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      }).catch(catchErr);
  }

  const addFriend = ({name, age, email}) => {
    axiosWithAuth().post("http://localhost:5000/api/friends", {
      name, age, email
    }).then(res => {
      setFriends(res.data);
    }).catch(catchErr);
  }

  const putFriend = ({name, age, email, id}) => {
    console.log(name);
    axiosWithAuth().put(`http://localhost:5000/api/friends/${id}`, {
      name, age, email
    }).then(res => {
      console.log(res);
      setFriends(res.data);
    }).catch(catchErr);
  }

  const delFriend = ({id}) => {
    axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`).then(res => {
      setFriends(res.data);
    }).catch(catchErr);
  }

  useEffect(() => {
    getFriends();
  }, []);

  return <div>
    <AddFriendForm addFriend={addFriend}/>
    {friends.map(f => <Friend
      key={f.id} {...f}
      delFriend={delFriend}
      putFriend={putFriend}
    />)}
  </div>
}