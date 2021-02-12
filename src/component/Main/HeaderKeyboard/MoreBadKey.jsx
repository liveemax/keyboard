import React from "react";
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles({
    moreBadKey: {
        padding: "0px 0px 3px 0px",
        "& button": {
            marginLeft: "3px",
            padding:"0px",
            border:"1px solid #eee",
        }
    },
})

export const MoreBadKey = ({badLetter, ...props}) => {
    const classes = useStyle()
    console.log(badLetter)
    if (badLetter.length === 0) {
        badLetter=[]

    }
    return (
        <div className={classes.moreBadKey}>More bad keys:
            {
                badLetter.map((el, ind, arr) => {

                    if(arr.length===0){
                        badLetter.el="Q"
                    }
                if (ind < 3) {
                return (<>
                <Button key={el} >{el.letter}</Button>
                </>
                )
            }
            })
            }

        </div>
    )
}