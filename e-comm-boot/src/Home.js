
import Banner from './components/carousel';
import Catalogies1 from './components/catalogi1';
import SubproductCard from './components/subProductCard';
import Sale from './components/sale';
import Frame53 from './components/frame53';
import QuadFrame from './components/tripleFrame';



export default function MainHome({ wish, setWish, cart, setCart }) {
    return (
        <div className="container">
            <Banner />
            <Catalogies1 />
            <SubproductCard wish={wish} setWish={setWish} cart={cart} setCart={setCart} />
            <Sale />
            <Frame53 cart={cart} setCart={setCart} />
            <QuadFrame />
        </div>
    )
}