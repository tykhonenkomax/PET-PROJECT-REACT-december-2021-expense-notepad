import {CostComponents} from "./ components";

function App() {

    const cost=[
        {
            date: new Date(2021, 2, 12),
            description: 'Холодильник',
            amount: 999.9
        },
        {
            date: new Date(2021, 11, 25),
            description: 'McBook',
            amount: 1254.72
        },
        {
            date: new Date(2021, 12, 10),
            description: 'Land Rover Discovery',
            amount: 10000.00
        }
    ]


  return (
    <div>

        <CostComponents cost={cost}/>

    </div>
  );
}

export default App;
