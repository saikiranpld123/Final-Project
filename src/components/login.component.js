import React, { useEffect, useState } from 'react';
import "../App.css";
import ImageConstants from '../constants/images.constants';
import RestService from '../services/rest.service';
const LoginModel = (props) => {
  console.log(props)
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
const [showModel, setShowModel]=useState(false);
const [isLogin, setIsLogin]=useState(true);
 useEffect(()=>{
    if(props.showModel!== showModel){
      setShowModel(props.showModel);
    }
 },[props.showModel, showModel])
 const handleSubmit = async (e) => {
    e.preventDefault();
    RestService.loginUser({email:email, password:password}).then((res)=>{
      localStorage.setItem("token",res.data.token);
      props.onCloseModel(false)
      setShowModel(false);
    },err=>{
      console.log(err);
    })
 };

 return (
<>
   {showModel ?(<div className="login-model">
      
      <div className="model">
      <h2>{isLogin?"Login":"Register"}</h2>
      <button className="login-model-close-btn" onClick={()=>{
          props.onCloseModel(false)
          setShowModel(false);

}}><img className="login-model-close" src={ImageConstants.closeIcon} /></button>
      {isLogin?(<form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
          <button type="submit"  className="btn btn-primary">
            Login
          </button>
          <div className="text-center bold">
            or
          </div>
          <button onClick={()=>{
            setIsLogin(false);
          }} className="btn btn-primary">
          Register Now
        </button>
      </form>):
      (<form>
        <div className="py-2">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Enter Name"></input>
        </div>
        <div className="py-2">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter Email"></input>
        </div>
        <div className="py-2">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter Password"></input>
        </div>
        <button className="btn btn-primary">Register</button>
        <div className="py-2 text-center">or</div>
        <button className="btn btn-primary" onClick={()=>{
          setIsLogin(true);
        }}>Back To Login</button>
      </form>)}
    </div>
    </div>):<></>}
</>
 );
};

export default LoginModel;