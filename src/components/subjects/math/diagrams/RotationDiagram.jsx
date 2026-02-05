import React, { useState } from 'react';
import { useMovablePoint, Polygon, Text } from 'mafs';
import MathDiagram from '../MathDiagram';

const RotationDiagram = () => {
    const [angle, setAngle] = useState(60);

    const point1 = useMovablePoint([-1, -1]);
    const point2 = useMovablePoint([2, -1]);
    const point3 = useMovablePoint([0, 2]);

    const A = point1.point;
    const B = point2.point;
    const C = point3.point;

    const toRad = (deg) => (deg * Math.PI) / 180;
    const angleRad = toRad(angle);

    const rotate = (p) => [
        p[0] * Math.cos(angleRad) - p[1] * Math.sin(angleRad),
        p[0] * Math.sin(angleRad) + p[1] * Math.cos(angleRad)
    ];

    const A_prime = rotate(A);
    const B_prime = rotate(B);
    const C_prime = rotate(C);

    return (
        <MathDiagram height={400} viewBox={{ x: [-4, 4], y: [-4, 4] }}>
            <Polygon points={[A, B, C]} color="blue" opacity={0.3} />
            <Polygon points={[A_prime, B_prime, C_prime]} color="indigo" />

            <Text x={A[0]} y={A[1] + 0.3} size={20}>A</Text>

            {point1.element}
            {point2.element}
            {point3.element}

            <Text x={-3.5} y={3.5} attach="nw" size={14} color="indigo">
                {`Rotation: ${angle}°`}
            </Text>
        </MathDiagram>
    );
};

export default RotationDiagram;
