import pictures from "../Data/pics"
import AliceCarousel from "react-alice-carousel"

export default function Frame74() {
    const responsive = {
        0: { items: 2, itemsFit: 'contain' }
    }


    const feedBacks = pictures.map(comm => {
        return (
            <div className="border border-1 rounded-3 p-4 m-2">
                <div className="d-flex align-items-center gap-3">
                    <div>
                        <img className="p-1 img-fluid" src={comm.img} alt="" style={{
                            width: "318px",
                            height: "288px",
                            borderRadius: "20px"
                        }} />
                    </div>
                    <div className="d-flex flex-column align-items-start">
                        <div className="border rounded-pill p-2 colr">
                            22 oct 2021
                        </div>
                        <div className="colr py-1" style={{fontWeight: "600",fontSize: "22.38px"}}>
                            Who avoids a <br />pain that produces?
                        </div>
                        <div className="colr py-2" style={{fontWeight: "400",fontSize: "13.17px"}}>
                            Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.
                        </div>
                        <div className="colr pt-5" style={{fontWeight: "400",fontSize: "13.17px"}}>
                            By spacing tech
                        </div>

                    </div>
                </div>
            </div>

        )
    })


    return (

        <>
            <style type="text/css">
                {`
            .colr {
                color: #1B5A7D;
            }
            `}
            </style>
            <AliceCarousel autoPlay autoPlayInterval="3000" disableButtonsControls="true" responsive={responsive}>
                {feedBacks}
            </AliceCarousel>
        </>

    )
}