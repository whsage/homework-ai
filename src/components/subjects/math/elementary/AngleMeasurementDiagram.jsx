import React, { useState, useEffect } from 'react';
import { Mafs, Coordinates, Plot, Line, Text, Point, useMovablePoint, Theme, MovablePoint } from 'mafs';
import { RefreshCw, Check, RotateCcw } from 'lucide-react';

const AngleMeasurementDiagram = () => {
    // Random angle state
    const [targetAngle, setTargetAngle] = useState(45);
    const [showResult, setShowResult] = useState(false);

    // Protractor state - position and rotation
    const [rotation, setRotation] = useState(0);
    const centerPoint = useMovablePoint([0, -2], {
        constrain: ([x, y]) => [Math.max(-3, Math.min(3, x)), Math.max(-3, Math.min(0, y))]
    });

    // Generate random angle
    const generateNewAngle = () => {
        const newAngle = Math.floor(Math.random() * 140) + 20; // 20 to 160 degrees
        setTargetAngle(newAngle);
        setShowResult(false);
        // Reset protractor slightly
        centerPoint.setElement([0, -2]);
        setRotation(0);
    };

    // Calculate lines for the target angle
    // Vertex is always at (0, 0) for simplicity in this version, 
    // but we can make it movable later if needed.
    const vertex = [0, 1];
    const rayLength = 3;
    const baseRayEnd = [vertex[0] + rayLength, vertex[1]];
    const targetRayEnd = [
        vertex[0] + rayLength * Math.cos(targetAngle * Math.PI / 180),
        vertex[1] + rayLength * Math.sin(targetAngle * Math.PI / 180)
    ];

    // Protractor rendering helper
    const Protractor = ({ x, y, rot }) => {
        // SVG path for protractor semi-circle
        // Radius 2.5
        const r = 2.5;

        return (
            <g transform={`translate(${x}, ${y}) rotate(${-rot})`}>
                {/* Semi-circle body */}
                <path
                    d={`M ${-r} 0 A ${r} ${r} 0 0 1 ${r} 0 L ${r} 0 L ${-r} 0 Z`}
                    fill="rgba(255, 255, 255, 0.8)"
                    stroke="#64748b"
                    strokeWidth="0.02"
                />
                <line x1={-r} y1={0} x2={r} y2={0} stroke="#64748b" strokeWidth="0.02" />
                <line x1={0} y1={0} x2={0} y2={-0.2} stroke="#64748b" strokeWidth="0.02" />

                {/* Ticks and labels every 10 degrees */}
                {Array.from({ length: 19 }).map((_, i) => {
                    const angle = i * 10;
                    const rad = angle * Math.PI / 180;
                    const isMajor = angle % 30 === 0;
                    const tickLen = isMajor ? 0.3 : 0.15;
                    const textR = r - 0.5;

                    const x1 = (r - 0.05) * Math.cos(Math.PI - rad);
                    const y1 = (r - 0.05) * Math.sin(Math.PI - rad);
                    const x2 = (r - tickLen) * Math.cos(Math.PI - rad);
                    const y2 = (r - tickLen) * Math.sin(Math.PI - rad);

                    const tx = textR * Math.cos(Math.PI - rad);
                    const ty = textR * Math.sin(Math.PI - rad);

                    return (
                        <g key={i}>
                            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#64748b" strokeWidth={isMajor ? 0.02 : 0.01} />
                            {i % 2 === 0 && i !== 0 && i !== 18 && ( // Show numbers every 20 deg
                                <text
                                    x={tx}
                                    y={-ty}
                                    fontSize="0.2"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill="#475569"
                                    transform={`scale(1, -1)`} // Flip text back
                                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                                >
                                    {angle}
                                </text>
                            )}
                        </g>
                    );
                })}

                {/* Center crosshair */}
                <circle cx={0} cy={0} r={0.05} fill="#ef4444" />
            </g>
        );
    };

    return (
        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
            {/* Controls */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-800">
                <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                        <RotateCcw className="w-5 h-5 text-indigo-500" />
                        角度测量实验室
                    </h3>
                    <span className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
                        把量角器中心对准顶点
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={generateNewAngle}
                        className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors text-sm"
                    >
                        <RefreshCw className="w-4 h-4" />
                        新题目
                    </button>
                    <button
                        onClick={() => setShowResult(!showResult)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm ${showResult
                                ? 'bg-green-100 text-green-700 border border-green-200'
                                : 'bg-indigo-600 text-white hover:bg-indigo-700'
                            }`}
                    >
                        {showResult ? <Check className="w-4 h-4" /> : '显示答案'}
                        {showResult ? `答案: ${targetAngle}°` : '验证'}
                    </button>
                </div>
            </div>

            {/* Diagram Area */}
            <div className="h-[400px] relative cursor-crosshair">
                <Mafs viewBox={{ x: [-4, 4], y: [-1, 5] }} maximize>
                    <Coordinates.Cartesian subdivisions={4} />

                    {/* The Angle to Measure */}
                    <g>
                        {/* Base Ray */}
                        <Line.Segment
                            point1={vertex}
                            point2={baseRayEnd}
                            color={Theme.indigo}
                            style="solid"
                            weight={3}
                        />
                        {/* Target Ray */}
                        <Line.Segment
                            point1={vertex}
                            point2={targetRayEnd}
                            color={Theme.indigo}
                            style="solid"
                            weight={3}
                        />
                        {/* Vertex Point */}
                        <Point x={vertex[0]} y={vertex[1]} color={Theme.indigo} />

                        {/* Angle Arc (Visual hint) */}
                        {showResult && (
                            <>
                                <Text x={vertex[0] + 0.5} y={vertex[1] + 0.5} attach="sw" color={Theme.green}>
                                    {targetAngle}°
                                </Text>
                            </>
                        )}
                    </g>

                    {/* Draggable Protractor */}
                    <g transform={`translate(${centerPoint.point[0]}, ${centerPoint.point[1]})`}>
                        <Protractor x={0} y={0} rot={0} /> {/* Rotation feature disabled for simplicity first, or we can add a second control point for rotation */}
                    </g>

                    {/* Control Point for Protractor Center */}
                    {centerPoint.element}

                    {/* Control Instructions Overlay */}
                    <Text x={0} y={4.5} size={20} color={Theme.slate}>
                        拖动红点移动量角器
                    </Text>
                </Mafs>

                {/* Overlay Controls for fine-tuning if needed */}
                <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-800/90 p-2 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 text-xs">
                    <p className="font-semibold mb-1">提示：</p>
                    <p>1. 量角器中心点对准角的顶点</p>
                    <p>2. 量角器0刻度线对准角的一条边</p>
                    <p>3. 读出另一条边对准的刻度</p>
                </div>
            </div>
        </div>
    );
};

export default AngleMeasurementDiagram;
