import React from 'react'
import './style.css';
import FormParent from './Form/FormParent';
import Clock from './Clock'
function Parent() {
    return (
        <div className="container">
            <div className="box1">
                <Clock />
            </div>
            <div className="box2">
                <FormParent />
            </div>
        </div>
    )
}

export default Parent
