import React from "react";
import header from "./Header.module.css"

const Header = () => {
    return (
        <header className={header.align}>
            <img alt={"some "}
                 src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Nice_building_in_Raanana02.jpg/1200px-Nice_building_in_Raanana02.jpg"}/>
        </header>
    );
}

export default Header;