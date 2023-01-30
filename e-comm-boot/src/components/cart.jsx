import { Button } from "react-bootstrap";
import CartItems from "./cartItems";
import Dropdown from 'react-bootstrap/Dropdown';
import Country from "../Data/country";
import { useState } from "react";


export default function Cart({ cart, setCart }) {
    const [subtotal, setSubtotal] = useState(0);

    const updateSubtotal = (newSubtotal) => {
        setSubtotal(newSubtotal);
    }


    const country = Country.map((c, idx) => {
        return (
            <Dropdown.Item key={idx} href="#/action-1">{c.countrys}</Dropdown.Item>
        )
    })
    console.log('cartiin array', cart)
    const cartProducts = cart.map((product, idx) => {
        return (
            <CartItems key={idx} price={product.price} name={product.itemName} img={product.img} cart={cart} setCart={setCart} item={product} upSub={updateSubtotal} />
        )
    })
    return (
        <>
            <style type="text/css">
                {`
             .btn-light {
                background-color: #EDA415;
                color: white;
                padding-top: 19.5px;
                padding-bottom: 19.5px;
                width: 241px;
                border-radius: 32.42px
    
              }
              .btn-outline-secondary {
                padding: 19.5px 42.5px;
                border-radius: 32.42px
              }
              .btn-outline-danger {
                padding: 19.5px 54px;
                border-radius: 32.42px
              }
              .btn-light:hover {
                background-color: #ede915;
              }
              .btn-outline-dark {
                border: none;
              }
              input[type=text] {
                outline: none;
                border: none;
                padding-left: 14.5px;
              }
              input[type=text]::placeholder {
                padding: 14.5px 23px;
                color: #232323;
                outline: none;
              }
              input[type=text]:focus {
                outline: none;
              }
              .btn-outline-light {
                color: #232323;
                border: 1px solid gray;
                width: 90%;
                border-radius: 20px
              }
            
            `}

            </style>
            <div className="container d-flex gap-3 my-5">
                <div className="container">
                    <div className="d-flex px-5" style={{ color: "#232323", fontSize: "20.68px", paddingTop: "10px", paddingBottom: "15px", backgroundColor: "#E2F4FF" }}>
                        <div style={{ width: "40.7%" }} >Product</div>
                        <div style={{ width: "18.65%" }} >Price</div>
                        <div style={{ width: "18.65%" }} >Quantity</div>
                        <div style={{ width: "22%", textAlign: "center" }} >Subtotal</div>
                    </div>
                    {cartProducts}
                    <div className="d-flex justify-content-evenly" style={{ paddingTop: "36px" }}>
                        <Button variant="light">Continue shopping</Button>
                        <Button variant="outline-secondary">Update Cart</Button>
                        <Button variant="outline-danger" onClick={() => {
                            setCart(cart = [])
                        }}>Clear Cart</Button>
                    </div>
                </div>

                {/* Sectio two */}
                <div className="border">
                    <div style={{ textAlign: "center", color: "#232323", fontSize: "20.68px", paddingTop: "10px", paddingBottom: "15px", backgroundColor: "#E2F4FF" }}>
                        Cart total
                    </div>
                    <div className="container px-4">
                        <div className="d-flex justify-content-between p-4" style={{ borderBottom: "2px solid #C3C3C3", color: "#232323", fontSize: "20.68px", lineHeight: "30px" }}>
                            <div>Subtotal</div>
                            <div>{subtotal} $</div>
                        </div>
                        <div className=" p-4" style={{ borderBottom: "2px solid #C3C3C3" }}>
                            <div className="d-flex coupon" style={{ borderRadius: "20px", border: "3px solid #DFDFDF" }}>
                                <input type="text" placeholder="Enter coupon code" />
                                <Button variant="outline-dark" id="button-addon2">
                                    Apply
                                </Button>
                            </div>

                        </div>
                        <div className="py-4">
                            <Dropdown >
                                <Dropdown.Toggle style={{ width: "90%", display: "flex", justifyContent: "space-between", alignItems: "center", margin: "auto" }} variant="outline-light" id="dropdown-basic">
                                    Country
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {country}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="d-flex justify-content-between p-4" style={{ color: "#232323", fontSize: "20.68px", lineHeight: "30px" }}>
                            <div>Total amount</div>
                            <div>Price</div>
                        </div>
                        <Button variant="light" style={{ width: "100%" }}>Proceed to checkout</Button>
                    </div>
                </div>
            </div>
        </>
    )
}