import React from "react";
import Paper from "@material-ui/core/Paper";
import classes from "./main.module.css";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";

const ComplexityKeyboard = () => {
    const [initSlider, setSlider] = React.useState([0, 100]);

    const ChangeSlider = (event, newValue) => {
        setSlider(newValue);
    };
    return (
        <>
            <Paper className={classes.typeKeys}>
                <Typography>
                    Selected button
                </Typography>
                <div>
                    <ButtonGroup variant="text" color="primary" disableRipple={true} disableElevation={true}>
                        <Button>s</Button>
                        <Button>b</Button>
                        <Button>q</Button>
                        <Button>w</Button>
                        <Button>e</Button>
                        <Button>r</Button>
                        <Button>t</Button>
                        <Button>y</Button>
                        <Button>u</Button>
                        <Button>i</Button>
                        <Button>o</Button>
                        <Button>p</Button>
                        <Button>d</Button>
                        <Button>f</Button>
                        <Button>g</Button>
                        <Button>h</Button>
                        <Button>j</Button>
                        <Button>k</Button>
                        <Button>z</Button>
                        <Button>x</Button>
                        <Button>c</Button>
                        <Button>v</Button>
                        <Button>m</Button>
                        <Button>n</Button>
                        <Button>,</Button>
                        <Button>.</Button>
                        <Button>/</Button>
                    </ButtonGroup>
                    <div className={classes.slider}>
                        <Slider
                            value={initSlider}
                            onChange={ChangeSlider}
                            step={1}
                        />
                    </div>
                </div>
            </Paper>
        </>
    )
}
export default ComplexityKeyboard