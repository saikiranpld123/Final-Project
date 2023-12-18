

import React , {useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import RestService from '../../services/rest.service';

const CreateMenuScreen=()=>{


    const [formData, setFormData]=useState({});
    const saveItemMenu=()=>{
        let data=formData;
        data.imagePath="";
        return RestService.addMenuItem(formData).then((response)=>{
            Swal.fire("Success", "Item added successfullly", "success");
        })
    }
    return(
        <div className="container py-4">
            <div className="row ">
                <div className="col-md-6">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder={"Enter Name"} onChange={(e)=>{ setFormData({...formData, ...{itemName:e.target.value}})}} className="form-control"></input>
                </div>
                <div className="col-md-6">
                    <label>Price</label>
                    <input type="text" className="form-control" placeholder={"Enter Price"}  onChange={(e)=>{ setFormData({...formData, ...{itemPrice:e.target.value}})}} className="form-control"></input>
                </div>
                <div className="col-md-6">
                    <label>Discount</label>
                    <input type="text" className="form-control" placeholder={"Enter Discount"}  onChange={(e)=>{ setFormData({...formData, ...{discount:e.target.value}})}} className="form-control"></input>
                </div>
                <div className="col-md-6">
                    <label>Description</label>
                    <input type="text" className="form-control" placeholder={"Enter Description"}  onChange={(e)=>{ setFormData({...formData, ...{description:e.target.value}})}} className="form-control"></input>
                </div>
              
            </div>
            <br/>
                <button onClick={()=>{saveItemMenu()}} className="btn btn-primary">Save</button>
        </div>
    )
}


export default CreateMenuScreen;