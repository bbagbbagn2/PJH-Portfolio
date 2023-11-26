import styled from 'styled-components';

export const Footer = styled.footer`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0B2B40;    
    color: #DBF227;
    user-select: auto;
    z-index: 3;

    &.home {
        font-size: 1.2em;

        @media (min-width: 701px){
            @media (max-height: 1199px) {
                height: 100vh;
            }
        }      
    }

    &.project {
        margin-top: 9.1563rem;
        height: unset;
        font-size: 1.09876rem;
    }

    li a {
        color: currentColor;
    }
`;

export const InnerContentBox = styled.div`
    padding-top: 8rem;
    padding-bottom: 5rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 581px) and (max-width: 700px) {
        padding-left: 7rem;
        padding-right: 7rem;
    }

    @media (min-width: 701px) {
        padding-left: 10rem;
        padding-right: 10rem;
    }

    @media (min-width: 701px) and (max-width: 1500px) {
        max-width: 1500px;
    }

    @media (min-width: 1501px) {
        max-width: 1760px;
    }
`;

export const FooterMainBox = styled.div`
    margin-bottom: 7.4em;
    width: 100%;
    display: flex;
    transform: translate3d(0, 0, 0);
    opacity: 1;

    @media (min-width: 700px) {
        transition: transform 0.5s, opacity 0.2s;
        transition-delay: 300ms;
    }

    @media (max-width: 420px) {
        flex-direction: column;
    }

    > ul {
        margin-top: 2.05em;
        font-size: 1.15em;
        line-height: 2.5;
    }
`;

export const FooterBottomBox = styled.div`
    padding-top: 3em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(186, 221, 118, 0.7);
    font-size: 1.15em;

    @media (min-width: 700px) {
        transition: transform 0.5s, opacity 0.2s;
        transition-delay: 500ms;
    }

    @media (max-width: 460px) {
            display: none;
    }
`;