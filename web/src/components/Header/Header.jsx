import React from "react"
import './Header.scss'

export default ({ black }) => {



    return(
        <header className={black ? 'header' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
                </a>
            </div>
            <div className="header--user">
                <a target="_blank" href="https://github.com/Yuriferr/Netflix">
                    <img src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" alt="Usuário"/>
                </a>
            </div>
        </header>
    )
}