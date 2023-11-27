import React from 'react';

import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Features from '../Features/Features';
import Skill from '../Skill/Skill';
import Carriageway from '../Carriageway/Carriageway';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

export default function Main() {
    return (
        <>
            <Header />
            <main>
                <Profile />
                <Features />
                <Carriageway />
            </main>
            <Footer />
        </>
    );
}
