import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const InverseProportionalChart = () => {
    const data = [
        { x: 1, y: 6 },
        { x: 2, y: 3 },
        { x: 3, y: 2 },
        { x: 6, y: 1 }
    ];

    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x" type="number" domain={[0, 8]} />
                    <YAxis domain={[0, 8]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="y" stroke="#82ca9d" name="y = 6/x" />
                </LineChart>
            </ResponsiveContainer>
            <p className="text-center text-sm text-slate-500 mt-2">示例函数: y = 6/x (x {'>'} 0)</p>
        </div>
    );
};

export default InverseProportionalChart;
