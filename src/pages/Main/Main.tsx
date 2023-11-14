import React from 'react';

import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Features from '../Features/Features';
import Skill from '../Skill/Skill';
import Carriageway from '../Carriageway/index';
import Contact from '../Contact/Contact';
import Footer from '../Footer/index';

export default function Main() {
    return (
        <>
            <Header />
            <main tabIndex={-1}>
                <Profile />
                <Features />
                <Carriageway />
            </main>
            <Footer />
        </>
    );
}
