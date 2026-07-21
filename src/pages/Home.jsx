import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Card from "../components/shared/Card";

function Home(){
    const [x,setX] = useState(15);
    const [name,setName]= useState("Nguyen Van An");
    const [product,setProduct] = useState({
        name: "",
        price: 0,
        stock: 1
    });
    const clickMe = ()=>{
        setX(x+1);// x = x+1
    }

    return (
        <Container>
            <h1>Home Page</h1>
            <h2>X = {x}</h2>
            <Button onClick={clickMe} variant="primary">Click me!</Button>
            <Card/>
            <Card/>
        </Container>
    )
}
export default Home;