import React from 'react';
import LandHead from './LandHead';
import LandMain from './LandMain';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function LandPage() {
    return (
        <>
            <Navbar />
            <LandHead />
            <LandMain />
            <Footer />
        </>
    )
}

export default LandPage