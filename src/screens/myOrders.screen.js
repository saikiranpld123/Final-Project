import { useEffect, useState } from "react";
import BannerComponent from "../components/banner.component";
import HeaderComponent from "../components/headers.component";
import RestService from "../services/rest.service";


function OrderedItem(props){
   // const [isOpen, setIsOpen]=useState(false);
   useEffect(()=>{
    console.log(props)
   },[])
   const [isOpen, setIsOpen]=useState(false);
    return (
        <div className="container  py-2">
            <div className=" row">
                <div className="col-md-4" >ORD{props.item.id}</div>
                <div className="col-md-4"  >$ {props.item.totalPrice}</div>
                <div className="col-md-4"  ><button className="btn btn-dark" onClick={()=>{setIsOpen(!isOpen)}}>{isOpen?"Close":"Open"}</button></div>
                 {isOpen?<div className="col-md-8 ">
                        <div className="container">
                            <div className="h4">Ordered Items</div>
                            <table className="table">
                            {props.item.orderedItems.map((dataItem)=> {
                                return (<tr>
                                            <td>{dataItem?.itemName}</td>
                                            <td>$ {dataItem?.price}</td>
                                            <td>{dataItem?.quantity}</td>
                                        </tr>)
                            })}
                            </table>
                        </div>
                 </div>:<></>}
            </div>
        </div>
    )
}

const MyOrdersScreen=()=>{

    const [orders, setOrders]=useState([]);
    useEffect(()=>{
        getOrders();
    },[])

    const getOrders=()=>{
        RestService.getCustomerOrders().then((res)=>{
            console.log(res.data)
            setOrders(res.data);

        },err=>{
            setOrders([]);
        })
    }


    return (
        <div>
            <BannerComponent title={"My Orders"}></BannerComponent>
            <div className="py-3">
               {orders.map((itemData)=>{
                   return (<OrderedItem item={itemData}></OrderedItem>);
               })}
            </div>
        </div>
    );
}


export default MyOrdersScreen;