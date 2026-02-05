import React from 'react';
import { useMovablePoint, Circle, Line, Text, Point } from 'mafs';
import MathDiagram from '../MathDiagram';

const CircleChordDiagram = () => {
    // 圆心 O
    const O = [0, 0];
    const radius = 3;

    // 可动点 B (在圆上)
    // 使用 constrain 限制点在圆周上
    const point1 = useMovablePoint([2.12, 2.12], {
        constrain: ([x, y]) => {
            const angle = Math.atan2(y, x);
            return [radius * Math.cos(angle), radius * Math.sin(angle)];
        }
    });

    const B = point1.point;

    // 点 A 是 B 关于 y 轴的对称点 (为了简化演示，我们假设弦是水平的？不，垂径定理更通用)
    // 让我们固定垂径为 Y 轴 (OD)，弦 AB 垂直于 Y 轴。
    // 这样 A, B 的 Y 坐标相同，X 坐标相反。
    // 用户拖动 B，我们限制 B 在右半圆 (或者任意)，然后 A 自动计算。
    // 这样垂径 (y轴) 始终垂直于弦。

    // 重新设计交互：
    // 垂径固定为 Y 轴 (直线 x=0)。
    // 弦 AB 垂直于 Y 轴 => A, B y坐标相等。
    // B 点在圆上移动。

    // 获取 B 的 y 坐标
    const yB = B[1];
    // 计算对应的 x (圆方程 x^2 + y^2 = r^2)
    // x = sqrt(r^2 - y^2)
    // 为确保 B 在右侧，取正

    // 修正: useMovablePoint 已经限制在圆上。
    // 我们强制弦垂直于 Y 轴。
    // 所以 E 点 (垂足) 就是 [0, B[1]]。
    // A 点就是 [-B[0], B[1]]。

    // 为了演示一般性，或许应该让直径也可以旋转？
    // 为了简单直观，固定垂径为竖直方向 (Y轴) 是最清晰的。

    const E = [0, B[1]]; // 垂足
    const A = [-B[0], B[1]]; // A 点

    // 垂径 (直径) 的端点
    const C = [0, radius];
    const D = [0, -radius];

    // 计算长度
    const AE = Math.abs(A[0] - E[0]);
    const EB = Math.abs(B[0] - E[0]);

    // 辅助: 勾股定理验证
    // OE^2 + AE^2 = OA^2

    return (
        <MathDiagram height={450} viewBox={{ x: [-4, 4], y: [-4, 4] }}>
            {/* 圆 */}
            <Circle center={O} radius={radius} color="slate" opacity={0.3} />
            <Point x={O[0]} y={O[1]} color="slate" />
            <Text x={0.2} y={0.2} color="slate">O</Text>

            {/* 垂径 (直径 CD) = Y轴的一部分 */}
            <Line.Segment point1={C} point2={D} color="indigo" />
            <Text x={C[0]} y={C[1] + 0.3} color="indigo">C</Text>
            <Text x={D[0]} y={D[1] - 0.3} color="indigo">D</Text>

            {/* 弦 AB */}
            <Line.Segment point1={A} point2={B} color="green" />
            <Text x={A[0] - 0.3} y={A[1]} color="green">A</Text>
            {point1.element} {/* B 点可动 */}
            <Text x={B[0] + 0.3} y={B[1]} color="green">B</Text>

            {/* 垂足 E */}
            <Point x={E[0]} y={E[1]} color="red" size={4} />
            <Text x={E[0] + 0.2} y={E[1] + 0.2} color="red" size={12}>E</Text>

            {/* 垂直标记 */}
            {/* 用一个小折线表示垂直 */}
            <Line.Segment point1={[0.2, E[1]]} point2={[0.2, E[1] + 0.2]} color="slate" opacity={0.5} />
            <Line.Segment point1={[0, E[1] + 0.2]} point2={[0.2, E[1] + 0.2]} color="slate" opacity={0.5} />

            {/* 辅助线 OA, OB */}
            <Line.Segment point1={O} point2={A} style="dashed" color="slate" opacity={0.3} />
            <Line.Segment point1={O} point2={B} style="dashed" color="slate" opacity={0.3} />

            {/* 数据展示 */}
            <Text x={-3.5} y={3.5} attach="nw" size={14} color="indigo">
                {`CD ⊥ AB`}
            </Text>
            <Text x={-3.5} y={3.1} attach="nw" size={14} color="green">
                {`AE = ${AE.toFixed(2)}`}
            </Text>
            <Text x={-3.5} y={2.7} attach="nw" size={14} color="green">
                {`EB = ${EB.toFixed(2)}`}
            </Text>
            <Text x={-3.5} y={2.3} attach="nw" size={12} color="slate">
                (AE = EB, 垂径定理)
            </Text>
        </MathDiagram>
    );
};

export default CircleChordDiagram;
