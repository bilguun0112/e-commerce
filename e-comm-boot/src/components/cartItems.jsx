export default function CartItems() {

    return (
        <div className="d-flex align-items-center py-4" style={{ borderBottom: "2px solid #C3C3C3" }}>
            <div className="d-flex align-items-center justify-content-between" style={{ width: "32.7%" }} >
                <img style={{ width: "136px", height: "119px" }} src="https://i.ebayimg.com/images/g/TcwAAOSwo1FgWKIa/s-l400.jpg" alt="" />
                <div className="d-flex flex-column gap-3">
                    <div>Play game</div>
                    <div>Color : Green</div>
                    <div>Size : 30</div>
                </div>
            </div>
            <div className="text-center" style={{ width: "18.65%" }} >
                Price
            </div>
            <div className="text-center" style={{ width: "18.65%" }} >
                Quantity
            </div>
            <div className="text-center" style={{ width: "30%", textAlign: "center" }} >
                Subtotal
            </div>
            <button>x</button>
        </div>
    )
}