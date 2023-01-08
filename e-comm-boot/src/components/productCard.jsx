import products from "../Data/products"
import AliceCarousel from 'react-alice-carousel'

export default function ProductCard() {
    // const datas = products.items.map(data => {
    //     return (
    //         <div className="col-4">
    //             <div className="border border-1 rounded m-3">
    //                 <div className="d-flex align-items-start justify-content-center p-3">
    //                     <img src={data.img} style={{ width: "60%", height: "55%" }} alt="" />
    //                     <button className="btn"><img src="images/heart.png" alt="" style={{ backgroundColor: "#B3D4E5" }} className="rounded-circle p-2 mt-4" /></button>
    //                 </div>
    //                 <div className="d-flex align-items-center justify-content-between mx-2 p-3">
    //                     <div>
    //                         <h5>{data.itemName}</h5>
    //                         <h5>{data.price}</h5>
    //                         <div>
    //                             Rating StartD
    //                         </div>
    //                     </div>
    //                     <div>
    //                         <button className="btn rounded-circle p-2" style={{ backgroundColor: "#EDA415" }} ><img src="images/shopping-cart.png" alt="" /></button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // })




    return (
        <div className="row">
           <div className="col-4">
                <div className="border border-1 rounded m-3">
                    <div className="d-flex align-items-start justify-content-center p-3">
                        <img src="images/81.jpg" style={{ width: "60%", height: "55%" }} alt="" />
                        <button className="btn"><img src="images/heart.png" alt="" style={{ backgroundColor: "#B3D4E5" }} className="rounded-circle p-2 mt-4" /></button>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mx-2 p-3">
                        <div>
                            <h5>z</h5>
                            <h5>x</h5>
                            <div>
                                Rating StartD
                            </div>
                        </div>
                        <div>
                            <button className="btn rounded-circle p-2" style={{ backgroundColor: "#EDA415" }} ><img src="images/shopping-cart.png" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}