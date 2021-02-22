import React from "react";
import {speed} from "./speed.js";
import {makeStyles} from '@material-ui/core/styles';
import Tabs from "@material-ui/core/Tabs";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles({
        root: {
            width:"100%",
            display: "flex",
            height: "600px",
            borderLeft: "3px solid #ccc",
            backgroundColor: "#eee",
            textAlign: "center",
            "& button": {
                padding: "2px"
            }
        },
        heading: {
            textAlign: "center",
            width: "100%"
        },

    }
);

const Aside = (state) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange1 = (panel) => (event, isExpanded) => {
        debugger
        setExpanded(isExpanded ? panel : false);
    };

    const classes = useStyles();
    let statistic = state.statistic
    let needMore = "0"
    let input = (statistic) => {
        if (statistic.length !== 0) {
            let output = []
            for (let [key, value] of Object.entries(statistic)) {
                if (value.typeScore === 999)
                    value.typeScore = needMore
                output[key] =
                    [<div style={{width: "100%"}}>
                        <Accordion  expanded={expanded === key} onChange={handleChange1(key)} >
                            <AccordionSummary key={Math.random()}
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography key={Math.random()}  className={classes.heading}>{value.letter}</Typography>
                            </AccordionSummary>
                            <AccordionDetails key={Math.random()}>
                                typeScore:${value.typeScore}
                            </AccordionDetails>
                            <AccordionDetails key={Math.random()}>
                                typeCounter:${value.typeCounter}
                            </AccordionDetails>
                            <AccordionDetails key={Math.random()}>
                                errorCount:${value.errorCount}
                            </AccordionDetails><AccordionDetails key={Math.random()}>
                            speedType:${speed(value.speedType)}
                        </AccordionDetails>

                        </Accordion>
                    </div>,
                    ]
            }
            return output.reverse()
        }
    }

    return (
        <aside className={classes.root}>
            <Tabs textColor={"inherit"} style={{width: "100%"}} orientation="vertical"
                  variant="scrollable"
                  value={1}>
                {input(statistic)}
            </Tabs>
        </aside>

    );
}
export default Aside;
