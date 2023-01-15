import Footer from "./footer";
import { Help, Search } from "./help";
import MainMenu from "./MainMenu";
import ModalBody from "./showModal";

export default function Mainmodal() {
    return (
       <>
        <Help/>
        <Search />
        <MainMenu/>

        <ModalBody />

        <Footer />
       </>
    )
}