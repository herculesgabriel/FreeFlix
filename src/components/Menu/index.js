import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper } from './style.js';
import Button from '../Button';

function whereAmI() {

    if (window.location.href === "http://localhost:3000/cadastro/video") {
        return (
            <Button as={Link} to="/cadastro/categoria">Cadastrar categoria</Button>
        )
    } else if (window.location.href === "http://localhost:3000/cadastro/categoria") {
        return (
            <Button as={Link} to="/cadastro/video">Novo vídeo</Button>
        )
    } else if (window.location.href === "http://localhost:3000/") {
        return (
            <div>
                <Button as={Link} to="/cadastro/video">Novo vídeo</Button>
                <Button as={Link} to="/cadastro/categoria">Cadastrar categoria</Button>
            </div>
        )

    }

}

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImage src={Logo} alt="FreeFlix logo" />
            </Link>

            {whereAmI()}

        </MenuWrapper>
    );
}

export default Menu;