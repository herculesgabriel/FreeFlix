import React from 'react';
import PropTypes from 'prop-types';
import { FormWrapper, FormLabel, Input } from './style';

function FormField({
  tagname, label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const isTypeTextarea = tagname === 'textarea';
  const tag = isTypeTextarea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);

  return (

    <FormWrapper>
      <FormLabel>
        <FormLabel.Text
          htmlFor={fieldId}
        >
          {label}
          :
        </FormLabel.Text>
        <br />
        <Input
          as={tag}
          id={fieldId}
          type={type}
          hasValue={hasValue}
          value={value}
          name={name}
          onChange={onChange}
        />
      </FormLabel>

    </FormWrapper>

  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
};

FormField.propTypes = {
  tagname: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
