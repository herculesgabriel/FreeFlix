import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault';
import { AppWrapper } from '../../../components/AppWrapper';
import FormField from '../../../components/FormField';

function Categoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }
    const [categorias, setCategorias] = useState([])
    const [values, setValues] = useState(valoresIniciais); // na boa, como é que isso funciona por debaixo dos panos?

    function setValue(chave, valor) {
        // Marco, wtf???
        setValues({
            ...values,
            [chave]: valor
        });
    }

    function handleInputChange(infos) {
        const { getAttribute, value } = infos.target;
        setValue(
            getAttribute('name'),
            value
        );
    }

    function handleSubmit(infos) {
        infos.preventDefault();
        setCategorias([
            ...categorias,
            values
        ]);
        setValues(valoresIniciais);
    }

    return (
        <AppWrapper>
            <PageDefault>

                <h1>Categoria: {values.nome}</h1>

                <form onSubmit={handleSubmit}>

                    <FormField
                        label="Nome da categoria"
                        type="text"
                        name="nome"
                        value={values.nome}
                        onChange={handleInputChange}
                    />

                    <FormField
                        label="Descrição"
                        type="text"
                        name="descricao"
                        value={values.descricao}
                        onChange={handleInputChange}
                    />

                    <FormField
                        label="Cor"
                        type="text"
                        name="cor"
                        value={values.cor}
                        onChange={handleInputChange}
                    />

                    <button>Cadastrar</button>
                </form>

                <ul>
                    {categorias.map((categoria, index) => {
                        return (
                            <li key={`${categoria}${index}`}>
                                {categoria.nome}
                            </li>
                        )
                    })}
                </ul>


                <Link to="/">
                    <br />
                    <button>
                        Voltar para Home
                    </button>
                </Link>

            </PageDefault>
        </AppWrapper>
    );
}

export default Categoria;