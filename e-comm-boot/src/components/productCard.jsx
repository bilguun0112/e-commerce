import products from "../Data/products"
import AliceCarousel from 'react-alice-carousel'
import SubproductCard from "./subProductCard"

export default function ProductCard() {
    const result = products.map(dat => {
        console.log(dat.items)
        return (
            <div>
                <SubproductCard
                    items={dat.items} />
            </div>

        )
    })

    return (<div>
        {result}
    </div>)
}

