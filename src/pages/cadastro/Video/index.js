import React from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault';
import { AppWrapper } from '../../../components/AppWrapper';


function CadastroVideo() {
  return (
    <AppWrapper>
      <PageDefault>

        <h1>Cadastro</h1>

        <Link to="/">
          <button>
            Voltar
          </button>
        </Link>
        <Link to="/cadastro/categoria">
          <button>
            Cadastrar categoria
          </button>
        </Link>

      </PageDefault>
    </AppWrapper>
  );
}

export default CadastroVideo;