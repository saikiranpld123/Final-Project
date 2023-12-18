import { Outlet, useNavigate } from "react-router"
import { Link } from "react-router-dom";
const AdminDashboardScreen=()=>{

    const navigate=useNavigate();
    return(
        <div>
            <div className="container-fluid">
               
                <div className="row">
                    <div className="col-md-12 bg-dark">
                        <div className=" ">
                            <div className="py-3 px-3 h4 text-white">
                                Admin Console
                            </div>  
                        </div>
                    </div>
                    <div className="col-md-1 bg-dark">
                        <div className="sidenav">
                            <div className="py-3 px-3" >
                                <Link className="h6 nav-link text-white" to={"home"}>Home</Link>
                            </div>
                            <div className="py-3 px-3" >
                                <Link className="h6 nav-link  text-white" to={"menu"}>Menu</Link>
                            </div>
                            <div className="py-3 px-3" >
                                <Link className="h6 nav-link  text-white" to={"orders"}>Orders</Link>
                            </div>
                            <div className="py-3 px-3" >
                                <Link className="h6 nav-link  text-white" to={"users"}>Users</Link>
                            </div>
                            <div className="py-3 px-3" >
                                <button className="h6 nav-link  text-white" onClick={()=>{navigate("/admin/login")}}>Logout</button>
                            </div>
                          
                        </div>
                    </div>
                    <div className="col-md-11">
                        <Outlet/>
                    </div>
                </div>
            </div>
          
        </div>
    )
}



export default AdminDashboardScreen;