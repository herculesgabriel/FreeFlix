import React from 'react';
import PropTypes from 'prop-types';
import { FormWrapper, FormLabel, Input } from './style';

function FormField({
  tagname, label, type, name, value, onChange, suggestions
}) {
  const fieldId = `id_${name}`;
  const isTypeTextarea = tagname === 'textarea';
  const tag = isTypeTextarea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (

    <FormWrapper>
      <FormLabel htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          hasValue={hasValue}
          value={value}
          name={name}
          onChange={onChange}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <FormLabel.Text
        >
          {label}
          :
        </FormLabel.Text>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${fieldId}`}>
              {
                suggestions.map((suggestion) => (
                  <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                    {suggestion}
                  </option>
                ))
              }
            </datalist>
          )
        }
      </FormLabel>

    </FormWrapper>

  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
