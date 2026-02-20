import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Info, Settings2, Timer, Gauge, Flag } from 'lucide-react';

const DistanceProblemLab = () => {
    const [mode, setMode] = useState('meeting'); // 'meeting', 'chasing'
    const [speedA, setSpeedA] = useState(40);
    const [speedB, setSpeedB] = useState(20);
    const [distance, setDistance] = useState(300);
    const [time, setTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const animationRef = useRef();

    const trackWidth = 600;
    const meetingTime = distance / (speedA + speedB);
    const chasingTime = speedA > speedB ? distance / (speedA - speedB) : Infinity;
    const targetTime = mode === 'meeting' ? meetingTime : chasingTime;

    useEffect(() => {
        if (isPlaying) {
            const start = Date.now() - (time * 1000);
            const animate = () => {
                const now = Date.now();
                const elapsed = (now - start) / 1000;

                if (elapsed >= targetTime) {
                    setTime(targetTime);
                    setIsPlaying(false);
                } else {
                    setTime(elapsed);
                    animationRef.current = requestAnimationFrame(animate);
                }
            };
            animationRef.current = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(animationRef.current);
        }
        return () => cancelAnimationFrame(animationRef.current);
    }, [isPlaying, targetTime, time, mode]);

    const posA = speedA * time;
    const posB = mode === 'meeting' ? (distance - speedB * time) : (speedB * time);

    const reset = () => {
        setTime(0);
        setIsPlaying(false);
    };

    return (
        <div className="p-6 bg-slate-900 rounded-[3rem] text-slate-100 shadow-2xl border-4 border-slate-800">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header Controls */}
                <div className="flex justify-between items-center bg-slate-800 p-4 rounded-3xl border border-slate-700">
                    <div className="flex gap-2">
                        <button
                            onClick={() => { setMode('meeting'); reset(); }}
                            className={`px-4 py-2 rounded-xl text-sm font-black transition-all ${mode === 'meeting' ? 'bg-indigo-600' : 'bg-slate-700 hover:bg-slate-600'}`}
                        >
                            相遇问题
                        </button>
                        <button
                            onClick={() => { setMode('chasing'); reset(); }}
                            className={`px-4 py-2 rounded-xl text-sm font-black transition-all ${mode === 'chasing' ? 'bg-indigo-600' : 'bg-slate-700 hover:bg-slate-600'}`}
                        >
                            追及问题
                        </button>
                    </div>
                    <div className="flex gap-4 items-center">
                        <label className="text-xs font-black opacity-50 uppercase tracking-widest">初始距离</label>
                        <input
                            type="range" min="100" max="500" value={distance}
                            onChange={(e) => { setDistance(parseInt(e.target.value)); reset(); }}
                            className="w-32 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                        <span className="font-mono font-black text-indigo-400 w-12 text-right">{distance}</span>
                    </div>
                </div>

                {/* Dashboard */}
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 flex flex-col items-center">
                        <Timer className="w-4 h-4 text-blue-400 mb-1" />
                        <span className="text-[10px] uppercase font-black tracking-widest opacity-50">运行时间</span>
                        <span className="text-2xl font-mono font-black">{time.toFixed(1)}s</span>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 flex flex-col items-center">
                        <Gauge className="w-4 h-4 text-red-400 mb-1" />
                        <span className="text-[10px] uppercase font-black tracking-widest opacity-50">相对速度</span>
                        <span className="text-2xl font-mono font-black">
                            {mode === 'meeting' ? (speedA + speedB) : Math.abs(speedA - speedB)}
                        </span>
                    </div>
                    <div className="col-span-2 bg-indigo-600 p-4 rounded-2xl flex items-center justify-between px-8 text-white">
                        <div>
                            <span className="text-[10px] uppercase font-black tracking-widest opacity-80">预期{mode === 'meeting' ? '相遇' : '追及'}时间</span>
                            <p className="text-3xl font-mono font-black">{targetTime === Infinity ? '∞' : targetTime.toFixed(2) + 's'}</p>
                        </div>
                        <p className="text-sm font-bold opacity-80 italic">
                            {mode === 'meeting' ? '路程 ÷ 速度和' : '路程 ÷ 速度差'}
                        </p>
                    </div>
                </div>

                {/* Simulation Track */}
                <div className="relative h-48 bg-slate-800 rounded-3xl border-2 border-slate-700 overflow-hidden shadow-inner">
                    {/* Track Markings */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-4 border-y border-slate-700 flex justify-between px-4">
                        {Array.from({ length: 11 }).map((_, i) => (
                            <div key={i} className="w-px h-full bg-slate-700"></div>
                        ))}
                    </div>

                    {/* Car A */}
                    <div
                        className="absolute top-1/4 -translate-y-1/2 transition-all duration-100 ease-linear flex flex-col items-center"
                        style={{ left: `${(posA / trackWidth) * 100}%` }}
                    >
                        <div className="bg-red-500 p-2 rounded-lg shadow-lg shadow-red-500/50">
                            <Gauge className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-[10px] font-bold mt-1">小车 A ({speedA})</span>
                    </div>

                    {/* Car B */}
                    <div
                        className="absolute top-3/4 -translate-y-1/2 transition-all duration-100 ease-linear flex flex-col items-center"
                        style={{ left: `${((mode === 'meeting' ? posB : posB) / trackWidth) * 100}%` }}
                    >
                        <div className={`p-2 rounded-lg shadow-lg ${mode === 'meeting' ? 'bg-blue-500 shadow-blue-500/50' : 'bg-emerald-500 shadow-emerald-500/50'}`}>
                            <Gauge className={`w-6 h-6 text-white ${mode === 'meeting' ? 'transform scale-x-[-1]' : ''}`} />
                        </div>
                        <span className="text-[10px] font-bold mt-1">小车 B ({speedB})</span>
                    </div>

                    {/* Collision/Meeting Point Indicator */}
                    {!isPlaying && time > 0 && Math.abs(posA - (mode === 'meeting' ? posB : posB)) < 10 && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group">
                            <Flag className="w-8 h-8 text-yellow-500 animate-bounce" />
                            <span className="bg-yellow-500 text-slate-900 px-3 py-1 rounded-full text-xs font-black uppercase">
                                {mode === 'meeting' ? '成功相遇！' : '成功追上！'}
                            </span>
                        </div>
                    )}
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 space-y-6">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-xs font-black opacity-50 uppercase tracking-widest">
                                <span>小车 A 速度</span>
                                <span>{speedA} units/s</span>
                            </div>
                            <input
                                type="range" min="10" max="100" value={speedA}
                                onChange={(e) => { setSpeedA(parseInt(e.target.value)); reset(); }}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-xs font-black opacity-50 uppercase tracking-widest">
                                <span>小车 B 速度</span>
                                <span>{speedB} units/s</span>
                            </div>
                            <input
                                type="range" min="10" max="100" value={speedB}
                                onChange={(e) => { setSpeedB(parseInt(e.target.value)); reset(); }}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                            />
                        </div>
                    </div>

                    <div className="flex gap-3 items-end">
                        <button
                            className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 shadow-xl shadow-indigo-600/20"
                            onClick={() => setIsPlaying(!isPlaying)}
                        >
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                            {isPlaying ? '暂停' : '开始竞赛'}
                        </button>
                        <button
                            className="bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-2xl border border-slate-700"
                            onClick={reset}
                        >
                            <RotateCcw className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="mt-8 p-4 bg-slate-800/50 rounded-2xl border border-slate-700 text-sm text-slate-400 italic">
                    <p>💡 提示：在相遇问题中，相对速度是两车速度之和；在追及问题中，相对速度是两车速度之差。</p>
                </div>
            </div>
        </div>
    );
};

export default DistanceProblemLab;
