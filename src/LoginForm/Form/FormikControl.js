import React from 'react'
import Name from './Name';
import Email from './Email'
import Number from './Number';
import Password from './Password';
import ConfirmPassword from './ConfirmPassword'

function FormikControl(props) {
    const {control, ...rest} = props;
    switch(control) {
        case 'name': return <Name {...rest} />
        case 'email': return <Email {...rest} />
        case 'password': return <Password {...rest} />
        case 'confirmPassword': return <ConfirmPassword {...rest} />
        case 'number': return <Number {...rest} />
        default: return null;
    } 
}

export default FormikControl
