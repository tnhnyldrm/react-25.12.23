import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';


function ProductDetail(props,{ images }) {
    const [productDetail, setProductDetail] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        axiosGet();
    }, []);

    const axiosGet = async () => {
        let response = await axios.get("https://dummyjson.com/products/" + id);
        setProductDetail(response.data);
        //console.log(response.data);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        {productDetail && (
                            <>
                                <img
                                    src={productDetail.thumbnail}
                                    className="card-img-top img-fluid"
                                    alt={productDetail.title}
                                    style={{ maxWidth: "100%", margin: "0 auto" }}
                                />
                                
                                <div className="card-body">
                                    <h1 className="card-title">{productDetail.title}</h1>
                                    <h5 className="card-text">{productDetail.description}</h5>
                                    <h5 className="card-text">{productDetail.price}₺</h5>
                                    {/* Diğer detayları buraya ekleyebilirsiniz */}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;