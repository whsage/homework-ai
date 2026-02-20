import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw } from 'lucide-react';

const GaltonBoardVisualizer = () => {
    const canvasRef = useRef(null);
    const [isRunning, setIsRunning] = useState(false);
    const [balls, setBalls] = useState([]);
    const [bins, setBins] = useState(new Array(11).fill(0)); // 10 rows of pegs => 11 bins

    // Physics constants
    const width = 400;
    const height = 400;
    const startX = width / 2;
    const startY = 30;
    const pegRows = 10;
    const pegSpacing = 25;
    const ballRadius = 4;

    // Generate peg positions
    const pegs = [];
    for (let r = 0; r < pegRows; r++) {
        for (let c = 0; c <= r; c++) {
            pegs.push({
                x: startX + (c - r / 2) * pegSpacing,
                y: startY + 40 + r * 25
            });
        }
    }

    const reset = () => {
        setIsRunning(false);
        setBalls([]);
        setBins(new Array(11).fill(0));
    };

    const start = () => {
        setIsRunning(true);
    };

    useEffect(() => {
        if (!isRunning) return;

        let animationFrame;
        const addBallInterval = setInterval(() => {
            if (balls.length < 300) { // Limit total balls
                setBalls(prev => [...prev, { x: startX + (Math.random() - 0.5), y: startY, vx: 0, vy: 0, active: true }]);
            } else {
                clearInterval(addBallInterval);
                setIsRunning(false);
            }
        }, 50);

        return () => {
            clearInterval(addBallInterval);
            cancelAnimationFrame(animationFrame);
        };
    }, [isRunning]);

    useEffect(() => {
        if (!isRunning && balls.length === 0) return;

        let animationFrame;
        const update = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, width, height);

            // Draw pegs
            ctx.fillStyle = '#94a3b8';
            pegs.forEach(peg => {
                ctx.beginPath();
                ctx.arc(peg.x, peg.y, 3, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw bins
            const binWidth = pegSpacing;
            const binY = startY + 40 + pegRows * 25 + 10;
            const maxCount = Math.max(...bins, 1);

            // Draw floor/bins
            ctx.fillStyle = '#e2e8f0';
            ctx.fillRect(0, binY, width, height - binY);

            // Update and draw balls
            setBalls(prevBalls => {
                const nextBalls = prevBalls.map(ball => {
                    if (!ball.active) return ball;

                    let { x, y, vx, vy } = ball;
                    vy += 0.5; // Gravity
                    y += vy;
                    x += vx;
                    vx *= 0.99; // Air resistance

                    // Collision with pegs
                    let hitPeg = false;
                    for (let peg of pegs) {
                        const dx = x - peg.x;
                        const dy = y - peg.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 7) { // Collision radius
                            const angle = Math.atan2(dy, dx);
                            // Bounce with some randomness
                            vx = Math.cos(angle) * 2 + (Math.random() - 0.5) * 2;
                            vy = Math.sin(angle) * 2;
                            hitPeg = true;
                            // Nudge out
                            x = peg.x + Math.cos(angle) * 8;
                            y = peg.y + Math.sin(angle) * 8;
                        }
                    }

                    // Bottom hit check (bins)
                    if (y > binY) {
                        // Determine bin index
                        const binIndex = Math.floor((x - (startX - (pegRows * pegSpacing) / 2)) / pegSpacing);
                        if (binIndex >= 0 && binIndex < bins.length) {
                            setBins(prev => {
                                const newBins = [...prev];
                                newBins[binIndex]++;
                                return newBins;
                            });
                        }
                        return { ...ball, active: false, x, y }; // Deactivate
                    }

                    return { x, y, vx, vy, active: true };
                });

                // Filter out inactive balls to keep state clean, but we want to show accumulation...
                // Actually for visual simplicity in React state, maybe just drawing the bars is enough?
                // Let's keep active balls separate from accumulated counts.
                return nextBalls.filter(b => b.active);
            });

            // Draw active balls
            ctx.fillStyle = '#ef4444';
            balls.forEach(ball => {
                if (ball.active) {
                    ctx.beginPath();
                    ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            // Draw Bin Bars (Visualizing the distribution)
            bins.forEach((count, i) => {
                const h = (count / (300 / 3)) * 100; // Scale height
                const bx = startX + (i - pegRows / 2) * pegSpacing - pegSpacing / 2 + 2; // +2 gap
                const by = height;
                ctx.fillStyle = '#6366f1';
                ctx.fillRect(bx, by - h, pegSpacing - 4, h);

                // Text count
                if (count > 0) {
                    ctx.fillStyle = '#fff';
                    ctx.font = '10px sans-serif';
                    ctx.fillText(count, bx + pegSpacing / 2 - 5, by - 5);
                }
            });

            if (isRunning || balls.length > 0) {
                animationFrame = requestAnimationFrame(update);
            }
        };
        animationFrame = requestAnimationFrame(update);
        return () => cancelAnimationFrame(animationFrame);
    }, [isRunning, balls, bins]); // Deps usually tricky with RAF in react, but logic is self-contained

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <h3 className="font-bold text-slate-700 dark:text-slate-200">高尔顿板实验</h3>
                <div className="flex gap-2">
                    <button
                        onClick={start}
                        disabled={isRunning}
                        className="flex items-center gap-1 px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50 text-xs font-bold"
                    >
                        <Play className="w-3 h-3" /> 开始
                    </button>
                    <button
                        onClick={reset}
                        className="flex items-center gap-1 px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded hover:bg-slate-300 dark:hover:bg-slate-600 text-xs font-bold"
                    >
                        <RotateCcw className="w-3 h-3" /> 重置
                    </button>
                </div>
            </div>

            <div className="bg-slate-100 dark:bg-slate-900 flex justify-center">
                <canvas ref={canvasRef} width={width} height={height} />
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 text-xs text-center text-slate-500">
                大量随机事件的叠加（小球每次碰撞向左还是向右）最终形成了<span className="font-bold text-indigo-600">正态分布</span>。
            </div>
        </div>
    );
};

export default GaltonBoardVisualizer;
