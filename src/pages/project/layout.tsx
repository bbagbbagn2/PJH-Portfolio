import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Header from '../Header/Header.tsx';

type LayoutProps = {
    children: ReactNode
}

export default function layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <MainLayout>
                <PageHeader>
                    <Heading>Icondb</Heading>
                </PageHeader>
                {children}
            </MainLayout>
        </>
    );
}

const MainLayout = styled.main`
    margin: 0 auto;
    padding: 0 3.5rem;
    max-width: 1400px;

    @media (min-width: 651px) {
        font-size: 18px;
    }
    @media (min-width: 1024px) {
        margin-top: calc(3.5rem * 1.2);
    }
`;

const PageHeader = styled.header`
    position: relative;
    margin-top: 1.1em;
    margin-bottom: 3.5rem;
    text-align: center;
`;

const Heading = styled.h1`
    margin: 0.67em 0;
    font-size: 1.802em;
    color: #474747;
    user-select: none;
    transition: color 0.6s;
`;
