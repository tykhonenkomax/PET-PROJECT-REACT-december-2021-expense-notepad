import React from 'react';


import './CoatList.css'
import {CostItemComponents} from "../CostItemComponents";

const CoatListComponents = (props) => {



    if (props.costs.length === 0){
        return <h2 className={'cost-list__fallback'}>
            В цьому році витрат немає!
        </h2>
    }



    return (
       <ul className={'cost-list'}>
           {
               props.costs.map((cost) => (
                   <CostItemComponents
                       key={cost.id}
                       cost={cost.date}
                       description={cost.description}
                       amount={cost.amount}
                   />
               ))
           }
       </ul>
    );
};

export {CoatListComponents};