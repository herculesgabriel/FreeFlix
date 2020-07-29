import React from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault';
import { AppWrapper } from '../../../components/AppWrapper';


function Categoria() {
    return (
        <AppWrapper>
            <PageDefault>

                <h1>Categoria</h1>

                <Link to="/">
                    <button>
                        Voltar
                    </button>
                </Link>                

            </PageDefault>
        </AppWrapper>
    );
}

export default Categoria;