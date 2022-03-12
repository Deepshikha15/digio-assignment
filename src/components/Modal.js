import React from 'react';
import ReactDOM from 'react-dom';
import {makeStyles } from '@material-ui/core';
import {adhaarImg} from '../static/1200px-Aadhaar_Logo.svg.png';


const useStyle = makeStyles({
    modalOverlay:{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1040,
        width:'100vw',
       height: '100vh',
        backgroundColor: '#000',
        opacity: .5,
    },
    modalWrapper:{
        postion: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1050,
        width: '100%',
        height: '100%',
        overflowX: hidden,
        overflowY: auto,
        outline: 0,
    },
  modal:{
    zIndex: 100,
    background: white,
    position: relative,
    margin: `1.75rem auto`,
    borderRadius: '3px',
    maxWidth: '500px',
    padding: '2rem',
  },
  modalHeader:{
    display:'flex',
    justifyContent: 'flex-end',
  },
  modalCloseButton:{
    fontSize: `1.4rem`,
    fontWeight: `700`,
    lineHeight: `1`,
    color: `#000`,
    opacity: '.3',
    cursor: `pointer`,
    border: none,
  },
  button:{
    fontSize: `.9rem`,
    fontWeight: `700`,
    border: `none`,
    borderRadius: `3px`,
    padding: `.3rem 1rem`,
    marginLeft: `.5rem`
  },
  resiter:{
      padding: 40
  },
  logoDimension:{
    height: 70,
    width: 400,
    marginLeft: 300,
},
parent:{
    display: ' grid',
    gridColumnTemplates: '1fr 1fr',
}
})
function Modal({ isShowing, hide }){
    const classes= useStyle()
    return (
        isShowing ? ReactDOM.createPortal(
            <React.Fragment>
              <div className={classes.modalOverlay}/>
              <div className={classes.modalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className={classes.modal}>
                  <div className={classes.modalHeader}>
                    <button type="button" className={classes.modalCloseButton} data-dismiss="modal" aria-label="Close" onClick={hide}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className={classes.resiter}>
                      Register Adhaar
                  </div>
                  <div className={parent}>
                      <img src={adhaarImg} className={logoDimension}/>
                      <div>
                      <input type='number' />
                      <input type='button' value='verify'/>
                      </div>
                  </div>
                  <div className={parent}>
                  <div>
                    <input type="checkbox" id="a"/>
                    <label for="a">i agree to eSignin</label>
                    </div>
                 </div>
                  
                  <div className={parent}>
                      <input placeholder="otp" type='number' />
                      <input type='button' value='submit'/>
                  </div>
                  
                </div>
              </div>
            </React.Fragment>, document.body
          ) : null
    )
}  

export default Modal;