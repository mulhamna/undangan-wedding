import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import BismillahPage from './pages/BismillahPage';
import CountdownPage from './pages/CountdownPage';
import SpecialDayPage from './pages/SpecialDayPage';
import GlimpseOfUsPage from './pages/GlimpseOfUsPage';
import WishesPage from './pages/WishesPage';
import NavigationButtons from './components/NavigationButtons';

const WeddingApp = () => {
    const [guestName, setGuestName] = useState("");
    const [showContent, setShowContent] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const name = searchParams.get('to') || 'Tamu';
        setGuestName(decodeURIComponent(name));
    }, []);

    const handleOpen = () => setShowContent(true);
    const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, 5));
    const handlePrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 0));

    return (
        <div className="min-h-screen bg-neutral-50">
            {!showContent ? (
                <LandingPage guestName={guestName} handleOpen={handleOpen} />
            ) : (
                <div className="min-h-screen relative">
                    <div className="absolute inset-0 transition-transform duration-500"
                         style={{transform: `translateX(-${currentPage * 100}%)`}}>
                        <BismillahPage />
                        <CountdownPage />
                        <SpecialDayPage />
                        <GlimpseOfUsPage />
                        <WishesPage />
                    </div>
                    <NavigationButtons
                        currentPage={currentPage}
                        handlePrevPage={handlePrevPage}
                        handleNextPage={handleNextPage}
                        maxPage={4}
                    />
                </div>
            )}
        </div>
    );
};

export default WeddingApp;