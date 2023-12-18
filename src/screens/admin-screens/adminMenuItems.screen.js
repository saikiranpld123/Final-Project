
import  {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import RestService from "../../services/rest.service";


const AdminMenuItems=()=>{

    const [menuItems, setMenuItems]=useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        getMenuItems();
    },[])
    const getMenuItems=()=>{
        RestService.getMenuItems().then((response)=>{
            setMenuItems(response.data);
        })
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 py-5">
                    <button onClick={()=>{navigate("../create-menu")}} className="btn btn-dark">Create New</button>

                    <table className="table border">
                        <th>
                            Name
                        </th>
                        <th>
                            Price
                        </th>

                        <th>
                            Discount
                        </th>

                        <th>
                            Description
                        </th>

                        {menuItems.map((item)=>{
                            return (
                                <tr>
                                    <td>{item.itemName}</td>
                                    <td>{item.itemPrice}</td>
                                    <td>{item.discount}</td>
                                    <td>{item.description}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}



export default AdminMenuItems;