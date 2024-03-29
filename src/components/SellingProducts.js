import React from 'react';
import "../Main.css";
import sellingproduct_image1 from "../images/sellingproduct_image1.webp";
import sellingproduct_image2 from "../images/sellingproduct_image2.webp";
import sellingproduct_image3 from "../images/sellingproduct_image3.webp";
import sellingproduct_image4 from "../images/sellingproduct_image4.webp";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const SellingProducts = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div id='selling_products'>
            <div className="container">
                <div className="container text-center">
                    <h2><b>Bestselling Products</b></h2>
                </div>
                <div className="container mt-5" data-aos="fade-up">
                    <div className='sellingproducts'>
                        <div className="row row-cols-1 row-cols-md-4 g-3" id='sellingproduct_container1'>
                            <div className="col">
                                <a href="/Marvel_Tshirt" style={{ textDecoration: "none" }}>
                                    <div className="card h-75 w-80 pb-5 card_boxShadow card_hight1" id='card_hight1'>
                                        <img src={sellingproduct_image1} className="card-img-top h-75" alt="..." />
                                        <div className="card-body">
                                            <p style={{ color: "#95b7b2" }} className="card-text">New Product</p>
                                            <h5 className="card-title" style={{ color: "#e95598" }}> <b> Marvel T-Shirt</b></h5>
                                            <h5 className="card-title" style={{ color: "black" }} > <del>Rs.950</del> Rs.849</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="/Naruto_Tshirt" style={{ textDecoration: "none" }}>
                                    <div className="card h-75 w-80 pb-5 card_boxShadow card_hight1" id='card_hight2'>
                                        <img src={sellingproduct_image2} className="card-img-top h-75" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text" style={{ color: "#95b7b2" }}>New Product</p>
                                            <p className="card-title h5" style={{ color: "#e95598" }}> <b> Naruto T-Shirt</b></p>
                                            <p className="card-title h5" style={{ color: "black" }}> <del>Rs.1150</del> Rs.949</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="/WingsOfFreedom" style={{ textDecoration: "none" }}>
                                    <div className="card h-75 w-80 pb-5 card_boxShadow card_hight1" id='card_hight3'>
                                        <img src={sellingproduct_image3} className="card-img-top h-75" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text" style={{ color: "#95b7b2" }}>New Product</p>
                                            <p className="card-title h5" style={{ color: "#e95598" }}> <b> Wings of Free...</b></p>
                                            <p className="card-title h5" style={{ color: "black" }} > <del>Rs.1050</del> Rs.849</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col ">
                                <a href="/SwagDekh" style={{ textDecoration: "none" }}>
                                    <div className="card h-75 w-80 pb-5 card_boxShadow card_hight1" id='card_hight5'>
                                        <img src={sellingproduct_image4} className="card-img-top h-75" alt="..." />
                                        <div className="card-body pb-5">
                                            <p className="card-text" style={{ color: "#95b7b2" }}>New Product</p>
                                            <p className="card-title h5" style={{ color: "#e95598" }}> <b> SwagDekh... </b></p>
                                            <p className="card-title h5" style={{ color: "black" }}  > <del>Rs.950</del> Rs.549</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SellingProducts;



