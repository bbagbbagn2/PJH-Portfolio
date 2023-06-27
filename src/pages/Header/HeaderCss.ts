import styled from 'styled-components';

export const Header = styled.header`
position: fixed;
width: 100vw;
height: 65px;
display: grid;
place-items: center;
background: rgba(26, 30, 35, 0.5);
z-index: 999;
`;

export const HeaderLayout = styled.div`
margin: 0 6.5%;
`;

export const HeaderNav = styled.nav`
display: grid;
grid-template-columns: repeat(4, 1fr);
place-items: center;

@media (max-width: 1024px) {
    display: none;
}
`;

export const NavItemBox = styled.div`
width: 190px;
height: 100%;
display: grid;
place-items: center;
`;

export const NavItem = styled.p<{ color?: string }>`
font-size: 14px;
cursor: pointer;
transition: all 0.3s;
color: ${(props) => (props.color || "#939DAB")};

&:hover{
    color: #FFFFFF;
}
`;