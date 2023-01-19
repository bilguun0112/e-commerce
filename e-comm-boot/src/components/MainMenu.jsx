import SubMenu from "./SubMenu"
import { Navbar } from "react-bootstrap"
import menus from "../Data/navbar"
import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

export default function MainMenu() {
    const subMenus = menus.map((subMenu, index) => {
        return (
            <SubMenu
                title={subMenu.title}
                position={subMenu.position}
                children={subMenu.children}
                key={index}
            />
        )
    })


    return (
        <>
            <style type="text/css">{
                `
            .lenght{
                width: 218px;
                height: 70px;
            }
            `
            }

            </style>
            <div className="container d-flex align-items-center bg-light justify-content-around">

                <div className="bg-warning">
                    <Dropdown id="DropDown-One" className="d-flex align-items-center">
                        <Dropdown.Toggle variant="warning" id="dropdown-basic" className="lenght">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <Navbar bg="light" expand="lg">
                    {subMenus}
                </Navbar>
                <a href="#" className="text-end text-decoration-none fw-bold" >30 Days Free Return</a>

            </div>
        </>
    )
}

