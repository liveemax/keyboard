import React from "react";
import {BrowserRouter} from "react-router-dom";
import Main from "./component/Main/Main.jsx";
import Advertising from "./component/Advertising/Advertising.jsx";
import Footer from "./component/Footer/Footer.jsx";
import store from "./redux/store.js";
import Header from "./component/Header/Header.jsx";
import {Provider} from "react-redux";
import {connect} from "react-redux";
import handlerClickApp from "./handlerClickApp.jsx";
import {setInputAvailable} from "./redux/input-reducer.js";
import AsideContainer from "./component/Aside/AsideContainer.jsx";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";

const theme=createMuiTheme({
    overrides:{
        MuiSlider:{
            colorPrimary:{
                color:"#777",
            }
        },
        MuiTabs:{indicator:{
                backgroundColor:"transparent"

            }},
        MuiAccordion:{
            root:{
                backgroundColor:"transparent"
            }
        }
    },
})


const useStyle = makeStyles({
    root: {
        backgroundColor: "#e0e0e0",
    },
    main:{
        padding:"0px 15px"
    },
    mainContainer:{
        width:"100%"
    }
})
const App = (props) => {
    const classes = useStyle()
    return (
        <Container maxWidth={false} disableGutters={true} className={classes.root}
                   onClick={(e) => {handlerClickApp(e, props.isInputAvailable, props.setInputAvailable)}}>
            <Header/>
            <Grid container justify={"flex-end"}>
                <Grid item xs={2}><Advertising/></Grid>
                <Grid container item xs={10}>
                    <Grid item  xs={10} className={classes.main}><Main/></Grid>
                    <Grid item xs={2}><AsideContainer/></Grid>
                </Grid>
            </Grid>
            <Footer/>
        </Container>

    );

}

const mapStateToProps = (props) => {
    return {
        props: props,
        isInputAvailable: props.inputKeyboard.isInputAvailable
    }
}
export const AppContainer = connect(mapStateToProps, {setInputAvailable})(App)

const KeyBoard = (props) => {

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
            </ThemeProvider>
        </BrowserRouter>
    )
}
export default KeyBoard