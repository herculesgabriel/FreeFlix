import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { AppWrapper } from '../../../components/AppWrapper';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import { FormWrapper } from '../../../components/FormField/style';
import useForm from '../../../hooks/useForm';
import config from '../../../config';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleInputChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function handleSubmit(infos) {
    infos.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);

    clearForm();
  }

  useEffect(() => {
    fetch(`${config.URL_TOP}/categorias`)
      .then(async (categories) => {
        const resposta = await categories.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

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
              <li key={categoria.titulo}>
                {categoria.titulo}
              </li>
            ))}
          </ul>

        </FormWrapper>

      </PageDefault>
    </AppWrapper>
  );
}

export default CadastroCategoria;
