import React from 'react'
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';

function Number(props) {
    const {name, className} = props
    return (
        <div className="form-group">
            <Field name={name} id={name} className={className} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Number

