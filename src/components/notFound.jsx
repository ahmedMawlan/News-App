import React from "react";
import {Alert} from 'react-bootstrap'

const NotFound = ()=>{
    return(
        <>
            {[  
                'danger',  
            ].map((variant) => (
                <Alert className="w-100 text-center fs-2" key={variant} variant={variant}>
                    This Page Doesn't Have Any News
                </Alert>
            ))}
        </>
    )
}

export default NotFound;