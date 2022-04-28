import React,{useState} from 'react';

import './CostItem.css'
import {CostDateComponents} from "../CostDateComponents";
import {CardComponents} from "../CardComponents";

const CostItemComponents = (props) => {
    const [description, setDescription]=useState(props.description);
    console.log("Text in component definition!")

const changeDescriptionHandLer =()=>{
setDescription('New Cost!')
}
    return (
        <CardComponents className="cost-item">
            <CostDateComponents date={props.date}/>
        <div className="cost-item__description">
            <h2>{description}</h2>
            <div className="cost-item__price">${props.amount}</div>
        </div>
            <button onClick={changeDescriptionHandLer}>Change</button>
        </CardComponents>
    );
};

export {CostItemComponents};