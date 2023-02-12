import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Dashboard} from "./Admin/DashBoard/Dashboard"

import { AddProduct } from './Admin/AddProduct/AddProduct'
import { AdminRoute } from './Admin/AdminRoute/AdminRouts'
import { Order } from './Admin/Order/Order'


export const AdminPageRoute = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminRoute />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Order />} />
        <Route path="addproduct" element={<AddProduct />} />
      </Route>
    </Routes>
  )
}