import React, {PropsWithChildren, ReactElement, ReactNode} from "react";
import {BrowserRouter} from "react-router-dom";
import Main from "./component/Main/Main";
import Advertising from "./component/Advertising/Advertising";
import Footer from "./component/Footer/Footer";
import store, {AppStateType} from "./redux/store";
import Header from "./component/Header/Header";
import {Provider} from "react-redux";
import {connect} from "react-redux";
import handlerClickApp from "./handlerClickApp";
import {setInputAvailable} from "./redux/input-reducer";
import AsideContainer from "./component/Aside/AsideContainer";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import Hidden from "@material-ui/core/Hidden";


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
        },
    }
})


const useStyle = makeStyles({
    root: {
        backgroundColor: "#e0e0e0",
            minWidth:"777px"
    },
    main:{
        padding:"0px 15px"
    },
    mainContainer:{
        width:"100%"
    }
})
interface root{
        isInputAvailable: boolean,
        setInputAvailable: (isInputAvailable: boolean) => void
}
const App=(props:root)=>{
    const classes = useStyle()
    return (
        <Container maxWidth={false} disableGutters={true} className={classes.root}
                   onClick={(e) => {handlerClickApp(e, props.isInputAvailable, props.setInputAvailable)}}>
            <Header/>
            <Grid container justify={"flex-end"}>
                <Hidden mdDown>
                    <Grid item  lg={2} ><Advertising/></Grid>
                </Hidden>
                <Grid container item xs={12} lg={10}>
                    <Grid item  xs={10}  className={classes.main}><Main/></Grid>
                        <Grid item xs={2}><AsideContainer/></Grid>
                </Grid>
            </Grid>
            <Footer/>
        </Container>

    );
}

const mapStateToProps = (props:AppStateType) => {
    return {
        props: props,
        isInputAvailable: props.inputKeyboard.isInputAvailable,
    }
}
export const AppContainer = connect(mapStateToProps, {setInputAvailable})(App)
const KeyBoard:React.FC=() => {

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