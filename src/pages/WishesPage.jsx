import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz_TmUHHHgiMdGnqJcjTDReEH1yHudr4Q5uGujHyLIv/dev';

const WishesPage = () => {
    const [wishes, setWishes] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const savedWishes = localStorage.getItem('wedding-wishes');
        if (savedWishes) {
            setWishes(JSON.parse(savedWishes));
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const newWish = {
                id: Date.now(),
                name: formData.name,
                message: formData.message,
                timestamp: new Date().toISOString()
            };

            // Ubah format data untuk dikirim
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('message', formData.message);

            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                body: formDataToSend
            });

            const result = await response.json();

            if (result.status !== 'success') {
                throw new Error(result.message || 'Failed to submit wish');
            }

            // Update local state
            const updatedWishes = [newWish, ...wishes];
            setWishes(updatedWishes);
            localStorage.setItem('wedding-wishes', JSON.stringify(updatedWishes));

            // Reset form
            setFormData({ name: '', message: '' });
            alert('Terima kasih atas ucapan dan doanya!');

        } catch (error) {
            console.error('Error submitting wish:', error);
            alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="min-h-screen w-screen absolute left-[400%] flex items-center justify-center p-6">
            <div className="bg-white/90 p-8 rounded-lg shadow-lg max-w-md w-full">
                {/* Header with decoration */}
                <div className="relative mb-8">
                    <h2 className="text-2xl font-dancing text-center mb-2">The Couple's Story</h2>
                </div>

                {/* Timeline */}
                <div className="relative mb-12">
                    <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-brown-300"></div>
                    <div className="space-y-8">
                        <TimelineItem
                            year="2021"
                            title="The Beginning"
                            content="Moment pertama kali bertemu di Graha BPS, Semarang. Momen singkat yang memulai segalanya."
                        />
                        <TimelineItem
                            year="2022"
                            title="Building Our Bond"
                            content="Jarak adalah ujian. Tetapi, kami membuktikan bahwa cinta sejati tak terbatas jarak dan waktu."
                        />
                        <TimelineItem
                            year="2023"
                            title="The Big Question"
                            content="Saat pertanyaan besar itu diungkapkan, dan jawaban 'Ya' yang mengubah segalanya."
                        />
                    </div>
                </div>

                {/* Wishes Form */}
                <div className="mb-8">
                    <h2 className="text-2xl font-dancing text-center mb-6">Wish for the Couple</h2>
                    <p className="text-center text-gray-600 mb-6">Kirimkan ucapan dan doa untuk kedua mempelai</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Nama"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full px-4 py-2 rounded-lg border border-brown-300 focus:outline-none focus:ring-2 focus:ring-brown-500"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div>
                           <textarea
                               placeholder="Ucapan"
                               value={formData.message}
                               onChange={(e) => setFormData({...formData, message: e.target.value})}
                               className="w-full px-4 py-2 rounded-lg border border-brown-300 focus:outline-none focus:ring-2 focus:ring-brown-500"
                               rows={4}
                               required
                               disabled={isSubmitting}
                           />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-brown-600 text-white px-6 py-2 rounded-full hover:bg-brown-700 transition disabled:opacity-50"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Mengirim...' : 'Kirim'}
                        </button>
                    </form>
                </div>

                {/* Wishes Display */}
                <div className="space-y-4 max-h-60 overflow-y-auto">
                    {wishes.map((wish) => (
                        <div
                            key={wish.id}
                            className="bg-brown-50 p-4 rounded-lg"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className="font-semibold">{wish.name}</span>
                                <Heart className="w-4 h-4 text-red-500 fill-current" />
                            </div>
                            <p className="text-gray-600">{wish.message}</p>
                        </div>
                    ))}
                </div>

                {/* E-Gift Section */}
                <div className="mt-8 pt-8 border-t border-brown-300">
                    <h2 className="text-xl font-dancing text-center mb-4">e-Gift</h2>
                    <p className="text-center text-gray-600 mb-4">Kirimkan hadiah elektronik kesini</p>
                    <button
                        className="w-full bg-brown-600 text-white px-6 py-2 rounded-full hover:bg-brown-700 transition"
                        onClick={() => {/* Handle e-gift */}}
                    >
                        Kirim Hadiah
                    </button>
                </div>
            </div>
        </section>
    );
};

// Timeline Item Component
const TimelineItem = ({ year, title, content }) => (
    <div className="relative pl-8">
        3
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-dancing text-lg mb-1">{year}: {title}</h3>
            <p className="text-gray-600 text-sm">{content}</p>
        </div>
    </div>
);

export default WishesPage;