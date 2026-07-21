import { useState } from "react";
import { Button } from "react-bootstrap";

function Card(props){
    const [count,setCount] = useState(0);
    const increment = ()=>{
        setCount(count+1);
    }
    return (
        <div className="item">
            <h2>Count: {count}</h2>
            <Button onClick={increment} variant="danger">Increment</Button>
        </div>
    )
}

export default Card;