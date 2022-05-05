import React, {useState} from 'react';

import './NewCostComponents.css'
import './CostFormComponents'
import {CostFormComponents} from "./CostFormComponents";


const NewCostComponents = (props) => {

  const[isFormVisible,setIsFromVisible] = useState(false);

    const saveCostDataHandler = (inputCostData) => {
        const costData ={
            ...inputCostData,
            id: Math.random().toString()
        };
        props.onAddCost(costData);
    };


    const inputCostDataHandler =()=>{
        setIsFromVisible(true);
    }
    
    const cancelCostHandler = () => {
      setIsFromVisible(false)
    }

    return (
        <div className={'new-cost'}>
            {
              !isFormVisible && ( <button onClick={inputCostDataHandler}>Додати нову витрату</button>)
            }
            {
              isFormVisible && <CostFormComponents onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler}/>
            }
        </div>
    )
};

export {NewCostComponents};