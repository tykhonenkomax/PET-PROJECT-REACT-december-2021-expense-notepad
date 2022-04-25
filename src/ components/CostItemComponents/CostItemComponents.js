import React from 'react';
import './CostItem.css'

const CostItemComponents = (props) => {



    return (
        <div className="cost-item">
            <div>{props.date.toISOString()}</div>
        <div className="cost-item__description">
            <h2>{props.description}</h2>
            <div className="cost-item__price">${props.amount}</div>
        </div>
        </div>
    );
};

export {CostItemComponents};