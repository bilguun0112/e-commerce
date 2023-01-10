import carData from "../Data/carData"
import HalfRating from "./ratingStar"
export default function Frame53() {
    function myFrame2(number) {
        return (
            <div className="container m-2 h-100 border rounded ">
                <div className="d-flex justify-content-evenly ">
                    <div className="w-50 p-2">
                        <img className="img-fluid" src={carData[number].img} alt="" />
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start">
                        <div>
                            {carData[number].itemName}
                        </div>
                        <div>
                            {carData[number].price}
                        </div>
                        <div>
                            <HalfRating />
                        </div>
                        <div style={{ backgroundColor: "#87BCD9", color: "#272727", padding: "8px 14px" }} className="rounded d-flex gap-3 align-items-center">
                            <div>
                                Add to Card
                            </div>
                            <button className="btn rounded-circle" style={{ backgroundColor: "#EDA415" }} ><img src="images/shopping-cart.png" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    function myFrame1(number) {
        return (
            <div className="container m-2 h-100 border rounded">
                <div className="d-flex justify-content-evenly p-3">
                    <div className="w-50">
                        <img className="img-fluid" style={{ height: "474px"}} src={carData[number].img} alt="" />
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start">
                        <div>
                            {carData[number].itemName}
                        </div>
                        <div>
                            {carData[number].price}
                        </div>
                        <div>
                            <HalfRating />
                        </div>
                        <div style={{ backgroundColor: "#87BCD9", color: "#272727", padding: "8px 14px" }} className="rounded">
                            Add to Card
                            <button className="btn rounded-circle" style={{ backgroundColor: "#EDA415" }} ><img src="images/shopping-cart.png" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }




    return (
        <>
            <style type="text/css">
                {`
            .smallCard{
                height: 250px;
              }
            `}
            </style>
            <div>
                <div className="row">
                    <div className="col-7">
                        <div className="row">
                            {myFrame1(8)}
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="smallCard">
                            {myFrame2(20)}
                        </div>
                        <div className="smallCard">
                            {myFrame2(28)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}