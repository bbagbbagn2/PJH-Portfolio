import React from 'react';

import Header from '../Header/Header.tsx';
import Profile from '../Profile/Profile.tsx';
import Features from '../Features/Features.tsx';
import Skill from '../Skill/Skill.tsx';
import Work from '../Work/Work.tsx';
import Contact from '../Contact/Contact.tsx';
import Footer from '../Footer/Footer.tsx';

export default function Main() {
    return (
        <>
            <Header />
            <main tabIndex={-1}>
                <Profile />
                <Features />
                <Work />
            </main>
            <Footer />
        </>
    );
}
