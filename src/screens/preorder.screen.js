

import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import BannerComponent from '../components/banner.component';
import RestService from '../services/rest.service';
import { useNavigate } from 'react-router';
import AuthService from '../services/auth.service';
import LoginModel from '../components/login.component';
const PreOrderScreen=()=>{

    const [menuItems, setMenuItems]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        getMenuItems();
    },[]);


    const [kartItems, setKartItems]=useState([]);
    useEffect(()=>{
        getKartItems();
    }, [])

    const getKartItems=()=>{
        let items=sessionStorage.getItem("kart")?JSON.parse(sessionStorage.getItem("kart")):[];
        setKartItems(items);
    }

    const getMenuItems=()=>{
        RestService.getMenuItems().then((response)=>{
            let menuItems=response.data;
            menuItems=menuItems.map((item)=>{
                item.count=0;
                item.disabled=(kartItems.find((kartItem)=>item.id==kartItem.id))?true:false;
                //item.disabled=false;
                return item;
            })
            setMenuItems(menuItems);
        })
    }

    const addOrder=(item, index)=>{
        let allItems=[...menuItems];
        allItems[index].disabled=true;
        setMenuItems(allItems);
        let kartItems=sessionStorage.getItem("kart");
        console.log(kartItems);
        if(kartItems==undefined){
            sessionStorage.setItem("kart",JSON.stringify([item]));
        }else
        {
            let kartItemsArray=JSON.parse(kartItems);
            kartItemsArray.push(item);
            sessionStorage.setItem("kart",JSON.stringify(kartItemsArray))
        }
    }  
    const incrementMenuItemCount=(index)=>{
        let items=[...menuItems];
        items[index].count=items[index].count+1;
       setMenuItems(items);
    }
    const decrementMenuItemCount=(index)=>{
        let items=[...menuItems];
        if(items[index].count>0)
        items[index].count=items[index].count-1;
       setMenuItems(items);
    }
    const menuItem=(item, index)=>{
        return (
            <div key={String(item.id)}className="card">
                <div className="px-2 py-3 row">
                    <div className="col-md-8">
                        <span className="h4">{item.itemName}</span>
                        <br/><span className="h6">Description:&nbsp;</span><span>{item.description}</span>  
                        <br/><span className="h6">Price:&nbsp;</span><span>${item.itemPrice}</span>
                    </div>
                    <div className="col-md-2 text-center" >
                        <button className="btn btn-outline-primary" onClick={()=>{incrementMenuItemCount(index)}} > + </button>
                        <span className="py-3 px-3">{item.count}</span>
                        <button className="btn btn-outline-primary" disabled={item.count==0} onClick={()=>{decrementMenuItemCount(index)}} > - </button>
                        <br/>
                        <br/>
                        <button className="btn btn-outline-primary" disabled={item.count==0 || item.disabled} onClick={()=>addOrder(item, index)}>{item.disabled==true?'Added':"Add Order"}</button>
                    </div>

                </div>
            </div>
        )
    }


 

    return(
        <div>
        <BannerComponent title={"Pre Order"}></BannerComponent>
        <div className="container py-3">
        {menuItems.map((item, index)=>{
            return <div className="py-2" key={String(item.id)}>{menuItem(item, index)}</div>;    
        })}
        <button className="btn btn-outline-primary" onClick={()=>{navigate("/cart")}}>Place Order</button>
        </div>
        </div>
    )


  
}



export default PreOrderScreen;