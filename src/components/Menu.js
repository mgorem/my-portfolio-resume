import { useState } from "react"
import {BiMenuAltRight} from "react-icons/bi"
import { Link } from "react-router-dom"
import { Navbar } from "../data/Navbar"

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [links, setLinks] = useState(Navbar)
  return (
    <>
    <div className="menu-btn">
            <button onClick={() => setIsOpen(!isOpen)}>
            <BiMenuAltRight />
            </button>
        </div>
    <header className={`${isOpen ? "header open" : "header"}`}>
        <nav>
            <ul>
                {links.map((link) => {
                    const {id, title, url} = link

                    return (<li key={id} onClick={() => setIsOpen(false)}>
                        <Link to={url}>{title}</Link>
                    </li>
                    )
                })}
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Menu