import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState ({});

    useEffect (()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    return (
        <div>
           <h1>This is FriendDetails: {friendId}</h1>
           <h2>Name:{friend.name}</h2>
           <h2>Name:{friend.username}</h2>
           <h3>E-mail:{friend.email}</h3>
           <h4>Address:{friend.address?.street}</h4>
           <h5>Address:{friend.address?.geo.lat}</h5>
        </div>
    );
};

export default FriendDetails;