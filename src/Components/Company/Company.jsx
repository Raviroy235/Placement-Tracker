import { useState } from "react";
import './Company.css';
function Comp(){
    const [count, setCount] = useState(0)
    return(
        <>
        <div className="Comp">
            Manage Your Company
        </div>

        </>
    )
}
export default Comp
