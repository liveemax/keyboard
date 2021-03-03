import React from "react";
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";
import {useEffect} from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyle = makeStyles({
    moreBadKey: {
        padding: "0px 0px 3px 0px",
        "& button": {
            marginLeft: "3px",
            padding: "0px",
            border: "1px solid #eee",
        }
    },
    button: {
        display: "flex"
    }
})

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        textAlign:"center",
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 120,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}))(Tooltip);
type root={
    currentLetter:string,
    allText:Array<string>,
    badLetter:any
}


export const MoreBadKey:React.FC<root> = ({currentLetter,allText,badLetter, ...props}) => {

    useEffect(()=>{
        if((document as any).getElementById("zoom")!==null)(document as any).getElementById("zoom").style.transform="scale(1)"
    },[allText[0]])
    const classes = useStyle()
    if (badLetter.length !== 0) {
        return (
            <>
                <span className={classes.moreBadKey}>More bad keys:</span>
                <Zoom in={true}>
                <span id={"zoom"} className={classes.button}>
                    {
                    badLetter.map((el:any, ind:string) => {
                        if (Number(ind) < 3) {
                            if(el.typeScore===999)
                                el.typeScore=0
                            return (
                                <React.Fragment key={ind}>
                                    <HtmlTooltip
                                        title={
                                            <React.Fragment>
                                                <Typography color="inherit">Statistic of letter {el.letter}</Typography>
                                                <div><em>{"Score"}</em> {' '} <b>{el.typeScore}</b></div>
                                                <div><em>{"Number of error"}</em> {' '} <b>{el.errorCount}</b></div>
                                                <div><em>{"Count of letter"}</em> {' '} <b>{el.typeCounter}</b></div>
                                            </React.Fragment>
                                        }
                                    >
                                        <Button id={"badKey " + ind} >{el.letter}</Button>
                                    </HtmlTooltip>
                                </React.Fragment>
                            )
                        }
                    })
                }
                </span>
                </Zoom>

            </>
        )
    }

    else return (
        <div className={classes.moreBadKey}>Need more data</div>
)

}