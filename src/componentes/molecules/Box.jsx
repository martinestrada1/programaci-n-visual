import { useState } from "react";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import './Box.css'

function Box() {
    const [count,setCount] = useState(0)

    const handlerClick = ()=> {
        setCount(count+1)
    }
    return (
        <div className="box">
            <Label text={count}></Label>
            <Button caption="Incrementar" 
                    click={handlerClick}> </Button>
        </div>
      );
}

export default Box;
