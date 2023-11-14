import React from 'react';
import styled from 'styled-components';

interface CavalierProps {
    theme?: 'lemon' | 'blue';
    text?: string;
    heading?: string;
    inContent?: React.ReactNode;
}

const Cavalier:React.FC<CavalierProps> = ({ theme = 'blue', text, heading, inContent }) => (
    <StyledCavalier data-theme={theme}>
        <CavalierContent>
            {heading && <h1 dangerouslySetInnerHTML={{ __html: heading}} />}
            {text && <p dangerouslySetInnerHTML={{ __html: text}} />}
            {inContent}
        </CavalierContent>
    </StyledCavalier>  
)

export default Cavalier;

const StyledCavalier = styled.article`
    position: relative;
    text-align: left;
    
    [data-theme='lemon'] {
        h1 {
            color: #dbf227;
        }

        p {
            color: #fff;
        }
    }

    p, h1 {
        transition: transform 0.5s, opacity 0.2s;
    }

    h1 {
        margin: 0;
        color: #3c8fdd;
        font-size: 4em;
        font-weight: 900;
        line-height: 1.1;
        letter-spacing: -0.03em;

        @media (min-width: 701px) {
            max-width: 30vw;
            transition-delay: 0.2s;
        }
    }

    p {
        line-height: 1.6;
        color: #0b2b40;

        @media (min-width: 701px) {
            max-width: 701px;
            font-size: 1.07em;
            transition-delay: 0.31s;
        }

        @media (max-width: 700px) {
            font-size: 1.3em;
        }
    }
`;

const CavalierContent = styled.div`
    position: relative;
`;