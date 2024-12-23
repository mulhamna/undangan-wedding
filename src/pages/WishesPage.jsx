import React from 'react';

const WishesPage = () => (
    <section className="min-h-screen w-screen absolute left-[400%] flex items-center justify-center p-6">
        <div className="bg-white/90 p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-dancing mb-6">Wish for the Couple</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-gray-700 mb-2">Nama</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2">Ucapan & Doa</label>
                    <textarea
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500"
                        rows={4}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-brown-600 text-white px-6 py-2 rounded-full hover:bg-brown-700 transition"
                >
                    Kirim
                </button>
            </form>
        </div>
    </section>
);

export default WishesPage;