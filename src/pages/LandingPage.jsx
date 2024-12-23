import React from 'react';
import { MailOpen } from 'lucide-react';
import FlowerDecoration from '../components/FlowerDecoration';

const LandingPage = ({ guestName, handleOpen }) => (
    <div className="relative h-screen flex items-center justify-center">
        {/* Background image with overlay */}
        <div
            className="absolute inset-0 z-0"
            style={{
                backgroundImage: 'url("/static/img/tangga.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center p-8 bg-white/80 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="absolute top-4 right-4 rotate-45">
                <FlowerDecoration />
            </div>
            <h1 className="text-3xl font-dancing mb-4">Mulham & Anindhita</h1>
            <p className="text-gray-600 mb-2">Kepada Bapak/Ibu/Saudara/i</p>
            <p className="text-xl font-semibold text-brown-600 mb-6">{guestName}</p>
            <p className="text-gray-600 mb-2">Mohon maaf bila ada kesalahan penulisan nama/gelar</p>
            <button
                onClick={handleOpen}
                className="bg-brown-600 text-white px-6 py-2 rounded-full hover:bg-brown-700 transition inline-flex items-center gap-2"
            >
                <span>Buka Undangan</span>
                <MailOpen className="w-5 h-5" />
            </button>
        </div>
    </div>
);

export default LandingPage;