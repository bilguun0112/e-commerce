import HalfRating from "./ratingStar";
import Button from 'react-bootstrap/Button';

export default function ModalBody() {




    return (
        <>
            <style type="text/css">
                {`
             .btn-warning {
                background-color: #EDA415;
                color: white;
                padding-top: 19.5px;
                padding-bottom: 19.5px;
                width: 241px;
                border-radius: 32.42px
              }
              .ti{
                color: #232323;
                font-weight: 500;
                font-size: 18.17px
              }
            `}

            </style>
            <div className="container d-flex gap-5 mt-3">
                <div className="w-50">
                    <div style={{ borderRadius: "20px" }} className="border border-2 rounded-4">
                        <img className="img-fluid" src="https://gmedia.playstation.com/is/image/SIEPDC/dualsense-thumbnail-ps5-01-en-17jul20?$800px$" alt="" />
                    </div>
                    <div className="d-flex mt-3">
                        <div className=" d-flex w-100 gap-2" style={{height: "155px"}}>
                            <img className="img-fluid h-100 w-50 border border-3 rounded-4" src="https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-black-accessory-front?$Background_Small$" alt="" />
                            <img className="img-fluid h-100 w-50 border border-3 rounded-4" src="https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-galactic-purple-accessory-front?$Background_Small$" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-50">
                    <div>
                        <div style={{ fontWeight: "500", fontSize: "29.58px", lineHeight: "44.51px", color: "#003F62" }}>Play game</div>
                        <div style={{ fontWeight: "600", fontSize: "29.58px", lineHeight: "44.51px", color: "#4a4a4a" }}>Price</div>
                        <div>
                            <HalfRating />
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "18.17px", lineHeight: "27.26px", color: "#232323" }}>
                            Availability: <span style={{ color: "#30BD57", marginLeft: "19.08px" }}>&#10003; in stock</span>
                        </div>
                        <div style={{ color: "#5D5D5D", marginTop: "16px" }}>
                            Hurry up! only 34 product left in stock!
                            <div className="w-100 my-3" style={{ borderTop: "2px solid #BDBDBD" }}></div>
                        </div>

                        <div className="d-flex flex-column gap-3">
                            <div className="d-flex gap-3">
                                Color :
                                <input type="radio" name="gender"/>
                                <input type="radio" name="gender"/>
                            </div>
                            <div className="d-flex gap-3">
                                <div>
                                    Size :
                                </div>
                                <button>30</button>
                                <button>56</button>
                                <button>42</button>
                                <button>48</button>
                            </div>
                            <div>
                                <div>Quality : </div>
                            </div>
                            <div className="d-flex gap-4">
                                <Button variant="warning">Add to cart</Button>
                                <Button variant="warning">But it now</Button>
                                <button className="btn" ><img src="images/heart.png" alt="" style={{ backgroundColor: "#EEEEEE", borderRadius: "50%", padding: "20px" }} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 my-3" style={{ borderTop: "2px solid #BDBDBD" }}></div>
                    <div className="d-flex flex-column gap-4">
                        <div className="ti">
                            Sku : &nbsp; &nbsp; 01133 - 9 - 9
                        </div>
                        <div className="ti">
                            Category : <span style={{ color: "#434343", fontWeight: "400", fontSize: "13.17px", marginLeft: "20px" }}> 20% off, 49% off Alex remote</span>
                        </div>
                        <div className="d-flex gap-4 justify-content-start">
                            <div className="ti">Share : </div>
                            <img src="images/google.png" alt="" />
                            <img src="images/facebook.png" alt="" />
                            <img src="images/whatsapp.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}