import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const SpecialDayPage = () => (
    <section className="min-h-screen w-screen absolute left-[200%] flex items-center justify-center p-6">
        <div className="bg-white/90 p-8 rounded-lg shadow-lg max-w-md w-full">
            <div className="border-2 border-brown-300 border-dashed p-4 mb-6">
                <p className="text-gray-600 text-center">
                    Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri,
                    supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.
                    Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.
                </p>
                <br/>
                <p className="font-semibold text-brown-600 text-center">Ar-rum : 21</p>
            </div>

            <div className="space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-dancing mb-4">The Special Day</h1>
                    <p className="text-gray-600 text-center">
                        Dengan memohon rahmat dan ridha Allah Subhanahu Wa Ta'ala, izinkan kami mengundang
                        Bapak/Ibu/Saudara(i) untuk menghadiri acara pernikahan putra-putri kami
                    </p>
                </div>
            </div>

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
                        <p className="text-gray-600">
                            Gedung Auditorium Univ.Budi Luhur, Jl. Ciledug Raya,
                            Petukangan Utara, Kec. Pesanggrahan, Kota Jakarta Selatan
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-6 mt-8">
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
                        <p className="text-gray-600">
                            Gedung Auditorium Univ.Budi Luhur, Jl. Ciledug Raya,
                            Petukangan Utara, Kec. Pesanggrahan, Kota Jakarta Selatan
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default SpecialDayPage;