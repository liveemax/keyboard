import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore.js";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {speed} from "./speed";
import React from "react";
type main={
    value: any
}
export const TabPanel:React.FC<main>=({value,...props}) => {
    return (
        <div >
            <Accordion >
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography >{value.letter}</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography >typeScore:{value.typeScore}</Typography>
                </AccordionDetails>
                <AccordionDetails>
                    <Typography >typeCounter:{value.typeCounter}</Typography>
                </AccordionDetails>
                <AccordionDetails>
                    <Typography >errorCount:{value.errorCount}</Typography>
                </AccordionDetails><AccordionDetails>
                <Typography >speedType:{speed(value.speedType)}</Typography>
            </AccordionDetails>
            </Accordion>
        </div>


    );
}