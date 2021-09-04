import { useState } from "react"

export function Button (){
   
        const [cont, setCont] = useState(0);

        function Incre(){
            setCont(cont + 1);
            console.log(cont)
        }
        return(
        <button onClick={Incre}>
            {cont}
        </button>
    )
}