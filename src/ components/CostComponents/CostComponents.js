import React, {useState} from 'react';

import {CostItemComponents} from "../CostItemComponents";
import './Cost.css'
import {CardComponents} from "../CardComponents";
import {CostFilterComponents} from "../CostFilterComponents";


const CostComponents = (props) => {

    const[selectYear, setSelectYear]=useState('2021')

    const changeYearHandler = (year) => {
     setSelectYear(year);
    }

    return (
        <div>
        <CardComponents className={'costs'}>

            <CostFilterComponents year={selectYear} onChangeYear={changeYearHandler}/>
            {
                props.cost.map(costs =>
                <CostItemComponents
                    date={costs.date}
                    description={costs.description}
                    amount={costs.amount}
                />)
            }
        </CardComponents>
        </div>

    );
};

export {CostComponents};