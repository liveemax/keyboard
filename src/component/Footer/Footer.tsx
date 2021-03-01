import React from "react";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

const useStyle=makeStyles({
    root:{
        padding:"20px 20px",
        textAlign:"right",
        borderTop:"1px solid #ded"
    }
})
const Footer:React.FC = () => {
    const footer=useStyle()
    return (
        <footer className={footer.root}>
            <Typography>
                All right received
            </Typography>
        </footer>
    );
}
export default Footer;