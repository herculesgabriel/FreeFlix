import React from 'react';

function FormField({ label, type, nome, value, onChange }) {
    return (

        <div>
            <label>
                {label}: <br />
                <input
                    type={type}
                    value={value}
                    name={nome}
                    onChange={onChange}
                />
            </label>
        </div>

    );
}

export default FormField;