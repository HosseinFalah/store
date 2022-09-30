import { useEffect, useState } from "react";

import { AiOutlineBars } from "react-icons/ai";
import { FiGrid } from "react-icons/fi";
import { useLayout } from "../../hook/Layout";

const Tabs = () => {
    const { productsListLayout, changeProductsListLayout } = useLayout();

    const [activeTabList, setActiveListTab] = useState(false);
    const [activeTabGrid, setActiveGridTab] = useState(false);

    const GridTabHandler = () => {
        setActiveGridTab(!false);
        setActiveListTab(!true);
        changeProductsListLayout("grid");
    }
    
    const ListTabHandler = () => {
        setActiveListTab(!false);
        setActiveGridTab(!true);
        changeProductsListLayout("list");
    }

    useEffect(() => {
        productsListLayout === "list" && setActiveListTab("list")
    }, []);

    return (
        <div className="btn-group">
            <button 
                className={`btn ${activeTabGrid ? "btn-primary" : "btn-outline-primary"}`}
                onClick={GridTabHandler}>
                <FiGrid/>
            </button>
            <button 
                className={`btn ${activeTabList ? "btn-primary" : "btn-outline-primary"}`}
                onClick={ListTabHandler}>
                <AiOutlineBars/>
            </button>
        </div>
    )
}

export default Tabs