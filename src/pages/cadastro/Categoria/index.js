import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { AppWrapper } from '../../../components/AppWrapper';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import { FormWrapper } from '../../../components/FormField/style';

function Categoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
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

  function handleSubmit(infos) {
    infos.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
    setValues(valoresIniciais);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://free-flix.herokuapp.com/categorias';
    fetch(URL).then(async (res) => {
      const response = await res.json();
      setCategorias([
        ...response,
      ]);
    });
    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front-end',
    //       categoria: 'Uma categoria qualquer',
    //       cor: '#6BD1FF',
    //     },
    //   ]);
    // }, 4 * 1000);
  }, [values.name]);

  return (
    <AppWrapper>
      <PageDefault>

        <h1>
          Categoria:
          {values.nome}
        </h1>

        <FormWrapper>

          <form onSubmit={handleSubmit}>

            <FormField
              label="Nome da categoria"
              type="text"
              name="nome"
              tagname="input"
              value={values.nome}
              onChange={handleInputChange}
            />

            <FormField
              label="Descrição"
              type="text"
              name="descricao"
              tagname="textarea"
              value={values.descricao}
              onChange={handleInputChange}
            />

            <FormField
              label="Cor"
              type="color"
              name="cor"
              tagname="input"
              value={values.cor}
              onChange={handleInputChange}
            />

            <Button>Cadastrar</Button>
          </form>

          {
            categorias.length === 0
            && (
              <div>
                Carregando lista...
              </div>
            )
          }

          <ul>
            {categorias.map((categoria) => (
              <li key={`${categoria.nome}`}>
                {categoria.nome}
              </li>
            ))}
          </ul>

        </FormWrapper>

      </PageDefault>
    </AppWrapper>
  );
}

export default Categoria;
