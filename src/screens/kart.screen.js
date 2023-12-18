

import React, {useEffect, useState} from "react";
import BannerComponent from "../components/banner.component";
import LoginModel from "../components/login.component";
import AuthService from "../services/auth.service";
import RestService from "../services/rest.service";
import Swal from 'sweetalert2';
const KartScreen=()=>{

    const [kartItems, setKartItems]=useState([]);
    const [showModel, setShowModel]=useState(false);
    const [arraivalDate, setArraivalDate]=useState(new Date())
    useEffect(()=>{
        getKartItems();
    }, [])

    const getKartItems=()=>{
        let items=sessionStorage.getItem("kart")?JSON.parse(sessionStorage.getItem("kart")):[];
        setKartItems(items);
    }

    const getKartItemsRenderer=()=>{
        return kartItems.map((item, index)=>{
            return (
            <div className="py-2">
                <div className="py-3 px-4  border">
                    <div className="d-flex">
                        <div key={String(index)} className="w-90" >
                            <br/>
                            {item.itemName}
                            <br/><br/>
                            <button onClick={()=>{deleteItem(item)}} className="btn btn-outline-primary">Remove From Cart</button>
                            <br/>
                        </div>

                        <div className=" w-10">
                            <div className="">
                                ${item.itemPrice} x {item.count} = $ {(parseInt(item.itemPrice)*parseInt(item.count))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )})

    }


    const deleteItem=(item)=>{
       let itemIndex=kartItems.findIndex(dataItem=>dataItem==item);
        kartItems.splice(0, itemIndex);
        sessionStorage.setItem("kart", JSON.stringify(kartItems));
    }
    const confirmOrder=()=>{
        let req={
            orderedItems:kartItems,
            customerArrivalTime:arraivalDate
        }
        console.log(req)

        if(AuthService.isUserLoggedIn())
            RestService.placeOrder(req).then((response)=>{
                console.log(response);
                Swal.fire("Success", "order placed successfully","success")
                sessionStorage.clear();
            }).catch(err=>{
                console.log(err);
            })
        else  setShowModel(true);
    }

    const handleCloseModel=(e)=>{
        setShowModel(e);
    }


    const getItemsTotalPrice=()=>{
        let totalPrice=0;
        kartItems.forEach((item)=>{
            totalPrice=totalPrice+(item.itemPrice*item.count)
        })
        return (
            
            <div className=" w-100">
                <div className="d-flex py-3 border">
                    <div className="w-90 h5 px-3">
                        Total Price
                    </div>
                    <div className="w-10">
                        $ {totalPrice}
                    </div>
                </div>
                <br/>
            </div>);
    }
    return (
        <div>
            <BannerComponent title={"Cart"}></BannerComponent>
            <br/>
            <div className="container ">
                <div className="h5">Enter Arraival Time</div>
                <input  type="datetime-local" onChange={(date)=>{setArraivalDate(date.target.value.toString())}} className="form-control"/>
                <br/>
                {kartItems.length==0?<div className="h1 text-center">No Items Found</div>:getKartItemsRenderer()}
                {kartItems.length==0?<div className="h1 text-center"></div>:getItemsTotalPrice()}
                <button className="btn btn-outline-primary" onClick={()=>{confirmOrder()}} >Confirm Order</button>
                <LoginModel onCloseModel={(e)=>handleCloseModel(e)} showModel={showModel}></LoginModel>
            </div>
            <br/>
        </div>
    )
}




export default KartScreen;