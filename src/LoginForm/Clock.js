import React from 'react';
import {useState} from 'react';

let time = new Date().toLocaleTimeString();
let date = new Date().toLocaleDateString();

function Clock() {
    const [ctime, setCTime] = useState(time);

    setInterval(()=>{
        time = new Date().toLocaleTimeString();
        setCTime(time)
    },1000);
    
    return (
        <div>
            <p className="time"> {ctime} </p>
            <p className="date">{date}</p>
        </div>
    )
}

export default Clock
