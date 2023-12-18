
import { useEffect, useState } from "react";
import RestService from "../../services/rest.service";

const AdminUsersScreen=()=>{
    const [users, setUsers]=useState([]);

    useEffect(()=>{
        getUsersList();
    },[])
    const getUsersList=()=>{
        RestService.getAllUsers().then((response)=>{
            console.log(response.data);
            setUsers(response.data);
        })
    }
    return(
        <div className="py-3">
            <table className="table border">
                <th>
                    Name
                </th>
                <th>
                    Email
                </th>

                <th>
                    Created At
                </th>


                {users.map((item)=>{
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.createdTimeStamp}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}



export default AdminUsersScreen;