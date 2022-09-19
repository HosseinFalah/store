import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const QuantityInput = ({qty, increment, decrement }) => {
    return (
        <div className="bg-ligth shadow d-flex justify-content-between align-items-center border border-1 rounded rounded-1 overflow-hidden w-25">
            <button type="button" className="btn" onClick={increment}><AiOutlinePlus/></button>
            <b>{qty}</b>
            <button type="button" className="btn" onClick={decrement}><AiOutlineMinus/></button>
        </div>
    )
}

export default QuantityInput;