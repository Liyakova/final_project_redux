import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/dishesSlice";

const Filter = ({category}) => {
    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={()=> dispatch(filterCategory(category))}
            className={selectedCategory === category ? "bntCategory selected" : "bntCategory"}>
                {category}
            </button>
        </div>
    )
}

export default Filter;