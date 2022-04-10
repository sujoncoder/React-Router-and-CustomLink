import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setfriends] = useState ([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setfriends(data))
    },[])
    return (
        <div>
           <h2>Dost good night:{friends.length}</h2>
           {
               friends.map(friend=> <Friend
               key={friend.id}
               friend={friend}
               ></Friend>)
           }
        </div>
    );
};

export default Friends;