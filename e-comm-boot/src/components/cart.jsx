import { Button } from "react-bootstrap";
import CartItems from "./cartItems";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Cart() {



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
            
            `}

            </style>
            <div className="container d-flex gap-3">
                <div className="container">
                    <div className="d-flex px-5" style={{ color: "#232323", fontSize: "20.68px", paddingTop: "10px", paddingBottom: "15px", backgroundColor: "#E2F4FF" }}>
                        <div style={{ width: "32.7%" }} >Product</div>
                        <div style={{ width: "18.65%" }} >Price</div>
                        <div style={{ width: "18.65%" }} >Quantity</div>
                        <div style={{ width: "30%", textAlign: "center" }} >Subtotal</div>
                    </div>
                    <CartItems />
                    <CartItems />
                    <div className="d-flex justify-content-evenly" style={{ paddingTop: "36px", paddingBottom: "96px" }}>
                        <Button variant="light">Continue shopping</Button>
                        <Button variant="outline-secondary">Update Cart</Button>
                        <Button variant="outline-danger">Clear Cart</Button>
                    </div>
                </div>
                <div className="border">
                    <div style={{ textAlign: "center", color: "#232323", fontSize: "20.68px", paddingTop: "10px", paddingBottom: "15px", backgroundColor: "#E2F4FF" }}>
                        Cart total
                    </div>
                    <div className="container">
                        <div className="d-flex justify-content-between p-4" style={{ borderBottom: "2px solid #C3C3C3", color: "#232323", fontSize: "20.68px", lineHeight: "30px" }}>
                            <div>Subtotal</div>
                            <div>Price</div>
                        </div>
                        <div className=" p-4" style={{ borderBottom: "2px solid #C3C3C3" }}>
                            <div className="d-flex coupon" style={{ borderRadius: "20px", border: "3px solid #DFDFDF" }}>
                                <input type="text" placeholder="Enter coupon code" />
                                <Button variant="outline-dark" id="button-addon2">
                                    Apply
                                </Button>
                            </div>

                        </div>
                        <div style={{ borderBottom: "2px solid #C3C3C3" }}>

                        </div>
                        <div>
                            <div>Total amount</div>
                            <div>Price</div>
                        </div>
                        <Button variant="light">Proceed to checkout</Button>
                    </div>
                </div>
            </div>
        </>
    )
}