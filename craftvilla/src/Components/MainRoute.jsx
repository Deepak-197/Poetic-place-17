import React from 'react';
import {Route, Routes} from "react-router-dom";
import { Homepage } from '../Pages/Homepage/Homepage';
import ProductPage from '../Pages/ProductPage';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import AddToCart from './Add to cart/AddToCart';
import { AddProduct } from './Admin/AddProduct/AddProduct';
import { AdminRoute } from './Admin/AdminRoute/AdminRouts';
import { Dashboard } from './Admin/DashBoard/Dashboard';
import { Order } from './Admin/Order/Order';


export const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/product' element={<ProductPage />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        {/* <Route path='/Admin' element={<AdminRoute/>} />
        <Route path ='/dashboard' element={<Dashboard/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/> */}
        <Route path="/addtocart" element={<AddToCart/>}/>
        <Route path="/admin" element={<AdminRoute />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Order />} />
        <Route path="addproduct" element={<AddProduct />} />
        </Route>

      </Routes>
    </div>
  )
}
