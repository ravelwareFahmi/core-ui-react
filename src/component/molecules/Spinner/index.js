import React from 'react';
import {CSpinner} from '@coreui/react'

const Spinner = ({text}) => {
    return (
      <div className="pt-3 text-center">
        <CSpinner style={{width:'4rem', height:'4rem'}} color="danger" variant="grow"/>
        <h5 className="mt-3">{text}</h5>
      </div>
    )
  }
  
  export default Spinner
