import { useSlotProps } from "@mui/base"
import { useState } from "react";
import wishList from "../Data/wish"


function Help() {
    return (
        <div className="container d-flex align-items-center justify-content-between my-3">
            <p className="m-0"> Need help? Call us: (+98) 0234 456 789 </p>
            <div className="d-flex align-items-center gap-4">
                <img src="images/location.png" alt="" />
                <p className="m-0">Our store</p>
                <img src="images/group.svg" alt="" />
                <p className="m-0">Track your order</p>
            </div>
        </div>
    )
}

function Search(props) {
    const [list, setList] = useState(false)

    const hello = props.wish.map(el => {
        return(
            <div className="d-flex text-dark align-items-center bg-primary m-2">
                <img src={el.img} alt="" style={{width: "100px",heigth: "50px"}} className="rounded-5 p-1"/>
                <div className="text-center p-2">
                    <div>{el.itemName}</div>
                    <div>{el.price}</div>
                </div>
            </div>
        )
    })

    console.log('myProps', props);
    return (
        <>
            <style type="text/css">
                {`

                `}
            </style>
            <div className="container search text-light d-flex justify-content-between px-5 py-3">
                <div className="d-flex align-items-center gap-5">
                    <img src="images/logo 1.png" alt="" />
                    <div class="input-group top-search" style={{ width: "27.375rem" }}>
                        <input type="text" class="form-control" placeholder="Search any things" aria-label="Search any things" aria-describedby="button-addon2" />
                        <button class="btn btn-warning text-light" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
                <div className="d-flex gap-3 align-items-center ">
                    <div className="d-flex gap-3">
                        <img src="images/user.png" alt="" />
                        <p className="m-0">Sign in</p>
                    </div>
                    <div className="d-flex gap-2" >
                        <div>
                            <img src="images/heart.png" alt="" onClick={()=> setList(true)} style={{position: "relative"}}/>
                            {
                                list ? 
                                <div style={{position: "absolute"}}>
                                    {hello}
                                    {/* <button className="btn btn-primary" onClick={()=> setList(false)}>Close</button> */}
                                </div> : ""
                            }
                        </div>

                        <p className="m-0 rounded-circle bg-warning px-1">{props.wish.length}</p>
                    </div>
                    <div className="d-flex gap-2">
                        <img src="images/shopping-cart.png" alt="" />
                        <p className="m-0 rounded-circle bg-warning px-1">0</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Help, Search }


{/* <div>
                <div className="border border-1 rounded m-3">
                    <div className="d-flex align-items-start justify-content-center p-3">
                        <img src={data.img} style={{ width: "60%", height: "55%" }} alt="" />
                        <button className="btn"><img src="images/heart.png" alt="" style={{ backgroundColor: "#B3D4E5" }} className="rounded-circle p-2 mt-4" /></button>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mx-2 p-3">
                        <div>
                            <h5>{data.itemName}</h5>
                            <h5>{data.price}</h5>
                            <div>
                                Rating StartD
                            </div>
                        </div>
                        <div>
                            <button className="btn rounded-circle p-2" style={{ backgroundColor: "#EDA415" }} ><img src="images/shopping-cart.png" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div> */}