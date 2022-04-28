import React,{useState} from 'react';

import './CostFormComponents.css'

const CostFormComponents = () => {
    const [name, setName]=useState('');
    const [sum, setSum] = useState('');
    const [data,setData] = useState('');

    const nameChangeHandler =(event)=>{
        setName(event.target.value)
        console.log(name)
    };

    const sumChangeHandler=(event)=>{
        setSum(event.target.value)
        console.log(sum)
    }
    const dataChangeHandler=(event)=>{
        setData(event.target.value)
        console.log(data)
    }



    return <form>
        <div className={'new-cost__controls'}>

        <div className={'new-cost__control'}><label>Name</label>
            <input type="text" onChange={nameChangeHandler}/>
        </div>
            <div className={'new-cost__control'}><label>Sum</label>
                <input type="number" min={'0.01'} step={'0.01'} onChange={sumChangeHandler}/>
            </div>

            <div className={'new-cost__control'}><label>Data</label>
                <input type="date" min={'2019-01-01'} step={'2022-12-31'} onChange={dataChangeHandler}/>
            </div>
            <div className={'new-cost__actions'} type='submit'><button>Додати витрату</button> </div>


        </div>
    </form>
};

export {CostFormComponents};