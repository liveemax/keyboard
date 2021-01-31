import React from "react";
import {Typography} from "@material-ui/core";
import footer from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={footer.align}>
            <Typography>
                All right received
            </Typography>
        </footer>
    );
}
export default Footer;