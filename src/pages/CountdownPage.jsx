import React from 'react';
import CountdownTimer from '../components/CountdownTimer';

const CountdownPage = () => (
    <section className="min-h-screen w-screen absolute left-full flex items-center justify-center p-6">
        <div className="bg-white/90 p-8 rounded-lg shadow-lg max-w-md w-full">
            <div className="space-y-8">
                <div className="text-center">
                    <h2 className="text-2xl font-serif mb-4">The Wedding of</h2>
                    <h1 className="text-3xl font-dancing mb-4">Mulham & Anindhita</h1>
                    <CountdownTimer />
                </div>
            </div>
        </div>
    </section>
);

export default CountdownPage;