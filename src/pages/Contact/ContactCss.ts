import styled from 'styled-components';

export const ContactPageSection = styled.section`
    padding: 0 8%;
    margin-bottom: 150px;
`;

export const ContactList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 20rem;
`;

export const ContactItem = styled.li`
    padding: 50px;
    min-width: 450px;
    display: grid;  
    box-shadow: 0px 5px 15px rgba(255,255,255,0.35);
    border: 1px solid transparent;
    border-radius: 20px;
    transition: all 0.3s ease;
    font-family: Black Han Sans;
    letter-spacing: 0.15rem;

    &:hover {
        border-color: #FFF;
        box-shadow: none;
    }
    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

export const ContactItemBox = styled.div`
    color: #FFF;
    display: grid;
    place-items: center;
`;

export const ContactItemParagrapgh = styled.p`
    text-align: center;
    line-height: 1.9em;
    letter-spacing: 130%;
    font-size: 20px;
`;