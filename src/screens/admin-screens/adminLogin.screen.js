
import React,{useEffect, useState} from "react";
import { useNavigate, useNavigation } from "react-router";


const AdminLogin=()=>{

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const navigate=useNavigate();
    const loginAdmin=()=>{

        if(email=="admin@gmail.com" && password=="Welcome@123")
        {
            navigate("/admin/dashboard/home")
        }
    }

    return(
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4">
                        
                    </div>
                    <div className="col-md-4">
                        <div className="card py-5 border">
                            <div className="py-3 px-3"> 
                                <div className="h3">Login</div>
                                <br/>
                                <label>Email</label>
                                <input type="text" placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}} className="form-control"></input>
                                <br/>
                                <label>Password</label>
                                <input type="text" placeholder="Enter Password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control"></input>
                                <br/>
                                <button onClick={()=>loginAdmin()} className="btn btn-primary">Login</button>
                            </div>

                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AdminLogin;