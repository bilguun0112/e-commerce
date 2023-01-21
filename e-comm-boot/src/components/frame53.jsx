import carData from "../Data/carData"
import HalfRating from "./ratingStar"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MyFrame from './textFrame'
export default function Frame53({ cart, setCart }) {
    // function myFrame2(number) {
    //     const added = props.cart.filter((cart) => cart.id === number.id)[0];
    //     return (
    //         <div className="container m-2 h-100 border rounded ">
    //             <div className="d-flex justify-content-evenly ">
    //                 <div className="w-50 p-2">
    //                     <img className="img-fluid" src={carData[number].img} alt="" />
    //                 </div>
    //                 <div className="w-50 d-flex flex-column justify-content-center align-items-start">
    //                     <div>
    //                         {carData[number].itemName}
    //                     </div>
    //                     <div>
    //                         {carData[number].price}
    //                     </div>
    //                     <div>
    //                         <HalfRating />
    //                     </div>
    //                     <div style={{ backgroundColor: "#87BCD9", color: "#272727", padding: "8px 14px" }} className="rounded d-flex gap-3 align-items-center">
    //                         <div>
    //                             Add to Card
    //                         </div>
    //                         <button className="btn rounded-circle" style={{ backgroundColor: "#EDA415" }} onClick={() => {
    //                             if (!added) {
    //                                 props.setCart([...props.cart, number])
    //                             } else {
    //                                 props.setCart(props.cart.filter(c => c !== number))
    //                             }
    //                         }}>
    //                             {
    //                                 added ? <ShoppingCartIcon /> : <AddShoppingCartIcon />
    //                             }
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
    // function myFrame1(number) {
    //     const add = props.cart.filter((cart) => cart.id === number.id)[0];
    //     return (
    //         <div className="container m-2 h-100 border rounded">
    //             <div className="d-flex justify-content-evenly p-3">
    //                 <div className="w-50">
    //                     <img className="img-fluid" style={{ height: "474px" }} src={carData[number].img} alt="" />
    //                 </div>
    //                 <div className="d-flex flex-column justify-content-center align-items-start">
    //                     <div>
    //                         {carData[number].itemName}
    //                     </div>
    //                     <div>
    //                         {carData[number].price}
    //                     </div>
    //                     <div>
    //                         <HalfRating />
    //                     </div>
    //                     <div style={{ backgroundColor: "#87BCD9", color: "#272727", padding: "8px 14px" }} className="rounded d-flex gap-4 align-items-center">
    //                         <div>
    //                             Add to Card
    //                         </div>
    //                         <button className="btn rounded-circle" style={{ backgroundColor: "#EDA415" }} onClick={() => {
    //                             if (!add) {
    //                                 props.setCart([...props.cart, number])
    //                             } else {
    //                                 props.setCart(props.cart.filter(c => c !== number))
    //                             }
    //                         }}>
    //                             {
    //                                 add ? <ShoppingCartIcon /> : <AddShoppingCartIcon />
    //                             }
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }




    return (
        <>
            <style type="text/css">
                {`
            .smallCard{
                height: 250px;
              }
            `}
            </style>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className="row">
                            <MyFrame number={8} cart={cart} setCart={setCart} style={{ height: "474px" }} />
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="smallCard">
                            <MyFrame number={28} cart={cart} setCart={setCart} />
                        </div>
                        <div className="smallCard">
                            <MyFrame number={18} cart={cart} setCart={setCart} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}