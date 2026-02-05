import React from 'react';
import { Mafs, Coordinates, useMovablePoint, Theme } from 'mafs';
import 'mafs/core.css';
import 'mafs/font.css';

/**
 * MathDiagram - 通用数学绘图组件
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Mafs组件(如Point, Line, Text等)
 * @param {number} props.height - 高度
 * @param {Object} props.viewBox - 视图范围 {x: [min, max], y: [min, max]}
 * @param {boolean} props.showCoordinates - 是否显示坐标轴
 * @param {boolean} props.zoom - 是否允许缩放/平移
 * @param {string} props.className - 自定义样式类
 */
const MathDiagram = ({
    children,
    height = 300,
    viewBox = { x: [-5, 5], y: [-3, 3] },
    showCoordinates = true,
    zoom = false,
    className = ""
}) => {
    return (
        <div className={`math-diagram-container bg-slate-50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 ${className}`}>
            <Mafs
                height={height}
                viewBox={viewBox}
                zoom={zoom}
                pan={zoom}
            >
                {showCoordinates && <Coordinates.Cartesian />}
                {children}
            </Mafs>
        </div>
    );
};

export default MathDiagram;
