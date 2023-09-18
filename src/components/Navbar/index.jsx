// import React from 'react';
// import styled from 'styled-components';
// import colors from "../../utils/style/colors";
//
//
// // Style pour _Header
// const NavbarContainer = styled.nav`
//   display: flex;
//   align-items: center;
//   width: 89.33%;
//   margin-top: 20px;
//   margin-bottom: 27px;
//
// `;
//
//
// // Style pour _Nav
// const Nav = styled.ul`
//   display: flex;
//   justify-content: flex-end;
//   align-items: flex-start;
//   gap: 26px;
//   flex: 1 0 0;
// `;
//
// // Style pour Accueil et A Propos
// const NavLink = styled.li`
//   text-align: right;
//   font-size: 12px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 142.6%; /* 17.112px */
//   text-transform: uppercase;
//
//   a {
//     color: ${colors.primary};
//     cursor: pointer;
//   }
// `;
//
// const NavLogoSvg = styled.svg`
//   width: 145px;
//   height: 46.881px;
//   flex-shrink: 0;
// `;
//
//
// const NavItem = ({children }) => (
//     <NavLink>
//         <a >{children}</a>
//     </NavLink>
// );
//
//
// const Navbar = () => (
//     <NavbarContainer>
//         <NavLogoSvg>
//             <svg aria-label="logo du site kasa">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="145" height="47" viewBox="0 0 145 47" fill="none">
//                     <path d="M13.8398 23.8874L6.09457 31.8073V42.9207H0V0H6.09457V24.0151L29.2032 0H36.1865L18.0298 19.2887L37.4562 42.9207H30.3459L13.8398 23.8874Z" fill="#FF6060"/>
//                     <path d="M81.8958 39.4717L84.3082 34.8731C87.1015 36.7892 91.4185 38.1943 95.6085 38.1943C101.068 38.1943 103.227 36.5337 103.227 33.7234C103.227 26.4422 82.7845 32.7015 82.7845 19.7997C82.7845 13.9237 87.9903 10.0915 96.2434 10.0915C100.433 10.0915 105.258 11.2412 108.052 13.0295L105.512 17.6282C102.592 15.7121 99.4177 15.0734 96.2434 15.0734C91.1646 15.0734 88.6252 16.9895 88.6252 19.5443C88.6252 27.2087 109.067 20.9494 109.067 33.5957C109.067 39.4717 103.735 43.1762 95.1007 43.1762C89.8949 43.3039 84.5621 41.6433 81.8958 39.4717Z" fill="#FF6060"/>
//                     <path d="M145 23.2487V42.9207H139.413V38.5775C137.509 41.5155 133.827 43.1762 128.748 43.1762C121.384 43.1762 116.813 39.2162 116.813 33.5957C116.813 28.3583 120.114 24.1429 129.764 24.1429H139.033V22.9932C139.033 18.0114 136.112 15.2011 130.399 15.2011C126.589 15.2011 122.653 16.6062 120.114 18.6501L117.702 14.1792C121.003 11.4966 125.828 9.96375 131.033 9.96375C140.048 10.0915 145 14.4346 145 23.2487ZM139.16 32.957V28.3583H130.145C124.304 28.3583 122.653 30.6576 122.653 33.3402C122.653 36.5337 125.32 38.5775 129.764 38.5775C134.208 38.7053 137.763 36.7892 139.16 32.957Z" fill="#FF6060"/>
//                     <path d="M63.1041 34.3621V43.0485L66.7863 40.8769V32.1906L63.1041 34.3621Z" fill="#FF6060"/>
//                     <path d="M73.2618 23.7597L58.1523 14.9456L49.7723 10.0915L41.5192 24.5261L41.6462 38.0666L56.6287 46.8806L58.1523 45.9864V33.2124L64.8817 21.3326L71.7381 25.2926V38.0666L73.2618 37.1724V23.7597Z" fill="#FF6060"/>
//                 </svg>
//             </svg>
//
//         </NavLogoSvg>
//         <Nav>
//             <NavItem>Accueil</NavItem>
//             <NavItem>A Propos</NavItem>
//         </Nav>
//     </NavbarContainer>
// );
//
// export default Navbar;
