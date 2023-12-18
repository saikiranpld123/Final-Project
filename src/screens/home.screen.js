

import React, { useState, useEffect } from "react";
import ImageConstants from "../constants/images.constants";
import AuthService from "../services/auth.service";
import RestService from "../services/rest.service";
const HomeScreen = () => {


    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        getMenuItems();
    }, [])


    const getMenuItems = () => {
        RestService.getMenuItems().then((response) => {
            setMenuItems(response.data);
        })
    }


    return (
        <div>
            <img src={ImageConstants.bannerImage} className="banner-img w-100" />
            <div class="banner-content">
                <h1 className="text-white">Our Place</h1>
            </div>
            <div className="services">
                <div className="container  py-5 px-4">
                    <div className="col-md-12">
                        <div className="text-center h1">Our Services</div>
                        <div className="row py-5">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className=" py-2 px-2">
                                        <h6>High-quality ingredients</h6><br />
                                        We source only the freshest and highest-quality ingredients for our dishes, ensuring that each bite is
                                        packed with flavor and nutrition.
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 ">

                                <div className="card">
                                    <div className=" py-2 px-2">
                                        <h6>Diverse menu options</h6>
                                        Our menu features a wide range of options, from classic comfort foods to contemporary cuisine, ensuring that
                                        there's something for everyone.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">

                                <div className="card">
                                    <div className=" py-2 px-2">
                                        <h6>Customizable meals</h6>
                                        We understand that dietary needs and preferences can vary, so we offer customizable meal options to
                                        accommodate any special requests.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">

                                <div className="card">
                                    <div className=" py-2 px-2">
                                        <h6>Excellent customer service</h6>

                                        Our friendly and knowledgeable staff is always ready to answer any questions you may have and provide
                                        personalized recommendations.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">

                                <div className="card">
                                    <div className=" py-2 px-2">
                                        <h5>Affordable prices:</h5> We believe that great food should be accessible to everyone, which is why we
                                        strive to keep our prices affordable without sacrificing quality.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">

                                <div className="card">
                                    <div className=" py-2 px-2">
                                        <h5>Comfortable atmosphere:</h5> Our restaurant is designed to create a warm and inviting atmosphere that
                                        will make you feel at home. Whether you're dining with friends or having a romantic dinner for two, our
                                        space is the perfect setting for any occasion.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}


export default HomeScreen;