import React from 'react';


import './CoatList.css'
import {CostItemComponents} from "../CostItemComponents";

const CoatListComponents = (props) => {


    if (props.cost.length ===0){
        return <h2 className={'cost-list__fallback'}>
            В цьому році витрат немає!
        </h2>
    }



    return (
       <ul className={'cost-list'}>
           {
               props.cost.map((costs) => (
                   <CostItemComponents
                       key={costs.id}
                       cost={costs.date}
                       description={costs.description}
                       amount={costs.amount}
                   />
               ))
           }
       </ul>
    );
};

export {CoatListComponents};