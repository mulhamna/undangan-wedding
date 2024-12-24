import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
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
        <div className="grid grid-cols-4 gap-4 text-black">
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

export default CountdownTimer;