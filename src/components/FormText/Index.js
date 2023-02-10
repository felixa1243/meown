import {FormControl, FormGroup, FormLabel} from "react-bootstrap";
import React from "react";

const FormText = ({
                      label, type, placeholder, value, onChange, disabled
                  }) => {
    let props;
    switch (type){
        case "textarea":
            props = { as: type }
            break;
        default:
            props = { type }
            break;
    }

    return (
        <FormGroup className="mb-3" style={{borderBottom: "1px solid", padding: "5px" }} >
            <FormLabel>{label}</FormLabel>
            <FormControl
                {...props}
                placeholder={placeholder}
                onChange={onChange}
                isValid={!!value}
                disabled={disabled}
                value={value}
            />
        </FormGroup>
    )
}

export default FormText;
