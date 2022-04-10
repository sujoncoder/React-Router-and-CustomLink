import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, id, username} = friend;

    const navigate = useNavigate()

    const showFriendsDetails = ()=>{
        const path = `/friend/${id}`
        navigate(path)
    }
    return (
        <div>
            <h2>{name}</h2>
            <Link to={`/friend/${id}`}>Click Details</Link>
            <button onClick={showFriendsDetails}>{username} id: {id}</button>
        </div>
    );
};

export default Friend;