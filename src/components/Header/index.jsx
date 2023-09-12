import React from 'react';
import styled from 'styled-components';


// Style pour _Header
const HeaderContainer = styled.header`
  width: 1240px;
  height: 68px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

// Style pour .LOGO
const Logo = styled.div`
  //position: absolute;
  left: 0%;
  right: 83.04%;
  top: 0%;
  bottom: 0%;
`;

// Style pour _Nav
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 57px;
  //position: absolute;
  height: 34px;
  left: 75.08%;
  right: 0%;
  top: calc(50% - 34px/2);
`;

// Style pour Accueil et A Propos
const NavLink = styled.a`
  width: ${props => props.width || '116px'};
  height: 34px;
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 142.6%;
  display: flex;
  align-items: flex-end;
  text-align: right;
  color: #FF6060;
  text-decoration-line: ${props => props.underline ? 'underline' : 'none'};
  flex: none;
  order: ${props => props.order || 1};
  flex-grow: 0;
`;

// Composant LogoImage
const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Header = () => (
    <HeaderContainer>
        <Logo>
            <LogoImage src="src/assets/logo/logo.png" alt="Logo" />
        </Logo>
        <Nav>
            <NavLink width="136px" underline order={0}>
                Accueil
            </NavLink>
            <NavLink>
                A Propos
            </NavLink>
        </Nav>
    </HeaderContainer>
);

export default Header;
