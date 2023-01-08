import products from "../Data/products"
import AliceCarousel from 'react-alice-carousel'
import SubproductCard from "./subProductCard"

export default function ProductCard() {
   
        return (
            <div>
                <SubproductCard
                    items="dragon" />
            </div>

        )
}


{/* <div className="border border-1 rounded m-3">
                            <div className="d-flex align-items-start justify-content-center p-3">
                                <img src={subData.img} style={{ width: "60%", height: "55%" }} alt="" />
                                <button className="btn"><img src="images/heart.png" alt="" style={{ backgroundColor: "#B3D4E5" }} className="rounded-circle p-2 mt-4" /></button>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mx-2 p-3">
                                <div>
                                    <h5>{subData.itemName}</h5>
                                    <h5>{subData.price}</h5>
                                    <div>
                                        Rating StartD
                                    </div>
                                </div>
                                <div>
                                    <button className="btn rounded-circle p-2" style={{ backgroundColor: "#EDA415" }} ><img src="images/shopping-cart.png" alt="" /></button>
                                </div>
                            </div>
                        </div> */}
