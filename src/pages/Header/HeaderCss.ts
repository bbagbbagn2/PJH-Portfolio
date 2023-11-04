import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 11.12em;
    max-height: 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    font-size: 1rem;
    z-index: 999;

    @media screen and (min-width: 701px) {
        position: fixed;
        padding: 0 6em;
    }
`;

export const HeaderLayout = styled.div`
    margin: 0 6.5%;
`;

export const HeaderNav = styled.nav`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
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