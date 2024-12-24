import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioControl = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        // Auto play when component mounts
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                console.log("Auto-play prevented:", error);
                setIsPlaying(false);
            });
        }
    }, []);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src="/path-to-your-audio-file.mp3"
                loop
            />
            <button
                onClick={toggleAudio}
                className="fixed bottom-24 right-4 z-50 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
            >
                {isPlaying ? (
                    <Volume2 className="w-6 h-6 text-gray-800" />
                ) : (
                    <VolumeX className="w-6 h-6 text-gray-800" />
                )}
            </button>
        </>
    );
};

export default AudioControl;