export default function Frame58() {
    return(

    <>
    <style type="text/css">
        {`
        .tit {
            font-size: 1.375rem;
            color: #003F62;
        }
        .subTit {
            font-size: 1.125rem;
            color: #003F62;
        }
        `}

    </style>
        <div className="d-flex align-items-center justify-content-evenly p-4 my-5 rounded" style={{backgroundColor: "#E2F4FF"}}>
            <div className="d-flex gap-3 align-items-center">
                <img src="images/box-tick.png" alt="" />
                <div>
                    <div className="tit">Free delivery</div>
                    <div className="subTit">on order above $50,00</div>
                </div>
            </div>
            <div  className="d-flex gap-3 align-items-center">
                <img src="images/crown.png" alt="" />
                <div>
                    <div className="tit">Best quality</div>
                    <div className="subTit">best quality in low price</div>
                </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
                <img src="images/shield-security.svg" alt="" />
                <div>
                    <div className="tit">1 year warranty</div>
                    <div className="subTit">Avaliable warranty</div>
                </div>
            </div>
        </div>
    </>
    )
}