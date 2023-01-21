import carData from "../Data/carData"
import HalfRating from "./ratingStar"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function myFrame({ cart, setCart, number, style }) {
    const added = cart.filter((cart) => cart === number)[0];
    return (
        <div className="container m-2 h-100 border rounded ">
            <div className="d-flex justify-content-evenly ">
                <div className="w-50 p-2">
                    <img className="img-fluid" src={carData[number].img} alt="" style={style} />
                </div>
                <div className="w-50 d-flex flex-column justify-content-center align-items-start">
                    <div>
                        {carData[number].itemName}
                    </div>
                    <div>

                        {carData[number].price}
                    </div>
                    <div>
                        <HalfRating />
                    </div>
                    <div style={{ backgroundColor: "#87BCD9", color: "#272727", padding: "8px 14px" }} className="rounded d-flex gap-3 align-items-center">
                        <div>
                            Add to Card
                        </div>
                        <button className="btn rounded-circle" style={{ backgroundColor: "#EDA415" }} onClick={() => {
                            if (!added) {
                                setCart([...cart, number])
                            } else {
                                setCart(cart.filter(c => c !== number))
                            }
                        }}>
                            {
                                added ? <ShoppingCartIcon /> : <AddShoppingCartIcon />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}