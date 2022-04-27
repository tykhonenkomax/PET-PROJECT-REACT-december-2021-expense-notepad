import React from 'react';

import './CostItem.css'
import {CostDateComponents} from "../CostDateComponents";
import {CardComponents} from "../CardComponents";

const CostItemComponents = (props) => {

    return (
        <CardComponents className="cost-item">
            <CostDateComponents date={props.date}/>
        <div className="cost-item__description">
            <h2>{props.description}</h2>
            <div className="cost-item__price">${props.amount}</div>
        </div>
        </CardComponents>
    );
};

export {CostItemComponents};