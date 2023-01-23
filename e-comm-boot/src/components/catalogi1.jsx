import Carousel from "react-multi-carousel";
import products from "../Data/products";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const slides = products.map((dev, idx) => {
    return (
        <div key={idx} className="d-flex justify-content-evenly align-items-center" >
            <div className='d-flex justify-content-between h-75 align-items-center border rounded p-3' style={{ width: "338px" }}>
                <img src={dev.img} alt="" style={{ width: "154px", height: "94px" }} className="p-3" />
                <div>
                    <h5>{dev.title}</h5>
                    <p> ({dev.items.length} items) </p>
                </div>

            </div>
        </div>
    )
})

export default function catalogi1() {
    return (

        <div className="my-5">
            <Carousel responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={false}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="transform 500ms ease-in-out"
                transitionDuration={1000}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                {slides}
            </Carousel>
        </div>
    )
}