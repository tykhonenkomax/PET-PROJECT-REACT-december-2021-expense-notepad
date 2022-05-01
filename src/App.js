import {CostComponents, NewCostComponents} from "./ components";
import {CostFilterComponents} from "./ components/CostFilterComponents/CostFilterComponents";

const App = () => {

    const cost = [
        {
            id: 'c1',
            date: new Date(2021, 2, 12),
            description: 'Холодильник',
            amount: 999.9
        },
        {
            id: 'c2',
            date: new Date(2021, 11, 25),
            description: 'McBook',
            amount: 1254.72
        },
        {
            id: 'c3',
            date: new Date(2021, 12, 10),
            description: 'Land Rover Discovery',
            amount: 10000.00
        }
    ]

    const addCostHandler = (cost) => {
        console.log('________________')
        console.log(cost)
        console.log('________________')
    }






    return (
        <div>
            <NewCostComponents onAddCost={addCostHandler}/>

            <CostComponents cost={cost}/>

        </div>
    );
}

export default App;
