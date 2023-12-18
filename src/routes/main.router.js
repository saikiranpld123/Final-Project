import HomeScreen from "../screens/home.screen";

import { BrowserRouter as   Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from "../components/headers.component";
import AboutScreen from "../screens/about.screen";
import FooterComponent from "../components/footer.component";
import MenuScreen from "../screens/menu.screen";
import PreOrderScreen from "../screens/preorder.screen";
import ContactScreen from "../screens/contact.screen";
import KartScreen from "../screens/kart.screen";
import MyOrdersScreen from "../screens/myOrders.screen";
const MainRoute=()=>{
    return ( 
        <div>
        <HeaderComponent/>
        <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="/about" element={<AboutScreen/>}/>
            <Route path="/menu-items" element={<MenuScreen/>}/>
            <Route path="/pre-order" element={<PreOrderScreen />}/>
            <Route path="/cart" element={<KartScreen/>} />
            <Route path="/contact-us" element={<ContactScreen />}/>
            <Route path="/myOrders" element={<MyOrdersScreen/>} />
        </Routes>
        <FooterComponent></FooterComponent>
       
        </div>
    )
}



export default MainRoute;