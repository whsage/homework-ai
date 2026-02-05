import React from 'react';
import { useMovablePoint, Polygon, Line, Text, Point } from 'mafs';
import MathDiagram from '../MathDiagram';

const TrianglePropertiesDiagram = () => {
    // 初始位置：直角三角形
    const point1 = useMovablePoint([-2, -1]);
    const point2 = useMovablePoint([2, -1]);
    const point3 = useMovablePoint([0, 2]);

    const A = point3.point;
    const B = point1.point;
    const C = point2.point;

    // 辅助函数：两点距离
    const dist = (p1, p2) => Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));

    // 计算边长
    const c = dist(A, B); // AB
    const a = dist(B, C); // BC
    const b = dist(C, A); // CA

    // 计算角度 (使用余弦定理)
    // a^2 = b^2 + c^2 - 2bc cosA => cosA = (b^2 + c^2 - a^2) / 2bc
    const angleA = Math.acos((b * b + c * c - a * a) / (2 * b * c)) * (180 / Math.PI);
    const angleB = Math.acos((a * a + c * c - b * b) / (2 * a * c)) * (180 / Math.PI);
    const angleC = Math.acos((a * a + b * b - c * c) / (2 * a * b)) * (180 / Math.PI);

    return (
        <MathDiagram height={400} viewBox={{ x: [-4, 4], y: [-3, 3] }}>
            <Polygon points={[A, B, C]} color="indigo" />

            {/* 顶点 */}
            <Point x={A[0]} y={A[1]} color="indigo" />
            <Text x={A[0]} y={A[1] + 0.3} size={20}>A</Text>

            <Point x={B[0]} y={B[1]} color="indigo" />
            <Text x={B[0] - 0.2} y={B[1] - 0.2} size={20}>B</Text>

            <Point x={C[0]} y={C[1]} color="indigo" />
            <Text x={C[0] + 0.2} y={C[1] - 0.2} size={20}>C</Text>

            {/* 边长显示 (在边的中点) */}
            <Text x={(A[0] + B[0]) / 2 - 0.2} y={(A[1] + B[1]) / 2} color="slate" size={15}>
                {`c=${c.toFixed(1)}`}
            </Text>
            <Text x={(B[0] + C[0]) / 2} y={(B[1] + C[1]) / 2 - 0.3} color="slate" size={15}>
                {`a=${a.toFixed(1)}`}
            </Text>
            <Text x={(C[0] + A[0]) / 2 + 0.2} y={(C[1] + A[1]) / 2} color="slate" size={15}>
                {`b=${b.toFixed(1)}`}
            </Text>

            {/* 角度标记 (仅示例, Mafs 的 Angle 组件需要准确的角度参数) */}
            {/* 这里简化显示，直接显示在左上角面板 */}

            {point1.element}
            {point2.element}
            {point3.element}

            {/* 实时数据面板 */}
            <Text x={-3.5} y={2.5} attach="nw" size={14}>
                {`∠A = ${angleA.toFixed(1)}°`}
            </Text>
            <Text x={-3.5} y={2.2} attach="nw" size={14}>
                {`∠B = ${angleB.toFixed(1)}°`}
            </Text>
            <Text x={-3.5} y={1.9} attach="nw" size={14}>
                {`∠C = ${angleC.toFixed(1)}°`}
            </Text>
            <Text x={-3.5} y={1.5} attach="nw" size={14} color="green">
                {`Sum = ${(angleA + angleB + angleC).toFixed(1)}°`}
            </Text>
        </MathDiagram>
    );
};

export default TrianglePropertiesDiagram;
