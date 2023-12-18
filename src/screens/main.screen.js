import { Outlet } from "react-router"
import FooterComponent from "../components/footer.component";
import HeaderComponent from "../components/headers.component";

const MainScreen=()=>{
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    )
}


export default MainScreen;