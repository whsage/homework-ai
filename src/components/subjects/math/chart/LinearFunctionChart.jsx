import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const LinearFunctionChart = () => {
    const data = [
        { x: -5, y: -9 },
        { x: 0, y: 1 },
        { x: 5, y: 11 }
    ];

    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                    data={data} 
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x" type="number" domain={['auto', 'auto']} />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="y" stroke="#8884d8" name="y = 2x + 1" />
                </LineChart>
            </ResponsiveContainer>
            <p className="text-center text-sm text-slate-500 mt-2">示例函数: y = 2x + 1</p>
        </div>
    );
};

export default LinearFunctionChart;
