import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Tabs from "@material-ui/core/Tabs";
import {TabPanel} from "./TabPanel";
import Typography from "@material-ui/core/Typography";
import {useState} from "react";
import Zoom from "@material-ui/core/Zoom";
import {handlerClickAside} from "./handlerClickAside";
    const useStyles = makeStyles((theme) => ({
            root: {
                    position:"relative",
                    width: `100%`,
                    display: "flex",
                    height: "600px",
                    borderLeft: "3px solid #ccc",
                    backgroundColor: "#eee",
                transform:"translate(-3px,0px)",
                    "& p":{
                            width:"100%",
                            textAlign:"center"
                        }

                },
            heading: {
                width: "100%",
                    backgroundColor:"transparent",
                },

        tapeToInput:{
                position:"absolute",
                width: "100%",
                height: "100%",
                cursor: "pointer",
                zIndex:2,
                "& p":{
                    height:"100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    },
        }
    })
);

    type root={
            statistic: object
    }
const Aside:React.FC<root> = ({statistic,...state}):any => {
        const [click,setClick]=useState(0.2)
        const classes = useStyles()
            let input = (statistic:object) :Array<string>=> {
                if (statistic) {
                        let output:any=[]
                    for (const [key, value] of Object.entries(statistic)) {
                                if(value.typeScore===999)
                                        value.typeScore=0
                                    output[Number(key)] =
                                            [
                                                    <TabPanel value={value}>
                                                        </TabPanel>
                                                ]
                                    }
                        return output
                        }

                else return (["Need More Key"])
                }

        return (
                        <aside className={classes.root}>
                            <Tabs style={{opacity:`${click}`}}  className={classes.heading} orientation="vertical"
                                  variant="scrollable"
                                    value={false}>
                                {input(statistic)}
                            </Tabs>
                                <Zoom in={click===0.2} >
                                    <div className={classes.tapeToInput}>
                                    <Typography onClick={(e)=>handlerClickAside(e,click,setClick)}>Statistic</Typography>
                                    </div>
                                </Zoom>
            </aside>

    );
    }
    export default Aside;