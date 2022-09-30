import { v4 as uuidv4 } from "uuid";

const SelectBox = ({menuData, sortProduct}) => {
    return (
        <select className="form-select me-2" defaultValue={'DEFAULT'} onChange={(e) => sortProduct(e.target.value)}>
            <option value="DEFAULT">مرتب سازی</option>
            {menuData.map(item => (
                <option key={uuidv4()} value={item}>{item}</option>
            ))}
        </select>
    )
}

export default SelectBox