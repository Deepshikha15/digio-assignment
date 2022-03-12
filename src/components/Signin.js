import { AppBar ,Toolbar,makeStyles,Button } from '@material-ui/core';
import React from 'react';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import mainLogo from '../static/generic-logo-hi.png';
// import googleLogo from '../static/google-scalable-vector-graphics-font-awesome-icon-png-favpng-fudywPLAwYb7ecVpNCfvS8FpK.jpeg';
import ParentForm from './ParentForm';
import Divider from './Divider';


const useStyle = makeStyles({
    wid:{
        width: '24%'
    },
    paddingAround:{
        padding:20
    },
    center:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
    logoDimension:{
        height: 70,
        width: 400,
        marginLeft: 300,
    }
});


function Signin(){
    const classes = useStyle();
    return (
        <>
       <AppBar position="static">
            <Toolbar>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <p>sign document using</p>
                    <p>saket@digio</p>
                </Grid>
                <Grid item xs={6}>
                    <img  src={mainLogo} className={classes.logoDimension} alt="fireSpot"/>
                </Grid>
            </Grid>
            </Toolbar>
            </AppBar>
        <div className={classes.paddingAround}>
            <div className={classes.center}>Saket@digio is uses google?</div>
            <div  className={classes.center}>login using google</div>
            <div className={classes.center}><Button
                variant="contained"
                color="secondary"
                className={classes.button}>
                Google
            </Button>
            </div>
                <Divider className={classes.center}>Or</Divider>
                <div className={classes.center}>Proceed with your email address</div>
            {/* <div  className={classes.center}>login using google</div> */}
            <ParentForm/>
        </div>
    </>
    )
}
export default Signin;