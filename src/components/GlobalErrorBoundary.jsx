import React from 'react';

class GlobalErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Global Error Boundary caught an error", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white p-8 overflow-auto">
                    <div className="max-w-3xl w-full bg-red-50 border border-red-200 rounded-xl p-6 shadow-2xl">
                        <h1 className="text-2xl font-bold text-red-800 mb-4">应用发生严重错误</h1>
                        <p className="text-red-700 mb-4">很抱歉，程序遇到了无法恢复的错误。</p>

                        <div className="bg-red-100 p-4 rounded-lg border border-red-200 overflow-auto mb-6">
                            <h3 className="font-mono font-bold text-red-900 mb-2">Error:</h3>
                            <pre className="text-sm font-mono text-red-800 whitespace-pre-wrap">
                                {this.state.error && this.state.error.toString()}
                            </pre>
                        </div>

                        <div className="bg-slate-100 p-4 rounded-lg border border-slate-200 overflow-auto max-h-96">
                            <h3 className="font-mono font-bold text-slate-900 mb-2">Component Stack:</h3>
                            <pre className="text-xs font-mono text-slate-700 whitespace-pre-wrap">
                                {this.state.errorInfo && this.state.errorInfo.componentStack}
                            </pre>
                        </div>

                        <div className="mt-6 flex gap-4">
                            <button
                                onClick={() => window.location.reload()}
                                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold transition-colors"
                            >
                                刷新页面
                            </button>
                            <button
                                onClick={() => window.location.href = '/'}
                                className="px-6 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 font-semibold transition-colors"
                            >
                                返回首页
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default GlobalErrorBoundary;
