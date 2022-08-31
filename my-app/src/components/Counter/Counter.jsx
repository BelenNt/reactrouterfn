import { useState } from "react";

const Counter = () => {
    const [myNumber, setMyNumber] = useState(0);
    const sum = () => {
        setMyNumber(myNumber + 1)
        console.log("Se está ejecutando")
    }
    const sub = () => {
        setMyNumber(myNumber - 1)
        console.log("Se está ejecutando")
    }
    return (
        < >
            <button onClick={sum}>+</button>
            {myNumber}
            <button onClick={sub}>-</button>
        </>
    );
};
export default Counter;