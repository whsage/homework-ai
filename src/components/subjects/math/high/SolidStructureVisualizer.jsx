import React, { useState } from 'react';
import { Box, Triangle, Circle, Rotate3d } from 'lucide-react';

const SolidStructureVisualizer = () => {
    const [shape, setShape] = useState('cube'); // cube, prism, pyramid
    const [rotation, setRotation] = useState({ x: -15, y: 45 });
    const [isDragging, setIsDragging] = useState(false);
    const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setLastPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const dx = e.clientX - lastPos.x;
        const dy = e.clientY - lastPos.y;
        setRotation(prev => ({
            x: prev.x - dy * 0.5,
            y: prev.y + dx * 0.5
        }));
        setLastPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Faces styling
    const faceStyle = "absolute flex items-center justify-center border-2 border-indigo-500 bg-indigo-500/20 text-white font-bold text-xl backface-visible transition-all duration-500";
    const size = 100; // half size offset

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            {/* Controls */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex bg-slate-200 dark:bg-slate-700 p-1 rounded-lg">
                    <button
                        onClick={() => setShape('cube')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${shape === 'cube'
                                ? 'bg-white dark:bg-slate-600 shadow text-indigo-600 dark:text-indigo-400'
                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                            }`}
                    >
                        <Box className="w-4 h-4" /> 正方体
                    </button>
                    <button
                        onClick={() => setShape('pyramid')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${shape === 'pyramid'
                                ? 'bg-white dark:bg-slate-600 shadow text-indigo-600 dark:text-indigo-400'
                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                            }`}
                    >
                        <Triangle className="w-4 h-4" /> 四棱锥
                    </button>
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1">
                    <Rotate3d className="w-4 h-4" /> 拖动旋转
                </div>
            </div>

            {/* 3D Scene */}
            <div
                className="h-[400px] flex items-center justify-center cursor-move bg-slate-50/50 dark:bg-slate-900/30 overflow-hidden perspective-1000"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{ perspective: '800px' }}
            >
                <div
                    className="relative w-0 h-0 transform-style-3d transition-transform duration-75 ease-out"
                    style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
                >
                    {/* Cube */}
                    {shape === 'cube' && (
                        <>
                            <div className={faceStyle} style={{ width: 200, height: 200, transform: `translateZ(${size}px)` }}>前</div>
                            <div className={faceStyle} style={{ width: 200, height: 200, transform: `rotateY(180deg) translateZ(${size}px)` }}>后</div>
                            <div className={faceStyle} style={{ width: 200, height: 200, transform: `rotateY(90deg) translateZ(${size}px)` }}>右</div>
                            <div className={faceStyle} style={{ width: 200, height: 200, transform: `rotateY(-90deg) translateZ(${size}px)` }}>左</div>
                            <div className={faceStyle} style={{ width: 200, height: 200, transform: `rotateX(90deg) translateZ(${size}px)` }}>上</div>
                            <div className={faceStyle} style={{ width: 200, height: 200, transform: `rotateX(-90deg) translateZ(${size}px)` }}>下</div>
                        </>
                    )}

                    {/* Pyramid (Square based) */}
                    {shape === 'pyramid' && (
                        <>
                            {/* Base */}
                            <div className={faceStyle} style={{ width: 200, height: 200, transform: `rotateX(-90deg) translateZ(50px)` }}>底</div>

                            {/* Sides - using triangle clip-path or borders would be better, but simpler: rotated divs */}
                            {/* Front */}
                            <div
                                className="absolute top-0 left-0 w-0 h-0 border-l-[100px] border-r-[100px] border-b-[200px] border-l-transparent border-r-transparent border-b-indigo-500/80 opacity-80"
                                style={{ transform: `translate(-100px, -150px) translateZ(100px) rotateX(30deg)`, transformOrigin: 'bottom center' }}
                            />
                            {/* Back */}
                            <div
                                className="absolute top-0 left-0 w-0 h-0 border-l-[100px] border-r-[100px] border-b-[200px] border-l-transparent border-r-transparent border-b-indigo-500/80 opacity-80"
                                style={{ transform: `translate(-100px, -150px) translateZ(-100px) rotateX(-30deg)`, transformOrigin: 'bottom center' }}
                            />
                            {/* Left */}
                            <div
                                className="absolute top-0 left-0 w-0 h-0 border-l-[100px] border-r-[100px] border-b-[200px] border-l-transparent border-r-transparent border-b-indigo-500/80 opacity-80"
                                style={{ transform: `translate(-200px, -50px) rotateY(-90deg) rotateX(30deg)`, transformOrigin: 'bottom center' }}
                            />
                            {/* Right */}
                            <div
                                className="absolute top-0 left-0 w-0 h-0 border-l-[100px] border-r-[100px] border-b-[200px] border-l-transparent border-r-transparent border-b-indigo-500/80 opacity-80"
                                style={{ transform: `translate(0px, -50px) rotateY(90deg) rotateX(30deg)`, transformOrigin: 'bottom center' }}
                            />
                        </>
                    )}
                </div>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900/30 text-xs text-slate-500 text-center">
                立体几何的基础是空间想象力
            </div>
        </div>
    );
};

export default SolidStructureVisualizer;
