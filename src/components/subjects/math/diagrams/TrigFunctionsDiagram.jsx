import React from 'react';
import { useMovablePoint, Polygon, Line, Text, Point } from 'mafs';
import MathDiagram from '../MathDiagram';

const TrigFunctionsDiagram = () => {
    const radius = 3;
    const O = [0, 0];

    // Constrain point to first quadrant on the circle
    const pointB = useMovablePoint([2.12, 2.12], {
        constrain: ([x, y]) => {
            const angle = Math.atan2(y, x);
            // Limit angle between ~5 degrees and ~85 degrees
            const clampedAngle = Math.max(0.1, Math.min(1.5, angle));
            return [radius * Math.cos(clampedAngle), radius * Math.sin(clampedAngle)];
        }
    });

    const B = pointB.point;
    const A = [B[0], 0]; // Projection on x-axis

    // Calculate values
    const angleRad = Math.atan2(B[1], B[0]);
    const angleDeg = (angleRad * 180 / Math.PI).toFixed(1);
    const sinVal = (B[1] / radius).toFixed(3);
    const cosVal = (B[0] / radius).toFixed(3);
    const tanVal = (B[1] / B[0]).toFixed(3);

    return (
        <MathDiagram height={400} viewBox={{ x: [-1, 4], y: [-1, 4] }}>
            {/* Triangle OAB */}
            <Polygon points={[O, A, B]} color="indigo" opacity={0.1} />

            {/* Sides */}
            <Line.Segment point1={O} point2={B} color="slate" />
            <Line.Segment point1={O} point2={A} color="blue" weight={3} />
            <Line.Segment point1={A} point2={B} color="red" weight={3} />

            {/* Points */}
            <Point x={O[0]} y={O[1]} color="slate" />
            <Point x={A[0]} y={A[1]} color="blue" />

            {/* Labels */}
            <Text x={-0.2} y={-0.2} size={16}>O</Text>
            <Text x={A[0]} y={-0.3} size={16} color="blue">A</Text>
            <Text x={B[0] + 0.1} y={B[1] + 0.1} size={16}>B</Text>

            {/* Interactive Point */}
            {pointB.element}

            {/* Values Panel */}
            <Text x={0.5} y={3.5} attach="nw" size={14} color="indigo">
                {`Angle = ${angleDeg}°`}
            </Text>
            <Text x={0.5} y={3.1} attach="nw" size={14} color="red">
                {`sin = ${sinVal}`}
            </Text>
            <Text x={0.5} y={2.7} attach="nw" size={14} color="blue">
                {`cos = ${cosVal}`}
            </Text>
            <Text x={0.5} y={2.3} attach="nw" size={14} color="slate">
                {`tan = ${tanVal}`}
            </Text>
        </MathDiagram>
    );
};

export default TrigFunctionsDiagram;
