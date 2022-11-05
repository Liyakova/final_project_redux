import Filter from "./Filter";
import logo from './logo.svg';

const AllCategories = () => {
    return(
        <div className="categories">
            <img src={logo} alt="logo" className="logo"/>
            <h2>Наше меню:</h2>
            <div className="menuBtn">
                {['ЗАКУСКИ', 'САЛАТЫ', 'ОСНОВНЫЕ БЛЮДА', 'ДЕСЕРТЫ', 'ВСЕ']
                .map((category, index) => 
                    <div key={index}>
                        <Filter category={category}/>
                    </div> )}
            </div>

            
        </div>
    )
}

export default AllCategories;