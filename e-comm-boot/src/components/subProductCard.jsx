import { useState } from "react";
import Slider from "react-slick"
import carData from "../Data/carData"
import HalfRating from "./ratingStar";
import wishList from "../Data/wish";
import { Search } from "./help";

const SubproductCard = (props) => {

    function handleClicker(id){
        console.log('clicked', id);
        // event.preventDefault();
        // console.log(event);
        const product = {
            productId : id.id
        }
        props.setWish([...props.wish,product]);


        
    }



    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 1000,
        rows: 2,
        autoplay: true,
        slidesPerRow: 2,
        dots: true,
    };
    const result = carData.map(item =>

        <div>
            <div className="border border-1 rounded m-3">
                <div className="d-flex align-items-start justify-content-center p-3">
                    <img src={item.img} style={{ width: "60%", height: "55%" }} alt="" />
                    <div className="mt-4" >
                        <button onClick={()=> {handleClicker(item)}} className="btn zero"><img src="images/heart.png" alt="" style={{ backgroundColor: "#B3D4E5" , borderRadius: "50%"}} className="p-2 " /></button>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mx-2 p-3">
                    <div>
                        <div>{item.itemName}</div>
                        <div>{item.price}</div>
                        <div>
                            <HalfRating />
                        </div>
                    </div>
                    <div>
                        <button className="btn rounded-circle p-2" style={{ backgroundColor: "#EDA415" }} ><img src="images/shopping-cart.png" alt="" /></button>
                    </div>
                </div>
            </div>
        </div>

    )

    return (
        <div>
            {/* <style type="text/css">
                {`
                .zero:focus {
                    border: none;
                    outline: none;
                }
                `}
            </style> */}
            <Slider {...settings}>
                {result}
            </Slider>
        </div>
    )


}

export default SubproductCard;
