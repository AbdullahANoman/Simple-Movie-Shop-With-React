import React, { useEffect, useState } from 'react';

const SideCart = ({watchTime}) => {
    const [time,setTime] = useState()
    useEffect(()=>{
        const value = localStorage.getItem("watch-time")
        setTime(value)
    })
    return (
        <div>
            <h1>Time Is : {time}</h1>
        </div>
    );
};

export default SideCart;