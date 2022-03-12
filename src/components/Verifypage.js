import React from 'react';
import {makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    App:{
        textAlign: 'center',
        paddingTop: '2rem',
    },
    
  buttonDefault:{
    background: '#247BA0',
    color:'#fff',
  },
  center:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
},

})


function Verifypage(){
    const classes = useStyle();
    return (
        <div className={classes.App}>
           <div className={classes.center}>
                <div>Signing inn...</div>
                <div>Mutual Non disclosure agreement</div>
                <div>logo Adhaar verified Successfully ...</div>
               </div>
          
            </div>
    )
}
export default Verifypage;