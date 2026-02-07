import React, { useState } from 'react';
import { Mafs, Coordinates, Plot, Line, Text, Point, useMovablePoint, Theme, Polygon } from 'mafs';
import { MousePointer2, Ruler } from 'lucide-react';

const QuadrilateralDiagram = () => {
    const [mode, setMode] = useState('parallelogram'); // 'parallelogram' or 'trapezoid'

    // Joint state for shapes
    // A is always at (0, 0)
    const pointB = useMovablePoint([4, 0], { constrain: ([x, y]) => [Math.max(1, x), 0] }); // Base width
    const pointD = useMovablePoint([1, 3], { constrain: ([x, y]) => [x, Math.max(1, y)] }); // Top-left vertex

    // For Trapezoid, we need an independent Top-right vertex (C)
    // Constrained to be at the same height as D
    const pointC_Trapezoid = useMovablePoint([3, 3], {
        constrain: ([x, y]) => [x, pointD.point[1]]
    });

    // For Parallelogram, C is derived: C = B + D
    const getParallelogramC = () => {
        return [pointB.point[0] + pointD.point[0], pointD.point[1]];
    };

    // Current points based on mode
    const A = [0, 0];
    const B = pointB.point;
    const D = pointD.point;

    let C;
    if (mode === 'parallelogram') {
        C = getParallelogramC();
    } else {
        // Update C's Y to match D's Y even if D moves
        C = [pointC_Trapezoid.point[0], pointD.point[1]];
    }

    // Height helper
    const h = D[1];

    return (
        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
            {/* Controls */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-800">
                <div className="flex items-center gap-4">
                    <h3 className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                        <MousePointer2 className="w-5 h-5 text-indigo-500" />
                        图形探究实验室
                    </h3>
                    <div className="flex bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
                        <button
                            onClick={() => setMode('parallelogram')}
                            className={`px-3 py-1 text-sm rounded-md transition-all ${mode === 'parallelogram'
                                    ? 'bg-white dark:bg-slate-600 shadow text-indigo-600 dark:text-indigo-300 font-medium'
                                    : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
                                }`}
                        >
                            平行四边形
                        </button>
                        <button
                            onClick={() => setMode('trapezoid')}
                            className={`px-3 py-1 text-sm rounded-md transition-all ${mode === 'trapezoid'
                                    ? 'bg-white dark:bg-slate-600 shadow text-indigo-600 dark:text-indigo-300 font-medium'
                                    : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
                                }`}
                        >
                            梯形
                        </button>
                    </div>
                </div>
            </div>

            {/* Diagram Area */}
            <div className="h-[400px]">
                <Mafs viewBox={{ x: [-1, 8], y: [-1, 5] }}>
                    <Coordinates.Cartesian subdivisions={4} />

                    {/* The Shape */}
                    <Polygon points={[A, B, C, D]} color={Theme.indigo} />

                    {/* Height Line (dashed) */}
                    <Line.Segment
                        point1={[D[0], 0]}
                        point2={D}
                        style="dashed"
                        color={Theme.slate}
                        opacity={0.5}
                    />
                    <Text x={D[0] - 0.3} y={D[1] / 2} size={15} color={Theme.slate}>h={h.toFixed(1)}</Text>

                    {/* Right Angle Marker */}
                    <Line.Segment point1={[D[0], 0.3]} point2={[D[0] + 0.3, 0.3]} color={Theme.slate} opacity={0.5} />
                    <Line.Segment point1={[D[0] + 0.3, 0]} point2={[D[0] + 0.3, 0.3]} color={Theme.slate} opacity={0.5} />

                    {/* Vertices & Controls */}
                    {/* A is fixed */}
                    <Point x={A[0]} y={A[1]} color={Theme.indigo} />
                    <Text x={A[0] - 0.3} y={A[1] - 0.3} size={20}>A</Text>

                    {/* B is movable horiz */}
                    {pointB.element}
                    <Text x={B[0] + 0.3} y={B[1] - 0.3} size={20}>B</Text>

                    {/* D is fully movable */}
                    {pointD.element}
                    <Text x={D[0] - 0.3} y={D[1] + 0.3} size={20}>D</Text>

                    {/* C Logic */}
                    {mode === 'parallelogram' ? (
                        <>
                            <Point x={C[0]} y={C[1]} color={Theme.indigo} opacity={0.5} />
                            <Text x={C[0] + 0.3} y={C[1] + 0.3} size={20}>C</Text>
                            {/* Visual line to show parallel property */}
                            <Line.Segment
                                point1={B}
                                point2={C}
                                style="dashed"
                                color={Theme.blue}
                                opacity={0.3}
                            />
                        </>
                    ) : (
                        <>
                            {/* In Trapezoid mode, C is independently movable (horizontally at least, or vertically constrained to D) */}
                            {/* We used pointC_Trapezoid which is a movable point */}
                            {/* But we need to update its constraint if D moves Y. Mafs constraints are functions, so it reads current D.y */}
                            {pointC_Trapezoid.element}
                            <Text x={C[0] + 0.3} y={C[1] + 0.3} size={20}>C</Text>
                        </>
                    )}

                    {/* Interactive Info */}
                    <Text x={5} y={4.5} size={20} color={Theme.indigo}>
                        {mode === 'parallelogram' ? '对边平行且相等' : '只有一组对边平行'}
                    </Text>
                </Mafs>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700">
                <p>💡 拖动点 <strong>B</strong> 改变底边长度，拖动点 <strong>D</strong> 改变高和形状。</p>
                {mode === 'trapezoid' && <p>💡 在梯形模式下，点 <strong>C</strong> 也可以水平拖动，但始终与 D 保持等高。</p>}
            </div>
        </div>
    );
};

export default QuadrilateralDiagram;
