import React from 'react';
import { FormWrapper, FormLabel, FormInput, FormTextArea } from './style';

function FormField({ tagname, label, type, name, value, onChange }) {
    function findTagType() {
        if (tagname === "input") {
            return (
                <FormInput
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            )
        } else if (tagname === "textarea") {
            return (
                <FormTextArea
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            )
        }

    }

    return (

        <FormWrapper>
            <FormLabel>
                {label}: <br />
                {findTagType()}
            </FormLabel>
        </FormWrapper>

    );
}

export default FormField;