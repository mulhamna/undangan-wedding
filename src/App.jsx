import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, MailOpen } from 'lucide-react';

const WeddingApp = () => {
    const [guestName, setGuestName] = useState("");
    const [showContent, setShowContent] = useState(false); // State ini belum ada
    const [currentPage, setCurrentPage] = useState(0);    // State ini belum ada

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const name = searchParams.get('to') || 'Tamu';
        setGuestName(decodeURIComponent(name));
    }, []);

// Simulated couple's story data
    const timelineEvents = [
        { year: '2019', title: 'The Beginning', description: 'Pertama kali bertemu saat sama-sama kuliah...' },
        { year: '2021', title: 'The Special Day', description: 'Moment spesial yang menyatukan kami...' },
        { year: '2023', title: 'The Big Question', description: 'Saat pertanyaan besar itu mengubah segalanya...' }
    ];

    const handleOpen = () => {
        setShowContent(true);
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, 5));
    };

    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 0));
    };

    return (
        <div className="min-h-screen bg-neutral-50">
            {!showContent ? (
// Landing Page
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
    {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>

    {/* Content */}
                    <div className="relative z-10 text-center p-8 bg-white/80 rounded-lg shadow-lg max-w-md mx-auto">
                        <div className="absolute top-4 right-4 rotate-45">
                            <FlowerDecoration/>
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
                            <MailOpen className="w-5 h-5"/>
                        </button>
                    </div>
                </div>
            ) : (
// Main Content
                <div className="min-h-screen relative">
                    <div className="absolute inset-0 transition-transform duration-500"
                         style={{transform: `translateX(-${currentPage * 100}%)`}}>

    {/* Page 1 : Bismillah */}
                        <section className="min-h-screen w-screen absolute flex items-center justify-center p-6">
                            <div className="bg-white/90 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                                <h2 className="text-2xl font-dancing mb-4">Bismillahirrahmanirrahim</h2>
                                <h2 className="text-2xl font-serif mb-4">Assalamu`alaikum Warahmatullahi
                                    Wabarakatuh</h2>
                                <h3 className="text-1xl font-serif mb-1">Maha Suci Allah yang telah menciptakan
                                    makhluk-Nya berpasang-pasangan.
                                    Ya Allah semoga ridha-Mu tercurah mengiringi pernikahan putra-putri kami:</h3>
                                <h1 className="text-3xl font-dancing mb-4">Anindhita</h1>
                                <h3 className="text-1xl font-serif mb-1">Putri dari:</h3>
                                <h3 className="text-1xl font-serif mb-1">Bpk. Hendra Gihan & Ibu Hermawaty</h3>
                                <h1 className="text-3xl font-dancing mb-4">Mulham</h1>
                                <h3 className="text-1xl font-serif mb-1">Putra dari:</h3>
                                <h3 className="text-1xl font-serif mb-1">Bpk. Muntazar & Ibu Ida Subyarwati</h3>
                            </div>
                        </section>

    {/* Page 2 : Countdown */}
                        <section
                            className="min-h-screen w-screen absolute left-full flex items-center justify-center p-6">
                            <div className="bg-white/90 p-8 rounded-lg shadow-lg max-w-md w-full">
                                <div className="space-y-8">
                                    <div className="text-center">
                                        <h2 className="text-2xl font-serif mb-4">The Wedding of</h2>
                                        <h1 className="text-3xl font-dancing mb-4">Mulham & Anindhita</h1>
                                        <CountdownTimer/>
                                    </div>
                                </div>
                            </div>
                        </section>

    {/* Page 3 : Special Day */}
                        <section
                            className="min-h-screen w-screen absolute left-[200%] flex items-center justify-center p-6">
                            <div className="bg-white/90 p-8 rounded-lg shadow-lg max-w-md w-full">
                                <div className="border-2 border-brown-300 border-dashed p-4 mb-6">
                                    <p className="text-gray-600 text-center">Dan di antara tanda-tanda
                                        kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri,
                                        supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
                                        diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu
                                        benar-benar terdapat tanda-tanda bagi kaum yang berfikir.</p><br/>
                                    <p className="font-semibold text-brown-600 text-center">Ar-rum : 21</p>
                                </div>

                                <br/><br/>

                                <div className="space-y-8">
                                    <div className="text-center">
                                        <h1 className="text-3xl font-dancing mb-4">The Special Day</h1>
                                        <p className="text-gray-600 text-center">Dengan memohon rahmat dan ridha Allah Subhanahu Wa Ta'ala, izinkan kami mengundang Bapak/Ibu/Saudara(i) untuk menghadiri acara pernikahan putra-putri kami</p>
                                    </div>
                                </div>

                                <br/><br/>

                                <div className="space-y-6">
                                    <h3 className="text-xl font-dancing text-center mb-6">Akad Nikah</h3>
                                    <div className="flex items-center gap-4">
                                        <Calendar className="w-6 h-6 text-brown-600"/>
                                        <div>
                                        <p className="text-gray-600">Minggu, 16 Februari 2025</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Clock className="w-6 h-6 text-brown-600"/>
                                        <div>
                                            <p className="text-gray-600">Pukul 08.00 s.d 10.00 WIB</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <MapPin className="w-6 h-6 text-brown-600 flex-shrink-0"/>
                                        <div>
                                            <p className="text-gray-600">Gedung Auditorium Univ.Budi Luhur, Jl. Ciledug
                                                Raya, Petukangan Utara, Kec. Pesanggrahan, Kota Jakarta Selatan</p>
                                        </div>
                                    </div>
                                </div>

                                <br/><br/>

                                <div className="space-y-6">
                                    <h3 className="text-xl font-dancing text-center mb-6">Resepsi</h3>
                                    <div className="flex items-center gap-4">
                                        <Calendar className="w-6 h-6 text-brown-600"/>
                                        <div>
                                            <p className="text-gray-600">Minggu, 16 Februari 2025</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Clock className="w-6 h-6 text-brown-600"/>
                                        <div>
                                            <p className="text-gray-600">Pukul 11.00 WIB s.d Selesai</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <MapPin className="w-6 h-6 text-brown-600 flex-shrink-0"/>
                                        <div>
                                            <p className="text-gray-600">Gedung Auditorium Univ.Budi Luhur, Jl. Ciledug
                                                Raya, Petukangan Utara, Kec. Pesanggrahan, Kota Jakarta Selatan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

    {/* Page 4 : A Glimpse of Us */}
                        <section
                            className="min-h-screen w-screen absolute left-[300%] flex items-center justify-center p-6">
                            <div className="bg-white/90 p-8 rounded-lg shadow-lg max-w-md w-full">
                                <h2 className="text-2xl font-dancing mb-6">A Glimpse of Us</h2>
                                <div className="space-y-8">
                                    {timelineEvents.map((event, index) => (
                                        <div key={index} className="relative pl-8 border-l-2 border-brown-300">
                                            <div
                                                className="absolute left-[-9px] top-0 w-4 h-4 bg-brown-600 rounded-full"/>
                                            <h3 className="font-serif text-lg mb-2">{event.year}</h3>
                                            <h4 className="font-medium mb-1">{event.title}</h4>
                                            <p className="text-gray-600">{event.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

    {/* Page 4 : A Glimpse of Us */}
                        <section
                            className="min-h-screen w-screen absolute left-[300%] flex items-center justify-center p-6">
                            <div className="bg-white/90 p-8 rounded-lg shadow-lg max-w-md w-full">
                                <h2 className="text-2xl font-serif mb-6">Our Story</h2>
                                <div className="space-y-8">
                                    {timelineEvents.map((event, index) => (
                                        <div key={index} className="relative pl-8 border-l-2 border-brown-300">
                                            <div
                                                className="absolute left-[-9px] top-0 w-4 h-4 bg-brown-600 rounded-full"/>
                                            <h3 className="font-serif text-lg mb-2">{event.year}</h3>
                                            <h4 className="font-medium mb-1">{event.title}</h4>
                                            <p className="text-gray-600">{event.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

    {/* Page 5 : The Couple's Story */}
                        <section
                            className="min-h-screen w-screen absolute left-[400%] flex items-center justify-center p-6">
                            <div className="bg-white/90 p-8 rounded-lg shadow-lg max-w-md w-full">
                                <h2 className="text-2xl font-serif mb-6">Wish for the Couple</h2>
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

                    </div>

    {/* Page 6 : Kami yang Berbahagia */}
                    <div className="fixed bottom-6 left-0 right-0 flex justify-center gap-4">
                        <button
                            onClick={handlePrevPage}
                            className="bg-brown-600 text-white w-12 h-12 rounded-full flex items-center justify-center disabled:opacity-50"
                            disabled={currentPage === 0}
                        >
                            ←
                        </button>
                        <button
                            onClick={handleNextPage}
                            className="bg-brown-600 text-white w-12 h-12 rounded-full flex items-center justify-center disabled:opacity-50"
                            disabled={currentPage === 4}
                        >
                            →
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

// Subcomponents
const FlowerDecoration = () => (
    <div className="text-brown-300">
        <svg width="60" height="60" viewBox="0 0 60 60">
        </svg>
    </div>
);

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        // Set target date: February 16, 2025, 08:00 WIB
        const targetDate = new Date('2025-02-16T08:00:00+07:00').getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="grid grid-cols-4 gap-4 text-white">
            {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hour', value: timeLeft.hours },
                { label: 'Min', value: timeLeft.minutes },
                { label: 'Sec', value: timeLeft.seconds }
            ].map(({ label, value }) => (
                <div key={label} className="text-center">
                    <div className="text-3xl font-bold mb-1">
                        {String(value).padStart(2, '0')}
                    </div>
                    <div className="text-sm">{label}</div>
                </div>
            ))}
        </div>
    );
};

export default WeddingApp;