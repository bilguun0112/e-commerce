import { XCircle } from "react-bootstrap-icons"

export default function CartItems({ name, price, img }) {

    return (
        <div className="d-flex align-items-center py-4" style={{ borderBottom: "2px solid #C3C3C3" }}>
            <div className="d-flex align-items-center justify-content-between" style={{ width: "32.7%" }} >
                <img style={{ width: "136px", height: "119px" }} src={img} alt="" />
                <div className="d-flex flex-column gap-3">
                    <div>{name}</div>
                    <div>Color : Green</div>
                    <div>Size : 30</div>
                </div>
            </div>
            <div className="text-center" style={{ width: "18.65%" }} >
                {price}
            </div>
            <div className="text-center" style={{ width: "18.65%" }} >
                Quantity
            </div>
            <div className="text-center" style={{ width: "30%", textAlign: "center" }} >
                Subtotal
            </div>
            <button className="btn"> <XCircle /></button>
        </div>
    )
}