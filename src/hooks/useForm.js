import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);
  // na boa, como é que isso funciona por debaixo dos panos?

  function setValue(chave, valor) {
    // Marco, wtf???
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleInputChange(infos) {
    setValue(
      infos.target.getAttribute('name'),
      infos.target.value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleInputChange,
    clearForm,
    // handleSubmit,
  };
}

export default useForm;
