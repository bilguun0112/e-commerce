import { useState } from "react";
import Slider from "react-slick"
import carData from "../Data/carData"
import HalfRating from "./ratingStar";

const SubproductCard = (props) => {
    const [heart, setHeart] = useState(false)
    function handleClicker(baraa){
        props.setWish([...props.wish,baraa]);
    }
    function handleClickerRes(baraa){
       const filtered = props.wish.filter(medku => {
        if(medku !== baraa){
            return (
                medku
            )
        }
       })

       props.setWish([...filtered])
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
    const result = carData.map((item,idx) =>

        <div key={idx}>
            <div className="border border-1 rounded m-3">
                <div className="d-flex align-items-start justify-content-center p-3">
                    <img src={item.img} style={{ width: "60%", height: "55%" }} alt="" />
                    <div className="mt-4" >
                        {
                            heart ? 
                            <button onClick={()=> {handleClicker(item); setHeart(false)}} className="btn zero"><img src="images/heart.png" alt="" style={{ backgroundColor: "#B3D4E5" , borderRadius: "50%"}} className="p-2 " /></button>
                            : 
                            <button onClick={()=> {handleClickerRes(item); setHeart(true)}} className="btn zero"><img src="images/heart.png" alt="" style={{ backgroundColor: "green" , borderRadius: "50%"}} className="p-2 " /></button>
                        }
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

            <Slider {...settings}>
                {result}
            </Slider>
        </div>
    )


}

export default SubproductCard;