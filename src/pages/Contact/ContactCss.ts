import styled from 'styled-components';

export const ContactPageSection = styled.section`
margin-bottom: 150px;
display: grid;
justify-items: center;
`;

export const ContactPageBox = styled.div`
padding: 3rem;
width: 60%;
height: 510px;
display: grid;
align-items: center; 
background: #FFFFFF;
border-radius: 1rem;
box-shadow: 0px 1px 25px 4px rgba(234,234,234,0.3);
`;

export const ContactItemCol = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`;

export const ContactItemBox = styled.div`
color: #1A1E23;
display: grid;
place-items: center;
`;

export const ContactItemParagrapgh = styled.p`
text-align: center;
line-height: 1.9em;
color: #1A1E23;
`;