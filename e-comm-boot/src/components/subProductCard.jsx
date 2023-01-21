
import Slider from "react-slick"
import carData from "../Data/carData"
import HalfRating from "./ratingStar";
import { BalloonHeart, BalloonHeartFill } from 'react-bootstrap-icons';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const SubproductCard = (props) => {


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
    const result = carData.map((item, idx) => {

        const liked = props.wish.filter((wish) => wish.id === item.id)[0];
        const added = props.cart.filter((cart) => cart.id === item.id)[0];
        return (

            <div key={idx}>
                <div className="border border-1 rounded m-3">
                    <div className="d-flex align-items-start justify-content-evenly p-3">
                        <img src={item.img} style={{ width: "60%", height: "55%" }} alt="" />
                        <div className="mt-4" >
                            <button onClick={() => {

                                if (!liked) {
                                    props.setWish([...props.wish, item])
                                } else {
                                    props.setWish(props.wish.filter(w => w !== item))
                                }
                            }} className="btn">
                                {
                                    liked ? <BalloonHeartFill /> : <BalloonHeart />
                                }
                            </button>
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
                            <button className="btn rounded-circle p-2" style={{ backgroundColor: "#EDA415" }} onClick={() => {
                                if (!added) {
                                    props.setCart([...props.cart, item])
                                } else {
                                    props.setCart(props.cart.filter(c => c !== item))
                                }
                            }}>{
                                    added ? <ShoppingCartIcon /> : <AddShoppingCartIcon />
                                }</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


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