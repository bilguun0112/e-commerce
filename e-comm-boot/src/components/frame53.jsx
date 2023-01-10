import carData from "../Data/carData"
import HalfRating from "./ratingStar"
export default function Frame53() {
    function myFrame(number) {


        return (
            <div className="container m-2 h-100 border rounded">
                <div className="d-flex justify-content-evenly ">
                    <div className="w-50">
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
                        <div style={{ backgroundColor: "#87BCD9", color: "#272727" ,padding: "8px 14px"}} className="rounded">
                            Add to Card
                            <button className="btn rounded-circle" style={{ backgroundColor: "#EDA415"}} ><img src="images/shopping-cart.png" alt="" /></button>
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
            .bigCard{
                height: 500px;
              }
            `}
            </style>
            <div>
                <div className="row bg-warning">
                    <div className="col-7">
                       <div className="bg-dark row">
                       {myFrame(8)}
                       </div>
                    </div>
                    <div className="col-5">
                        <div className="h-50">
                            {myFrame(20)}
                        </div>
                        <div className="h-50">
                            {myFrame(28)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}