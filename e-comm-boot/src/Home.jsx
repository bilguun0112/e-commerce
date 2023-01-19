import MainMenu from './components/MainMenu';
import { Help, Search } from './components/help';
import Banner from './components/carousel';
import Catalogies1 from './components/catalogi1';
import SubproductCard from './components/subProductCard';
import Sale from './components/sale';
import Frame53 from './components/frame53';
import QuadFrame from './components/tripleFrame';
import { useState } from 'react';
import Footer from './components/footer';
import ModalBody from './components/showModal';

export default function MainHome() {
    const [wish, setWish] = useState([])
    return (
        <div className="container">
            <Help />
            <Search wish={wish} setWish={setWish} />
            <MainMenu />
            <Banner />
            <Catalogies1 />
            <SubproductCard wish={wish} setWish={setWish} />
            <Sale />
            <Frame53 />
            <QuadFrame />
            <Footer />
            <ModalBody />
        </div>
    )
}