import React, { useState } from 'react';
import { useMovablePoint, Polygon, Text, Line, Point } from 'mafs';
import MathDiagram from '../MathDiagram';

const SimilarityDiagram = () => {
    const [scale, setScale] = useState(1.5);

    // Draggable vertices for the original triangle
    const point1 = useMovablePoint([1, 1]);
    const point2 = useMovablePoint([3, 1]);
    const point3 = useMovablePoint([1.5, 2.5]);

    const A = point1.point;
    const B = point2.point;
    const C = point3.point;

    // Origin
    const O = [0, 0];

    // Calculate scaled vertices
    const A_prime = [A[0] * scale, A[1] * scale];
    const B_prime = [B[0] * scale, B[1] * scale];
    const C_prime = [C[0] * scale, C[1] * scale];

    return (
        <MathDiagram height={400} viewBox={{ x: [-1, 7], y: [-1, 6] }}>
            {/* Original Triangle */}
            <Polygon points={[A, B, C]} color="blue" opacity={0.3} />

            {/* Scaled Triangle */}
            <Polygon points={[A_prime, B_prime, C_prime]} color="indigo" />

            {/* Center of similarity */}
            <Point x={0} y={0} color="red" />
            <Text x={-0.3} y={-0.3} color="red" size={16}>O</Text>

            {/* Labels */}
            <Text x={A[0]} y={A[1] - 0.3} size={16} color="blue">A</Text>
            <Text x={A_prime[0]} y={A_prime[1] - 0.3} size={16} color="indigo">A'</Text>

            {/* Interactive points */}
            {point1.element}
            {point2.element}
            {point3.element}

            {/* Info */}
            <Text x={0.5} y={5.5} attach="nw" size={14} color="indigo">
                {`Scale Factor k = ${scale.toFixed(1)}`}
            </Text>
        </MathDiagram>
    );
};

export default SimilarityDiagram;
