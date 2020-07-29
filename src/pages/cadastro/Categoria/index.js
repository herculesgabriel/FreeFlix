import React from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault';
import { AppWrapper } from '../../../components/AppWrapper';


function Categoria() {
    return (
        <AppWrapper>
            <PageDefault>

                <h1>Categoria</h1>

                <form>
                    <label>
                        Nome da Categoria
                        <input type="text" />
                    </label>

                    <button>Cadastrar</button>
                </form>



                <Link to="/">
                    <button>
                        Voltar para Home
                    </button>
                </Link>

            </PageDefault>
        </AppWrapper>
    );
}

export default Categoria;