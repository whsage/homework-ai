import React from 'react';
import { useMovablePoint, Line, Text, Point } from 'mafs';
import MathDiagram from '../MathDiagram';

const ShortestPathDiagram = () => {
    // 初始位置在 (0, 2)，这个 hook 返回 { point: [x, y], element: SVGElement }
    // 注意：useMovablePoint 必须在 Mafs 组件内部使用，但 Mafs 文档通常建议
    // 将可移动点作为组件，或者在组件内部调用 useMovablePoint 并传递给 MovablePoint 组件
    // 但更常见的是 useMovablePoint 返回一个对象，我们需要将该对象传递给 <MovablePoint /> 
    // 或者直接使用它返回的 element (如果是在 interactive 模式下)

    // 修正：Mafs 的 useMovablePoint 用法
    const movablePoint = useMovablePoint([0, 2], {
        // 限制移动范围（可选）
        constrain: ([x, y]) => [x, y]
    });

    const p = movablePoint.point;
    const A = [-3, 0];
    const B = [3, 0];

    const distAP = Math.sqrt(Math.pow(p[0] - A[0], 2) + Math.pow(p[1] - A[1], 2));
    const distPB = Math.sqrt(Math.pow(p[0] - B[0], 2) + Math.pow(p[1] - B[1], 2));
    const totalDist = distAP + distPB;

    return (
        <MathDiagram height={350} viewBox={{ x: [-4, 4], y: [-3, 3] }}>
            <Text x={-3.2} y={0.2}>A</Text>
            <Point x={-3} y={0} color="indigo" />

            <Text x={3.2} y={0.2}>B</Text>
            <Point x={3} y={0} color="indigo" />

            {/* AB 虚线 */}
            <Line.Segment point1={[-3, 0]} point2={[3, 0]} style="dashed" color="indigo" opacity={0.5} />

            {/* 动态线段 */}
            <Line.Segment point1={[-3, 0]} point2={p} color="green" />
            <Line.Segment point1={p} point2={[3, 0]} color="green" />

            {/* 文本显示 */}
            <Text x={p[0]} y={p[1] + 0.3}>P</Text>
            <Text x={0} y={-2} attach="n">
                {`AP + PB = ${totalDist.toFixed(2)}`}
            </Text>
            <Text x={0} y={-2.5} attach="n" color="indigo" opacity={0.7}>
                {`AB = 6.00`}
            </Text>

            {/* 可移动点必须最后渲染以确保在最上层 */}
            {movablePoint.element}
        </MathDiagram>
    );
};

export default ShortestPathDiagram;
