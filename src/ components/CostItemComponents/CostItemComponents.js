import React from 'react';

import './CostItem.css'
import {CostDateComponents} from "../CostDateComponents";

const CostItemComponents = (props) => {

    return (
        <div className="cost-item">
            <CostDateComponents date={props.date}/>
        <div className="cost-item__description">
            <h2>{props.description}</h2>
            <div className="cost-item__price">${props.amount}</div>
        </div>
        </div>
    );
};

export {CostItemComponents};