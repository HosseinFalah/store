import { useRef } from "react"
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { clearFiltersAction, filterBrandAction, filterCategoryAction, filterMultiRangeAction, filterRatingAction, filterStockAction } from "../../redux/actions/filters";

import { brands, categories, multi_range, ratings } from "../../Asset/data/products_filter";

import RatingsList from "../shared/RatingsList";

const FilterMenu = ({ filterCategory }) => {
  const inputRef = useRef(null);
  const categoryRef = useRef(null);
  const brandRef = useRef(null);
  
  const dispatch = useDispatch();
  const { multiRange } = useSelector((state) => state.filters);

  const filterRatinghandler = (rating) => dispatch(filterRatingAction(rating));
  const clearFiltershandler = () => dispatch(clearFiltersAction());
  const filterPirceHandler = (e) => dispatch(filterMultiRangeAction(e.target.value));
  const inStockHandler = () => dispatch(filterStockAction(inputRef.current));
  const categoryHnadler = (category) => dispatch(filterCategoryAction(category, categoryRef.current));
  const brandHandler = (category) => dispatch(filterBrandAction(category, brandRef.current));

  return (
    <div className="p-3">
      <div className="mt-3">
        <p className="text-muted">محدوده قیمت را انتخاب کنید (تومان)</p>
        {multi_range.map((item, counter) => (
          <div className="form-check lh-lg" key={uuidv4()}>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id={`flexRadioDefault${counter}`}
              value={item.range}
              onChange={(e) => filterPirceHandler(e)}
            />
            <label
              htmlFor={`flexRadioDefault${counter}`}
              className="form-check-label"
            >
              {item.display}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <p className="text-muted">دسته بندی ها</p>
        {categories.map((category, counter) => (
          <div key={uuidv4()} className="form-check lh-lg">
            <input 
              className="form-check-input"
              type="checkbox" 
              id={`flexRadio${counter}`}
              ref={categoryRef}
              onChange={() => categoryHnadler(category)}
              checked={filterCategory.category.includes(category.category)}
              />
            <label className="form-check-label" htmlFor={`flexRadio${counter}`}>{category.display}</label>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <p className="text-muted">برندها</p>
        {brands.map((brand, counter) => (
          <div key={uuidv4()} className="form-check lh-lg">
            <input 
              className="form-check-input" 
              type="checkbox" 
              id={`flexRadioBrand${counter}`}
              ref={brandRef}
              onChange={() => brandHandler(brand)}
              checked={filterCategory.brand.includes(brand.brand)}
              />
            <label className="form-check-label" htmlFor={`flexRadioBrand${counter}`}>{brand.display}</label>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <p className="text-muted">رتبه بندی ها</p>
        {ratings.map(rating => (
          <div key={uuidv4()} onClick={() => filterRatinghandler(rating.rating)}>
            <RatingsList rating={rating.rating}/>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <div className="form-check form-switch">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="flexSwitchCheckDefault"
            ref={inputRef}
            onChange={inStockHandler}
            checked={filterCategory.stock === true}
            />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">فقط کالا های موجود در انبار</label>
        </div>
      </div>
      <div className="mt-3">
        <button className="btn btn-primary" onClick={clearFiltershandler}>پاک کردن فیلترها</button>
      </div>
    </div>
  );
};

export default FilterMenu;