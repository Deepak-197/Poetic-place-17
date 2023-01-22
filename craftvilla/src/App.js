import './App.css';
import { AddProduct } from './Components/Admin/AddProduct/AddProduct';
import { Dashboard } from './Components/Admin/DashBoard/Dashboard';
import { AdminRoute } from './Components/Admin/AdminRoute/AdminRouts';
import { AdminPageRoute } from './Components/AdminPageRoute';
import { Order } from './Components/Admin/Order/Order';

function App() {
  return (
    <div className="App">
      <> 
      {/* <Order/> */}
      <AdminPageRoute/> 
      {/* <AdminRoute/> */}
      {/* <AddProduct/> */}
      {/* <Dashboard/> */}
      </>
    </div>
  );
}

export default App;
