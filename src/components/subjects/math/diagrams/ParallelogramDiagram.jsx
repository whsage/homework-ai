import React from 'react';
import { useMovablePoint, Polygon, Line, Text, Point } from 'mafs';
import MathDiagram from '../MathDiagram';

const ParallelogramDiagram = () => {
    // 顶点 A, B, D 可动
    // C 根据平行四边形性质自动计算: vector(BC) = vector(AD) => C = B + (D - A)
    const point1 = useMovablePoint([-3, -1]); // A
    const point2 = useMovablePoint([1, -1]);  // B
    const point3 = useMovablePoint([-1, 2]);  // D

    const A = point1.point;
    const B = point2.point;
    const D = point3.point;

    // 计算 C 点坐标
    const C = [
        B[0] + (D[0] - A[0]),
        B[1] + (D[1] - A[1])
    ];

    // 辅助函数：两点距离
    const dist = (p1, p2) => Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));

    // 辅助函数：中点
    const mid = (p1, p2) => [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];

    const AB = dist(A, B);
    const BC = dist(B, C);
    const CD = dist(C, D);
    const DA = dist(D, A);

    // 对角线交点 (中点)
    const midAC = mid(A, C);
    const midBD = mid(B, D);

    return (
        <MathDiagram height={400} viewBox={{ x: [-4, 6], y: [-3, 5] }}>
            {/* 平行四边形主体 */}
            <Polygon points={[A, B, C, D]} color="indigo" />

            {/* 对角线 */}
            <Line.Segment point1={A} point2={C} style="dashed" color="slate" opacity={0.5} />
            <Line.Segment point1={B} point2={D} style="dashed" color="slate" opacity={0.5} />

            {/* 顶点控制点 */}
            {point1.element}
            {point2.element}
            {point3.element}
            {/* C 点是计算出来的，显示一个不可拖动的点即可，或者作为视觉参考 */}
            <Point x={C[0]} y={C[1]} color="indigo" opacity={0.5} />

            {/* 标签 */}
            <Text x={A[0] - 0.3} y={A[1] - 0.3}>A</Text>
            <Text x={B[0] + 0.3} y={B[1] - 0.3}>B</Text>
            <Text x={C[0] + 0.3} y={C[1] + 0.3}>C</Text>
            <Text x={D[0] - 0.3} y={D[1] + 0.3}>D</Text>

            {/* 边长显示 */}
            <Text x={mid(A, B)[0]} y={mid(A, B)[1] - 0.3} size={15} color="slate">{AB.toFixed(1)}</Text>
            <Text x={mid(B, C)[0] + 0.3} y={mid(B, C)[1]} size={15} color="slate">{BC.toFixed(1)}</Text>
            <Text x={mid(C, D)[0]} y={mid(C, D)[1] + 0.3} size={15} color="slate">{CD.toFixed(1)}</Text>
            <Text x={mid(D, A)[0] - 0.3} y={mid(D, A)[1]} size={15} color="slate">{DA.toFixed(1)}</Text>

            {/* O 点 */}
            <Point x={midAC[0]} y={midAC[1]} color="red" size={4} />
            <Text x={midAC[0]} y={midAC[1] + 0.4} color="red" size={15}>O</Text>

            {/* 说明文本 */}
            <Text x={-3.5} y={4.5} attach="nw" size={14} color="indigo">
                {`AB = CD = ${AB.toFixed(1)}`}
            </Text>
            <Text x={-3.5} y={4.1} attach="nw" size={14} color="indigo">
                {`AD = BC = ${BC.toFixed(1)}`}
            </Text>
            <Text x={-3.5} y={3.7} attach="nw" size={14} color="slate">
                对角线互相平分 (O是中点)
            </Text>
        </MathDiagram>
    );
};

export default ParallelogramDiagram;
