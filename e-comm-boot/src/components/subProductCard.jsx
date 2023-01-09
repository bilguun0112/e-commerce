import Slider from "react-slick"
import carData from "../Data/carData"
import HalfRating from "./ratingStar";

const SubproductCard = () => {
    const settings = {
        className: "center",
        centerMode: false,
        infinite: false,
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
                        <button className="btn"><img src="images/heart.png" alt="" style={{ backgroundColor: "#B3D4E5" }} className="rounded-circle p-2 mt-4" /></button>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mx-2 p-3">
                        <div>
                            <div>{item.itemName}</div>
                            <div>{item.price}</div>
                            <div>
                                <HalfRating/>
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
