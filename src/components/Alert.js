import React from 'react'
import PropTypes from 'prop-types'
  const Alert=(props)=>{
    return(
      <div style={{height:'35px'}}>
        {props.alert &&<div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong> {props.alert.type}</strong> : { props.alert.msg} 
         </div>}
         </div>

    )

  }
  Alert.propTypes = {
    showalert: PropTypes.func.isRequired,
    heading: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
  };
  
    export default Alert;