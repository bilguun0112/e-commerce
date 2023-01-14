export default function Footer() {
    return (
        <>
            <style type="text/css">
                {`
            .customInput{
                border: 0;
                outline: none;
                background-color: #EDA415;
            }
            .customInput::placeholder{
                color: #ffffff;
            }
            .footTitle{
                font-size: 19.38px;
                font-weight: 600;
            }
            li{
                padding: 7.5px
            }
            `}
            </style>
            <div className="container" style={{ backgroundColor: "#E2F4FF" }}>
                <div style={{ padding: "42px 60px" }}>
                    <div className="d-flex justify-content-between align-items-center" style={{ padding: "47.5px 95.5px", backgroundColor: "#ffffff", borderRadius: "20px" }}>
                        <div style={{ fontSize: "29.38px", fontWeight: "700", color: "#1B5A7D" }}>Subscribe newsletter</div>
                        <div className="d-flex align-items-center justify-content-between" style={{ borderRadius: "20px", backgroundColor: "#EDA415", height: "63px", width: "30%" }}>
                            <input type="email" placeholder="Email address" className="customInput" style={{ height: "14px", color: "#FFFFFF", fontSize: "14px", marginLeft: "25px" }} />
                            <img src="images/send-2.png" alt="" style={{ width: "24px", height: "24px", marginRight: "25px" }} />
                        </div>
                        <div className="d-flex gap-3">
                            <img src="images/headphone.png" alt="" />
                            <div style={{ color: "#606060" }}>
                                Call us 24/7 <br />
                                (+62) 0123 567 789
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ padding: "42px 60px", color: "#1B5A7D" }} className="d-flex gap-3 justify-content-between">
                    <div className="d-flex flex-column justify-items-between align-items-start gap-4">
                        <img src="images/logo-11.png" alt="" style={{color: "#1B5A7D"}} />
                        <div>64 st james boulevard <br />
                            hoswick , ze2 7zj</div>

                        <div className="d-flex justify-content-start gap-3" style={{ borderTop: "1px solid #9d9d9d", paddingTop: "20px" }}>
                            <img src="images/google.png" alt="" />
                            <img src="images/facebook.png" alt="" />
                            <img src="images/whatsapp.png" alt="" />
                        </div>
                    </div>
                    <div >
                        <div className="footTitle">
                            Find product
                        </div>
                        <div>
                            <ul>
                                <li>Brownze arnold</li>
                                <li>Chronograph blue</li>
                                <li>Smart phones</li>
                                <li>Automatic watch</li>
                                <li>Hair straighteners</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="footTitle">
                            Get help
                        </div>
                        <div>
                            <ul>
                                <li>About us</li>
                                <li>Contact us</li>
                                <li>Return policy</li>
                                <li>Priveacy policy</li>
                                <li>Payment policy</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="footTitle">
                            About us
                        </div>
                        <div>
                            <ul>
                                <li>News</li>
                                <li>Service</li>
                                <li>Our plicy</li>
                                <li>Customer care</li>
                                <li>Faq's</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

        </>

    )
}