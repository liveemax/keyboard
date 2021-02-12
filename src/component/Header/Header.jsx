import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
    align: {
        display:"flex",
        justifyContent:"center",
        padding:"15px 0",
        "& img": {
            maxHeight: "150px",
        },
        borderBottom:"1px solid #eee"
    }
})

const Header = () => {
    const header = useStyle()
    return (
        <header className={header.align}>
            <img alt={"some "}
                 src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Nice_building_in_Raanana02.jpg/1200px-Nice_building_in_Raanana02.jpg"}/>
        </header>
    );
}

export default Header;