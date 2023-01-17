export default function MarkProduct(){



    return (
        <>
        {
            heart ? 
            <button onClick={()=> {handleClicker(this); setHeart(false)}} className="btn zero"><img src="images/heart.png" alt="" style={{ backgroundColor: "#B3D4E5" , borderRadius: "50%"}} className="p-2 " /></button>
            : 
            <button onClick={()=> {handleClickerRes(this); setHeart(true)}} className="btn zero"><img src="images/heart.png" alt="" style={{ backgroundColor: "green" , borderRadius: "50%"}} className="p-2 " /></button>
        }
        </>
    )
}