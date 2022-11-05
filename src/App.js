
import './App.css';
import Cart from './Components/Cart/Cart';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filter/AllCategories';
import Footer from './Footer';

function App() {
  return (
    <div>
      <div className="App">
        <div className='block scroll'>
          <AllCategories />
          <hr/>
          <Cart />
        </div>

        <div className='block scroll'>
          <Dishes />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
