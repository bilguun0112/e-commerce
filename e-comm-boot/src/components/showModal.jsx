import HalfRating from "./ratingStar";

export default function ModalBody() {




    return (
        <>
            <div className="container">
                <div className="w-50">
                    <div>
                        <img src="https://gmedia.playstation.com/is/image/SIEPDC/dualsense-thumbnail-ps5-01-en-17jul20?$800px$" alt="" />
                    </div>
                    <div>
                        <div>
                            <img src="https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-black-accessory-front?$Background_Small$" alt="" />
                        </div>
                        <div>
                            <img src="https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-galactic-purple-accessory-front?$Background_Small$" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-50">
                    <div>
                        <div>Play game</div>
                        <div>Price</div>
                        <div>
                            <HalfRating />
                        </div>
                        <div>
                            Availability: <span style={{ color: "#30BD57" }}>&#10003; in stock</span>
                        </div>
                        <div style={{ color: "#5D5D5D" }}>
                            Hurry up! only 34 product left in stock!
                        </div>
                        <br />
                        <div>
                            Color : 
                            <input type="radio" />
                            <input type="radio" />
                        </div>
                        <div>
                            Size: 
                            <button>30</button>
                            <button>56</button>
                            <button>42</button>
                            <button>48</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}