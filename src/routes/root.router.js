import { BrowserRouter as   Router, Routes, Route } from 'react-router-dom';
import AboutScreen from '../screens/about.screen';
import AdminScreen from '../screens/admin-screens/admin.screen';
import AdminDashboardScreen from '../screens/admin-screens/adminDashboard.screen';
import AdminHome from '../screens/admin-screens/adminHome.screen';
import AdminLogin from '../screens/admin-screens/adminLogin.screen';
import AdminMenuItems from '../screens/admin-screens/adminMenuItems.screen';
import AdminOrders from '../screens/admin-screens/adminOrders.screen';
import AdminUsersScreen from '../screens/admin-screens/adminUsers.screen';
import CreateMenuScreen from '../screens/admin-screens/createMenu.screen';
import ContactScreen from '../screens/contact.screen';
import HomeScreen from '../screens/home.screen';
import KartScreen from '../screens/kart.screen';
import MainScreen from '../screens/main.screen';
import MenuScreen from '../screens/menu.screen';
import MyOrdersScreen from '../screens/myOrders.screen';
import PreOrderScreen from '../screens/preorder.screen';
import AdminRouter from "./admin.router";
import MainRoute from "./main.router";


const RootRoute=()=>{
    return (
        <div>
            <Router>
                <Routes>
                    <Route path={"/"} element={<MainScreen/>}>
                        <Route path="/" element={<HomeScreen/>} />
                        <Route path="/about" element={<AboutScreen/>}/>
                        <Route path="/menu-items" element={<MenuScreen/>}/>
                        <Route path="/pre-order" element={<PreOrderScreen />}/>
                        <Route path="/cart" element={<KartScreen/>} />
                        <Route path="/contact-us" element={<ContactScreen />}/>
                        <Route path="/myOrders" element={<MyOrdersScreen/>} />
                    </Route>
                    <Route path={"/admin"} element={<AdminScreen/>}>
                        <Route path={"login"} element={<AdminLogin/>}/>
                        <Route path={"/admin/dashboard"} element={<AdminDashboardScreen/>}>
                            <Route path={"home"} element={<AdminHome/>}/>
                            <Route path={"menu"} element={<AdminMenuItems></AdminMenuItems>}/>
                            <Route path={"orders"} element={<AdminOrders></AdminOrders>}/>
                            <Route path={"users"} element={<AdminUsersScreen/>}/>
                            <Route path={"create-menu"} element={<CreateMenuScreen/>}/>
                        </Route>
                        
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}


export default RootRoute;