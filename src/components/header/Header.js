import React from 'react'
import "../header/header.css"
import Banner from "../../media/statics_Banner.jpg"

const Header = () => {
    return (
        <div classname="header-conteiner">
            <img classname="img" src={Banner} />
        </div>
    )
}

export default Header
