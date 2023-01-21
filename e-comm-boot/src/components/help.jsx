
import { useState } from "react";
import { XCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";


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
    const hello = props.wish.map((el, index) => {
        return (
            <div key={index}>
                <div className="d-flex text-dark align-items-center bg-primary m-2">
                    <img src={el.img} alt="" style={{ width: "100px", heigth: "50px" }} className="rounded-5 p-1" />
                    <div className="text-center p-2">
                        <div>{el.itemName}</div>
                        <div>{el.price}</div>
                    </div>
                    <button class="btn" onClick={() => {
                        console.log('remove from wish list');
                        props.setWish(
                            props.wish.filter(wish => wish.id !== el.id)
                        )
                    }}>
                        <XCircle />
                    </button>
                </div>


            </div>
        )
    })

    return (
        <>
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
                        <Link to="/signin" style={{ textDecoration: "none", color: "#Ffffff" }}>Sign Up</Link>
                    </div>
                    <div className="d-flex gap-2" >
                        <div>
                            <img src="images/heart.png" onClick={() => setList(!list)} alt="" />
                            {
                                list ?
                                    <div className="text-center" style={{ position: "absolute", zIndex: "1" }}>
                                        {hello}
                                    </div> : ""
                            }
                        </div>

                        <p className="m-0 rounded-circle bg-warning px-1">{props.wish.length}</p>
                    </div>
                    <div className="d-flex gap-2">
                        <img src="images/shopping-cart.png" alt="" />
                        <p className="m-0 rounded-circle bg-warning px-1">{props.cart.length}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Help, Search }
