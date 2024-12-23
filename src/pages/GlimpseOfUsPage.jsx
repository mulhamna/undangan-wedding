import React from 'react';

const timelineEvents = [
    { year: '2019', title: 'The Beginning', description: 'Pertama kali bertemu saat sama-sama kuliah...' },
    { year: '2021', title: 'The Special Day', description: 'Moment spesial yang menyatukan kami...' },
    { year: '2023', title: 'The Big Question', description: 'Saat pertanyaan besar itu mengubah segalanya...' }
];

const GlimpseOfUsPage = () => (
    <section className="min-h-screen w-screen absolute left-[300%] flex items-center justify-center p-6">
        <div className="bg-white/90 p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-dancing mb-6">A Glimpse of Us</h2>
            <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-brown-300">
                        <div className="absolute left-[-9px] top-0 w-4 h-4 bg-brown-600 rounded-full"/>
                        <h3 className="font-serif text-lg mb-2">{event.year}</h3>
                        <h4 className="font-medium mb-1">{event.title}</h4>
                        <p className="text-gray-600">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default GlimpseOfUsPage;