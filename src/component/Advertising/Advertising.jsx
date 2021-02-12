import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
    root: {
        textAlign:"center",
        "& img":{
            maxWidth: "200px",
            height:"800px",
            padding:"30px 30px 20px 5px"
        },
        borderRight:"1px solid #eee"
    }
})
const Advertising = () => {
    const advertising = useStyle();
    return (
        <div className={advertising.root}>
            <img alt={"asd"}
                 src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Nice_building_in_Raanana02.jpg/1200px-Nice_building_in_Raanana02.jpg"}/>
        </div>
    );
}
export default Advertising;