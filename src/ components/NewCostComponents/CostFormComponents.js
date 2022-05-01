import React,{useState} from 'react';

import './CostFormComponents.css'

const CostFormComponents = (props) => {
    const [inputName, setInputName]=useState('');
    const [inputSum, setInputSum] = useState('');
    const [inputData,setInputData] = useState('');

    const nameChangeHandler =(event)=>{
        setInputName(event.target.value)
    };

    const sumChangeHandler=(event)=>{
        setInputSum(event.target.value)

    }
    const dataChangeHandler=(event)=>{
        setInputData(event.target.value)

    }
    
    
    const submitHandler = (event) => {
      event.preventDefault();

      const costData ={
          name: inputName,
          sum: inputSum,
          data: new Date(inputData)
      }

        props.onSaveCostData(costData)

      setInputName('');
       setInputSum('');
       setInputData('');
    }



    return <form onSubmit={submitHandler}>
        <div className={'new-cost__controls'}>

        <div className={'new-cost__control'}><label>Name</label>
            <input type="text" onChange={nameChangeHandler} value={inputName}/>
        </div>
            <div className={'new-cost__control'}><label>Sum</label>
                <input type="number" min={'0.01'} step={'0.01'} onChange={sumChangeHandler} value={inputSum}/>
            </div>

            <div className={'new-cost__control'}><label>Data</label>
                <input type="date" min={'2019-01-01'} step={'2022-12-31'} onChange={dataChangeHandler} value={inputData}/>
            </div>
            <div className={'new-cost__actions'} type='submit'><button>Додати витрату</button> </div>


        </div>
    </form>
};

export {CostFormComponents};