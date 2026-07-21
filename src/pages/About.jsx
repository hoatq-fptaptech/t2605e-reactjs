import { useState } from "react";

function About(){
    const [x,setX] = useState(10);
    return (
        <>
            <h1>About Page</h1>
            <h2>X = {x}</h2>
        </>
    )
}
export default About;