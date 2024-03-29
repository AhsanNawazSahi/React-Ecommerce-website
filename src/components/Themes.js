import React from 'react';
import "../Main.css";
import theme_image1 from "../images/theme_image1.webp";
import theme_image2 from "../images/theme_image2.webp";
import theme_image3 from "../images/theme_image3.webp";
import theme_image4 from "../images/theme_image4.webp";
import theme_image5 from "../images/theme_image5.webp";
import theme_image6 from "../images/theme_image6.webp";
import theme_image7 from "../images/theme_image7.webp";
import theme_image8 from "../images/theme_image8.webp";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Themes = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div>
            <div className="container-lg text-center">
                <h2 className="my-4">
                    <b>THEMES</b>
                </h2>
                <div className="row my-5" data-aos="fade-up">
                    <div className="col collection_image mx-3">
                        <a href='/sellingProducts_model'>
                            <div className="aspect-ratio">
                                <img src={theme_image1} alt="Collection 1" className="img-fluid rounded" />
                            </div>
                        </a>
                    </div>
                    <div className="col collection_image mx-1">
                        <a href='/sellingProducts_model'>
                            <div className="aspect-ratio">
                                <img src={theme_image2} alt="Collection 2" className="img-fluid rounded" />
                            </div>
                        </a>
                    </div>
                    <div className="col collection_image mx-3">
                        <a href='/sellingProducts_model'>
                            <div className="aspect-ratio">
                                <img src={theme_image3} alt="Collection 3" className="img-fluid rounded" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="row justify-content-center my-5" data-aos="fade-up">
                    <div className="col-4 collection_image ">
                        <a href='/sellingProducts_model'>
                            <div className="aspect-ratio custom-aspect-ratio mx-2">
                                <img src={theme_image4} alt="Collection 4" className="img-fluid rounded" />
                            </div>
                        </a>
                    </div>
                    <div className="col-4 collection_image ">
                        <a href='/sellingProducts_model'>
                            <div className="aspect-ratio custom-aspect-ratio mx-2">
                                <img src={theme_image5} alt="Collection 4" className="img-fluid rounded" />
                            </div>
                        </a>
                    </div>
                    <div className="col-4 collection_image ">
                        <a href='/sellingProducts_model'>
                            <div className="aspect-ratio custom-aspect-ratio mx-2">
                                <img src={theme_image6} alt="Collection 4" className="img-fluid rounded" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="row justify-content-center my-4" data-aos="fade-up">
                    <div className="col-4 collection_image mx-3">
                        <a href='/sellingProducts_model'>
                            <div className="aspect-ratio custom-aspect-ratio">
                                <img src={theme_image7} alt="Collection 4" className="img-fluid rounded" />
                            </div>
                        </a>
                    </div>
                    <div className="col-4 collection_image ">
                        <a href='/sellingProducts_model'>
                            <div className="aspect-ratio custom-aspect-ratio">
                                <img src={theme_image8} alt="Collection 4" className="img-fluid rounded" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
};


export default Themes
