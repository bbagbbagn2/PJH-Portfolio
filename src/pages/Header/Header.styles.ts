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
    z-index: 1000;

    :focus {
        outline-width: 0.2em;
        outline-style: dashed;
        outline-color: transparent;

    }

    button::before {
        top: 0;
    }

    button::after {
        top: 1.13em;
        right: 0;
        width: 72%;
    }
    
    @media screen and (min-width: 701px) {
        position: fixed;
        padding: 0 6em;
    }
`;
export const MenuToggle = styled.button`
    position: relative;
    margin: 0;
    margin-top: 0.699em;
    padding: 0;
    width: 2.78em;
    height: 2.09em;
    display: inline-flex;
    background: none;
    color: #3c8fdd;
    font-size: 100%;
    line-height: 1.15;
    cursor: pointer;
    z-index: 999;

    &.x {
        transform: scale(0.9);

        ::before {
            transform: rotate(45deg);
        }

        ::after {
            top: 0;
            width: 100%;
            transform: rotate(-45deg);
        }
    }

    :focus {
        outline-color: transparent;
    }

    ::before, ::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        transition: 0.2s ease;
        transform: rotate(0deg);
        background-color: currentColor;
    }

    ::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        transition: 0.2s ease;
        transform: rotate(0deg);
        background-color: currentColor;
    }

    
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