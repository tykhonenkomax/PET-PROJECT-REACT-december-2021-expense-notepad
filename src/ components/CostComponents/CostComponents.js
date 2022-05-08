import React, {useState} from 'react';


import './Cost.css'
import {CardComponents} from "../CardComponents";
import {CostFilterComponents} from "../CostFilterComponents";
import {CoatListComponents} from "../CoatListComponents/CoatListComponents";
import {CostsDiagramComponents} from "../CostsDiagramComponents";




const CostComponents = (props) => {

    const[selectYear, setSelectYear]=useState('2021')

    const changeYearHandler = (year) => {
     setSelectYear(year);
    };
    
    const filteredCosts = props.cost.filter((costs)=>
    {
     return costs.date.getFullYear().toString() === selectYear;

    })

    return (
        <div>
        <CardComponents className={'costs'}>
            <CostFilterComponents year={selectYear} onChangeYear={changeYearHandler}/>
            <CostsDiagramComponents costs={filteredCosts}/>
            <CoatListComponents costs={filteredCosts}/>

        </CardComponents>
        </div>
    );
};

export {CostComponents};