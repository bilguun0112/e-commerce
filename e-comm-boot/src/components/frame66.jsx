import comment from "../Data/comment"
import AliceCarousel from "react-alice-carousel"

export default function Frame66() {
    const responsive = {
         0: { items: 3, itemsFit: 'contain' } 
    }


    const feedBack = comment.map((comm,idx) => {
        return (
            <div key={idx} className="border border-1 rounded-3 p-4 m-2">
                <div className="d-flex align-items-center gap-5">
                    <div >
                        <img className="rounded-circle p-1" src={comm.img} alt="" style={{ width: "90px", heigth: "90px", border: "2px dashed #EDA415" }} />
                    </div>
                    <div style={{ fontSize: "16px", fontWeight: "600", color: "#003F62" }}>
                        {comm.name}
                    </div>
                </div>
                <div className="p-2 mt-3" style={{ fontSize: "13.17px", fontWeight: "400", color: "#003F62", borderRadius: "20px", backgroundColor: "#E2F4FF" }}>
                    {comm.comm}
                </div>
            </div>

        )
    })
    return (
        <>
            <AliceCarousel autoPlay autoPlayInterval="3000" disableButtonsControls="true" responsive={responsive}>
                {feedBack}
            </AliceCarousel>
        </>

    )

}