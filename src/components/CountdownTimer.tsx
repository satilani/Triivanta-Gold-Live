import React, { useState, useEffect } from 'react';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 18,
    minutes: 35,
    seconds: 40,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 42);
    targetDate.setHours(targetDate.getHours() + 18);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full flex flex-col justify-center bg-white/95 backdrop-blur-md border border-[#E5E0D5] rounded-lg p-5 sm:p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#ECE8DF] text-xs">
        <span className="uppercase tracking-[0.18em] text-[#8F6714] font-semibold">
          Official Launch Countdown
        </span>
        <span className="text-slate-500 font-medium">Phase 1 Early Privileges</span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3.5 text-center">
        {timeBlocks.map((block) => (
          <div
            key={block.label}
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded bg-[#FAF9F6] border border-[#E7E2D7] hover:border-[#B58827]/50 transition-colors"
          >
            <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] tabular-nums">
              {String(block.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 mt-1 font-medium">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
