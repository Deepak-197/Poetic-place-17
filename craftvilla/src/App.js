
import './App.css';
import { Header } from './Components/Header/Header';
import { MainRoute } from './Components/MainRoute';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
    <MainRoute />

    </div>
  );
}

export default App;
