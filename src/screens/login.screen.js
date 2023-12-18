


import React, {useState, useEffect} from 'react';
import RestService from '../services/rest.service';


const LoginScreen=()=>{

    const loginUser=()=>{
        RestService.loginUser({email:email, password:password}).then((response)=>{
            
        }).catch((err)=>{
           
        })
    }
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="py-2 px-2">
                        <div className="py-2">
                            <label>Email</label>
                            <input type="text" className="col-md-4" placeholder="Email" onChange={(event)=>setEmail(event.value)}></input>
                        </div>
                        <div className="py-2">
                            <label>Password</label>
                            <input type="text" className="col-md-4" placeholder="Password" onChange={(event)=>setPassword(event.value)}></input>
                        </div>
                        <div className="py-2">
                            <button onClick={()=>loginUser()} className="btn btn-primary">Login</button> &nbsp;
                            <button className="btn btn-primary">Reset</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}



export default LoginScreen;