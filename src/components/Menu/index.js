import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper } from './style.js';
import Button from '../Button';

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage src={Logo} alt="FreeFlix logo" />
            </a>

            <Button as="a" href="/">
                Novo Vídeo
            </Button>
        </MenuWrapper>
    );
}

export default Menu