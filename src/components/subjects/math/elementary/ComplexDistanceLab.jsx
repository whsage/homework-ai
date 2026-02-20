import React, { useState, useEffect, useRef } from 'react';
import { Truck, Navigation, Play, Pause, RotateCcw, Info, MessageSquare } from 'lucide-react';

const ComplexDistanceLab = () => {
    const [speedA, setSpeedA] = useState(60);
    const [speedB, setSpeedB] = useState(40);
    const [trackLength, setTrackLength] = useState(400);
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [encounters, setEncounters] = useState([]);

    // Physical simulation states
    const [posA, setPosA] = useState(0);
    const [dirA, setDirA] = useState(1); // 1: right, -1: left
    const [posB, setPosB] = useState(trackLength);
    const [dirB, setDirB] = useState(-1);

    const animationRef = useRef();
    const lastTimeRef = useRef();

    const animate = (time) => {
        if (!lastTimeRef.current) lastTimeRef.current = time;
        const deltaTime = Math.min((time - lastTimeRef.current) / 1000, 0.1); // Cap delta time
        lastTimeRef.current = time;

        setElapsedTime(prev => {
            const nextTime = prev + deltaTime;

            // Calculate theoretical positions
            let nextPosA = posA + (speedA * deltaTime * dirA);
            let nextPosB = posB + (speedB * deltaTime * dirB);

            // Handle reflection A
            let nextDirA = dirA;
            if (nextPosA >= trackLength) { nextPosA = trackLength; nextDirA = -1; }
            if (nextPosA <= 0) { nextPosA = 0; nextDirA = 1; }

            // Handle reflection B
            let nextDirB = dirB;
            if (nextPosB >= trackLength) { nextPosB = trackLength; nextDirB = -1; }
            if (nextPosB <= 0) { nextPosB = 0; nextDirB = 1; }

            // Check for encounter (approximate)
            const gap = Math.abs(nextPosA - nextPosB);
            const prevGap = Math.abs(posA - posB);

            // Crossing check: if signs of relative position changed
            const relativePos = posA - posB;
            const nextRelativePos = nextPosA - nextPosB;

            if (Math.sign(relativePos) !== Math.sign(nextRelativePos) && Math.abs(relativePos) > 0.1) {
                setEncounters(e => [...e, { time: nextTime.toFixed(1), pos: nextPosA.toFixed(0) }]);
            }

            setPosA(nextPosA);
            setDirA(nextDirA);
            setPosB(nextPosB);
            setDirB(nextDirB);

            return nextTime;
        });

        if (isRunning) {
            animationRef.current = requestAnimationFrame(animate);
        }
    };

    useEffect(() => {
        if (isRunning) {
            lastTimeRef.current = null;
            animationRef.current = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(animationRef.current);
        }
        return () => cancelAnimationFrame(animationRef.current);
    }, [isRunning]);

    const reset = () => {
        setIsRunning(false);
        setElapsedTime(0);
        setPosA(0);
        setDirA(1);
        setPosB(trackLength);
        setDirB(-1);
        setEncounters([]);
    };

    return (
        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            <div className="max-w-5xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white flex items-center justify-center gap-3">
                        <Navigation className="text-indigo-600" /> 多次相遇模拟实验室
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">寻找规律：第 N 次相遇时，他们合走了多少全程？</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="relative h-48 bg-white dark:bg-slate-800 rounded-[2.5rem] border-4 border-slate-200 dark:border-slate-700 shadow-inner overflow-hidden flex items-center px-12">
                            <div className="absolute left-12 right-12 h-1 bg-slate-200 dark:bg-slate-700 rounded-full" />

                            <div className="absolute left-8 flex flex-col items-center">
                                <div className="w-1 h-4 bg-slate-400 mb-1" />
                                <span className="text-[10px] font-black text-slate-400 uppercase">Start A</span>
                            </div>
                            <div className="absolute right-8 flex flex-col items-center">
                                <div className="w-1 h-4 bg-slate-400 mb-1" />
                                <span className="text-[10px] font-black text-slate-400 uppercase">Start B</span>
                            </div>

                            <div
                                className="absolute pointer-events-none"
                                style={{ left: `calc(3rem + ${(posA / trackLength) * (100 - 6)}%)`, transform: `translateX(-50%)` }}
                            >
                                <div className="relative flex flex-col items-center">
                                    <div className="absolute -top-8 px-2 py-0.5 bg-indigo-600 text-white text-[10px] rounded font-bold whitespace-nowrap">小车甲 ({dirA > 0 ? '→' : '←'})</div>
                                    <Truck className="text-indigo-600 fill-indigo-100" size={36} style={{ transform: `scaleX(${dirA})` }} />
                                </div>
                            </div>

                            <div
                                className="absolute pointer-events-none"
                                style={{ left: `calc(3rem + ${(posB / trackLength) * (100 - 6)}%)`, transform: `translateX(-50%)` }}
                            >
                                <div className="relative flex flex-col items-center">
                                    <div className="absolute -top-8 px-2 py-0.5 bg-rose-500 text-white text-[10px] rounded font-bold whitespace-nowrap">小车乙 ({dirB > 0 ? '→' : '←'})</div>
                                    <Truck className="text-rose-500 fill-rose-100" size={36} style={{ transform: `scaleX(${dirB})` }} />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">甲速度 (m/s)</label>
                                <input type="number" value={speedA} onChange={e => setSpeedA(parseInt(e.target.value) || 0)} className="w-full px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 font-mono text-center" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-rose-500 uppercase tracking-wider block">乙速度 (m/s)</label>
                                <input type="number" value={speedB} onChange={e => setSpeedB(parseInt(e.target.value) || 0)} className="w-full px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 font-mono text-center" />
                            </div>
                            <div className="col-span-2 md:col-span-1 flex gap-2 pt-6">
                                <button
                                    onClick={() => setIsRunning(!isRunning)}
                                    className={`flex-1 py-2 rounded-xl font-black text-white shadow-lg transition-all flex items-center justify-center gap-2 ${isRunning ? 'bg-orange-500 shadow-orange-500/20' : 'bg-indigo-600 shadow-indigo-600/20'}`}
                                >
                                    {isRunning ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
                                    {isRunning ? "暂停" : "开始"}
                                </button>
                                <button onClick={reset} className="p-2 bg-slate-200 dark:bg-slate-800 text-slate-500 rounded-xl hover:bg-slate-300 transition-colors">
                                    <RotateCcw size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm flex items-start gap-4">
                            <MessageSquare className="text-indigo-500 shrink-0 mt-1" />
                            <div className="space-y-2">
                                <h4 className="font-bold text-slate-800 dark:text-white">相遇规律小课堂</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    在两地间循环往返时，<strong>第一次相遇</strong>合走了 1 个全程时间 = 1L / (V1+V2)。<br />
                                    <strong>第二次相遇</strong>合走了 3 个全程时间 = 3L / (V1+V2)。<br />
                                    <strong>第三次相遇</strong>合走了 5 个全程时间 = 5L / (V1+V2)。
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-[2.5rem] p-6 text-slate-200 border border-slate-800 shadow-2xl space-y-6">
                        <div className="space-y-1">
                            <span className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">仿真计时器</span>
                            <div className="text-4xl font-black font-mono text-white">{elapsedTime.toFixed(1)} <small className="text-xs text-indigo-400 italic">SEC</small></div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> 相遇记录日志
                            </div>
                            <div className="space-y-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                                {encounters.length === 0 ? (
                                    <div className="py-12 text-center text-slate-700 border-2 border-dashed border-slate-800 rounded-3xl">
                                        <p className="text-xs italic">等待车辆相遇...</p>
                                    </div>
                                ) : (
                                    encounters.map((e, i) => (
                                        <div key={i} className="bg-slate-800/50 p-3 rounded-2xl border border-slate-700 flex justify-between items-center group animate-in slide-in-from-right">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-slate-500">第 {i + 1} 次相遇</span>
                                                <span className="font-bold text-white">路标 {e.pos}m</span>
                                            </div>
                                            <div className="text-indigo-400 font-mono font-bold text-sm">{e.time}s</div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 flex gap-4 items-start">
                    <Info className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-900/80 dark:text-amber-200/80 leading-relaxed">
                        <strong>实验总结：</strong> 两地的<strong>多次相遇</strong>问题是小升初的重难点。通过模拟，我们可以清晰看到“合走全程”的变化规律。观察日志中的时间点，是不是成 1:3:5... 的比例呢？
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComplexDistanceLab;
