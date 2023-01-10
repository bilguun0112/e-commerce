export default function Sale() {
    return (
        <>
        <style type="text/css">
            {`
            #pexels {
                height: 417px;
                background-image: url(https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
                background-position: center; 
                background-repeat: no-repeat;
                background-size: cover;
            }
            `}
        </style>
        <div className="my-5 d-flex justify-content-end align-items-center rounded" id="pexels">
            <div className="w-50 float-end text-center">
                <button className="btn text-light" style={{backgroundColor: "#EDA415",borderRadius: "20px",padding: "12px 26.5px",marginBottom: "36px"}}>
                    New laptop
                </button>
                <div style={{ color: "#2E8FC5", fontSize: "2.5rem", fontWeight: "700" }}>
                    Sale up to 50% off
                </div>
                <div className="text-light" style={{paddingTop: "12px", paddingBottom: "36px"}}>
                    12 inch hd display
                </div>
                <button className="btn text-light" style={{backgroundColor: "#EDA415",borderRadius: "20px",padding: "12px 26.5px"}}>
                    Shop now
                </button>
            </div>
        </div>
        </>
    )
}