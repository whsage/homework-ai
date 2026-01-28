import { MessageCircle, Sparkles } from 'lucide-react';

const AIChatSession = ({ title, summary, messages, userAvatar = "👤", aiAvatar = "🤖" }) => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-indigo-600" />
                {title}
            </h2>

            <div className="space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                        {msg.role === 'ai' && (
                            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                                <span className="text-lg">{aiAvatar}</span>
                            </div>
                        )}

                        <div className={`flex-1 max-w-md p-4 rounded-xl ${msg.role === 'user'
                                ? 'bg-blue-50 dark:bg-blue-900/20'
                                : msg.type === 'success'
                                    ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                                    : 'bg-indigo-50 dark:bg-indigo-900/20'
                            }`}>
                            <div className="text-slate-700 dark:text-slate-300">
                                {msg.content}
                            </div>
                        </div>

                        {msg.role === 'user' && (
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                <span className="text-lg">{userAvatar}</span>
                            </div>
                        )}
                    </div>
                ))}

                {summary && (
                    <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
                        <div className="flex items-start gap-2">
                            <Sparkles className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-slate-600 dark:text-slate-400">
                                {summary}
                            </div>
                        </div>
                    </div>
                )}

                <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-not-allowed opacity-60">
                    开始AI互动学习（即将推出）
                </button>
            </div>
        </div>
    );
};

export default AIChatSession;
