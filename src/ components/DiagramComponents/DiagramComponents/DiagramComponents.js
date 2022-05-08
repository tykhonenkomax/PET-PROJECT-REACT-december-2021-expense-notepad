import React from 'react';

import './Diagram.css'
import {BarComponents} from "../BarComponents";

const DiagramComponents = (props) => {

    const dataSetsValues = props.dataSets.map(dataSet=>dataSet.value);

    const maxMonthCosts =Math.max(...dataSetsValues);

    return (
        <div className={'diagram'}>
            {
                props.dataSets.map((dataSet)=>(
              <BarComponents
                key={dataSet.label}
                value={dataSet.value}
                maxValue={maxMonthCosts}
                lable={dataSet.label}
                />
                ))}

        </div>
    );
};

export {DiagramComponents};