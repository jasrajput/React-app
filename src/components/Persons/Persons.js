import React from "react";
import './Person.css';

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>I am {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type='text' value={props.name} onChange={props.change} />
        </div>
    )
};

export default person;
