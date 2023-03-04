
import './App.css';
import { Header } from './Components/Header/Header';
import { MainRoute } from './Components/MainRoute';
import { Navbar } from './Components/Navbar/Navbar';
// import { Footer } from './Components/Footer';
// import { Header } from './Components/Header/Header';
// import { Navbar } from './Components/Navbar/Navbar';
// import { ProductCat } from './Components/ProductCategory/ProductCat';
// import { ProductPart } from './Components/ProductPart/ProductPart';
import { Homepage } from './Pages/Homepage/Homepage';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
    <MainRoute />
    {/* <Homepage /> */}

    </div>
  );
}

export default App;
