import {useState} from 'react'

const ManageData = () => {

    let someData = 10;

    const [number, setNumber] = useState(15)

    return(
        <div>
            <div>
                <p>valor {someData}</p>
                <button onClick={() => (someData = 15)}>Mudar variavel</button>
            </div>
            <div>
                <p>valor {number}</p>
                <button onClick={() => setNumber(25)}> Mudar o State</button>
            </div>
        </div>
    );
}

export default ManageData;