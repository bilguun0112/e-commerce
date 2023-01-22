import Cart from "./cart";
import Footer from "./footer";
import { Help, Search } from "./help";
import MainMenu from "./MainMenu";

export default function CartPage({ wish, setWish, cart }) {

    return (
        <div className="container">
            <Help />
            <Search wish={wish} setWish={setWish} cart={cart} />
            <MainMenu />
            <Cart cartProduct={cart} />
            <Footer />
        </div>
    )
}