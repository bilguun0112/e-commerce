import { XCircle } from "react-bootstrap-icons"
import Quantity from "./quantity"
import { useState } from "react"

export default function CartItems({ name, price, img, cart, setCart, item, upSub }) {

    const [count, setCount] = useState(1)
    const added = cart.filter((cart) => cart === item)[0];
    const subtotal = Number({ count }.count) * Number(price);


    return (
        <div className="d-flex align-items-center py-4" style={{ borderBottom: "2px solid #C3C3C3" }}>
            <div className="d-flex align-items-center justify-content-between" style={{ width: "40.7%" }} >
                <img style={{ width: "136px", height: "119px" }} src={img} alt="" />
                <div className="d-flex flex-column gap-3 w-50">
                    <div>{name}</div>
                    <div>Color : Green</div>
                    <div>Size : 30</div>
                </div>
            </div>
            <div className="text-center" style={{ width: "18.65%" }} >
                {price} $
            </div>
            <div className="text-center" style={{ width: "18.65%" }} >
                <Quantity count={count} setCount={setCount} />
            </div>
            <div className="text-center" style={{ width: "22%", textAlign: "center" }} >
                {upSub(subtotal)} {subtotal} $
            </div>
            <button className="btn" onClick={() => {
                if (!added) {
                    setCart([...cart, item])
                } else {
                    setCart(cart.filter(c => c !== item))
                }
            }}> <XCircle /></button>
        </div>
    )
}