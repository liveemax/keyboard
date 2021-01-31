import React from "react";
import {Typography} from "@material-ui/core";
import aside from "./aside.module.css"
import Paper from "@material-ui/core/Paper";

const Aside = () => {
    return (
        <aside>
            <Paper className={aside.container}>
                <Typography>some statistics</Typography>
            </Paper>
        </aside>
    );
}
export default Aside;