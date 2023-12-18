import BannerComponent from "../components/banner.component";
import React, {useEffect, useState} from "react";
import RestService from "../services/rest.service";

const MenuScreen=()=>{


    const [menuItems, setMenuItems]=useState([]);
    useEffect(()=>{
        getMenuItems()
    },[]);


    const getMenuItems=()=>{
        RestService.getMenuItems().then((response)=>{
           setMenuItems(response.data)
        });
    }

    return(
        <div>
            <BannerComponent title={"Menu"}></BannerComponent>
            <br/>
            <div className="container">
                <div className="row">
                    {menuItems.map((menu)=>{
                        return(
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="py-2 px-3">
                                        <span className="h4">{menu.itemName}</span>
                                        <br/><span className="h6">Description:&nbsp;</span><span>{menu.description}</span>
                                        <br/><span className="h6">Price:&nbsp;</span><span>${menu.itemPrice}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <br/>
        </div>
    );
}


export default MenuScreen;