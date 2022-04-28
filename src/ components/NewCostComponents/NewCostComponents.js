import React from 'react';

import './NewCostComponents.css'
import './CostFormComponents'
import {CostFormComponents} from "./CostFormComponents";
const NewCostComponents = () => {

    return (
        <div className={'new-cost'}>
<CostFormComponents/>
        </div>
    );
};

export {NewCostComponents};