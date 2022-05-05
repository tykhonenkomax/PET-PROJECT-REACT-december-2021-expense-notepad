import React from 'react';

import './NewCostComponents.css'
import './CostFormComponents'
import {CostFormComponents} from "./CostFormComponents";


const NewCostComponents = (props) => {
    
    const saveCostDataHandler = (inputCostData) => {
        const costData ={
            ...inputCostData,
            id: Math.random().toString()

        }
        props.onAddCost(costData)

    }


    

    return (
        <div className={'new-cost'}>
<CostFormComponents onSaveCostData={saveCostDataHandler}/>
        </div>
    )
};

export {NewCostComponents};