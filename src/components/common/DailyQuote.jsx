import { useState, useEffect } from 'react';
import { Quote, RefreshCw } from 'lucide-react';

const QUOTES = [
    { text: "学而不思则罔，思而不学则殆。", author: "孔子" },
    { text: "Knowledge is power.", author: "Francis Bacon" },
    { text: "业精于勤，荒于嬉；行成于思，毁于随。", author: "韩愈" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "千里之行，始于足下。", author: "老子" },
    { text: "Education is not the filling of a pail, but the lighting of a fire.", author: "W.B. Yeats" }
];

const DailyQuote = () => {
    const [quote, setQuote] = useState(QUOTES[0]);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Simple "random" based on day of year to be consistent for the day
        const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        setQuote(QUOTES[dayOfYear % QUOTES.length]);
    }, []);

    const refreshQuote = () => {
        setIsAnimating(true);
        setTimeout(() => {
            const random = Math.floor(Math.random() * QUOTES.length);
            setQuote(QUOTES[random]);
            setIsAnimating(false);
        }, 300);
    };

    return (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-100 dark:border-amber-800/30 rounded-xl p-4 md:p-5 flex items-start gap-4 shadow-sm mb-6 relative group transform transition-all hover:scale-[1.01]">
            <div className="bg-white/80 dark:bg-amber-900/50 p-2 rounded-lg shadow-sm text-amber-500 shrink-0">
                <Quote size={20} className="fill-current" />
            </div>

            <div className="flex-1">
                <p className={`text-slate-700 dark:text-slate-200 font-medium font-serif italic text-sm md:text-base leading-relaxed transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    "{quote.text}"
                </p>
                <div className="flex items-center justify-between mt-2">
                    <p className={`text-xs text-slate-500 dark:text-slate-400 font-medium transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                        —— {quote.author}
                    </p>
                    <button
                        onClick={refreshQuote}
                        className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-100 dark:hover:bg-amber-800/50 rounded-full transition-all opacity-0 group-hover:opacity-100"
                        title="换一句"
                    >
                        <RefreshCw size={14} className={isAnimating ? 'animate-spin' : ''} />
                    </button>
                </div>
            </div>

            {/* Decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Quote size={40} className="text-amber-500 transform rotate-180" />
            </div>
        </div>
    );
};

export default DailyQuote;
