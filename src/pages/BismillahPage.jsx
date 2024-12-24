import React from 'react';

const BismillahPage = () => (
    <section className="min-h-screen w-screen absolute flex items-center justify-center">
        <div className="relative w-[390px] h-[1574px]">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url("/static/img/background1.jpg")',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '390px',
                    height: '1574px'
                }}
            />
            <div className="relative z-10 text-center p-8">
                <br/><br/><br/>
                <h2 className="text-2xl font-dancing mb-4">Bismillahirrahmanirrahim</h2>
                <h2 className="text-2xl font-serif mb-4">Assalamu`alaikum Warahmatullahi Wabarakatuh</h2>
                <h3 className="text-1xl font-serif mb-1">
                    Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
                    Ya Allah semoga ridha-Mu tercurah mengiringi pernikahan putra-putri kami:
                </h3>
                <br/><br/><br/><br/><br/>
                <div className="flex justify-center mt-4 mb-4">
                    <img
                        src="/static/img/mulhamtest.png"
                        alt="Mulham"
                        className="w-32 h-32 rounded-full object-cover border-2 border-gray-200"
                    />
                </div>
                <br/><br/><br/><br/><br/>
                <h1 className="text-3xl font-dancing mb-4">Anindhita</h1>
                <h3 className="text-1xl font-serif mb-1">Putri dari:</h3>
                <h3 className="text-1xl font-serif mb-1">Bpk. Hendra Gihan & Ibu Hermawaty</h3>
                <br/><br/><br/><br/><br/>
                <div className="flex justify-center mt-4 mb-4">
                    <img
                        src="/static/img/mulhamtest.png"
                        alt="Mulham"
                        className="w-32 h-32 rounded-full object-cover border-2 border-gray-200"
                    />
                </div>
                <br/><br/><br/><br/><br/>
                <h1 className="text-3xl font-dancing mb-4">Mulham</h1>
                <h3 className="text-1xl font-serif mb-1">Putra dari:</h3>
                <h3 className="text-1xl font-serif mb-1">Bpk. Muntazar & Ibu Ida Subyarwati</h3>
            </div>
        </div>
    </section>
);

export default BismillahPage;