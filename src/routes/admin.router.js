
import React from "react";
import { BrowserRouter as   Router, Routes, Route } from 'react-router-dom';
import AdminHome from "../screens/admin-screens/adminHome.screen";
import AdminMenuItems from "../screens/admin-screens/adminMenuItems.screen";
import AdminOrders from "../screens/admin-screens/adminOrders.screen";
import AdminLogin from "../screens/admin-screens/adminLogin.screen";
const AdminRouter=()=>{
    return(
        <div className="container-fluid">
            <div className="row">
            
                <div className="col-md-12">
                    <Routes>
                        <Route path={"/"} element={<AdminLogin/>}/>
                        <Route path={"/home"} element={<AdminHome/>}></Route>
                        <Route path={"/menu"} element={<AdminMenuItems></AdminMenuItems>}></Route>
                        <Route path={"/orders"} element={<AdminOrders></AdminOrders>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
}


export default AdminRouter;