import axiosInstance from "../configs/axios.config";



const RestService={};


RestService.getMenuItems=()=>{
    return axiosInstance.get("/menu/get-menu-items")
}

RestService.postItems=()=>{
    return axiosInstance.get("/menu/get-menu-items");
}

RestService.registerUser=(userDetails)=>{
    return axiosInstance.post("/menu/post")
}


RestService.loginUser=(userCredentials)=>{
    return axiosInstance.post("/customers/login-customer", userCredentials);
}

RestService.getUserOrders=(userOrders)=>{
    return axiosInstance.post("", userOrders);
}

RestService.placeOrder=(items)=>{
    return axiosInstance.post("/orders/place-order", items);
}


RestService.getOrderedItems=()=>{
    return axiosInstance.get("/orders/get-all-orders");
}


RestService.getCustomerOrders=()=>{
    return axiosInstance.get("/orders/get-customer-orders");
}


RestService.getAllUsers=()=>{
    return axiosInstance.get("/customers/get-all-customers");
}

RestService.addMenuItem=(data)=>{
    return axiosInstance.post("menu/add-menu-item",data)
}


export default RestService;