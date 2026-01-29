import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle, XCircle, HelpCircle, ArrowRight, RefreshCw, Lightbulb } from 'lucide-react';
import { SmartPractice } from '../../services/smartPractice';
import { useUser } from '../../context/UserContext';
import './SmartPracticeSession.css';

const SmartPracticeSession = ({ topicId, topicName, onClose }) => {
    const { user } = useUser();
    const [status, setStatus] = useState('generating'); // generating, playing, feedback, summary
    const [problems, setProblems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [feedback, setFeedback] = useState(null);
    const [stats, setStats] = useState({ correct: 0, total: 0 });
    const [showHint, setShowHint] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 初始化: 生成题目
    useEffect(() => {
        generateProblems();
    }, [topicId]);

    const generateProblems = async () => {
        setStatus('generating');
        try {
            const generated = await SmartPractice.generateProblems(user.id, topicId, 3);
            if (generated && generated.length > 0) {
                setProblems(generated);
                setStatus('playing');
                setCurrentIndex(0);
                setStats({ correct: 0, total: generated.length });
            } else {
                // 处理生成失败的情况
                alert('题目生成有点慢，请稍后再试');
                onClose && onClose();
            }
        } catch (error) {
            console.error('生成题目失败:', error);
            setStatus('error');
        }
    };

    const handleSubmit = async () => {
        if (!userAnswer.trim()) return;

        setIsSubmitting(true);
        try {
            const currentProblem = problems[currentIndex];
            const result = await SmartPractice.provideFeedback(user.id, currentProblem, userAnswer);

            setFeedback(result);
            setStatus('feedback');

            if (result.isCorrect) {
                setStats(prev => ({ ...prev, correct: prev.correct + 1 }));
            }
        } catch (error) {
            console.error('提交答案失败:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleNext = () => {
        setFeedback(null);
        setUserAnswer('');
        setShowHint(false);

        if (currentIndex < problems.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setStatus('playing');
        } else {
            setStatus('summary');
        }
    };

    const handleRetry = () => {
        generateProblems();
    };

    // 渲染不同状态
    if (status === 'generating') {
        return (
            <div className="practice-container loading">
                <Loader2 className="w-10 h-10 animate-spin text-indigo-600 mb-4" />
                <h3>正在为你定制练习题...</h3>
                <p className="text-slate-500">基于你的学习进度生成中最适合的题目</p>
            </div>
        );
    }

    if (status === 'summary') {
        return (
            <div className="practice-container summary">
                <div className="summary-card">
                    <h2>练习完成! 🎉</h2>
                    <div className="score-circle">
                        <span className="score">{Math.round((stats.correct / stats.total) * 100)}%</span>
                        <span className="label">正确率</span>
                    </div>
                    <p>
                        你答对了 {stats.correct} / {stats.total} 道题
                    </p>
                    <div className="actions">
                        <button onClick={handleRetry} className="btn-primary">
                            <RefreshCw className="w-4 h-4" /> 再练一组
                        </button>
                        <button onClick={onClose} className="btn-secondary">
                            返回学习
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const problem = problems[currentIndex];

    return (
        <div className="practice-container">
            {/* 顶栏进度 */}
            <div className="practice-header">
                <span className="topic-name">{topicName}</span>
                <div className="progress-indicator">
                    题 {currentIndex + 1} / {problems.length}
                </div>
            </div>

            {/* 题目区域 */}
            <div className="problem-card">
                <div className="problem-type">
                    {problem.type === 'choice' ? '选择题' : '填空题'}
                    {problem.skills && <span className="skill-tag">{problem.skills[0]}</span>}
                </div>

                <div className="problem-content">
                    {problem.question}
                </div>

                {/* 选项区域 (如果是选择题) */}
                {problem.type === 'choice' && (
                    <div className="options-grid">
                        {problem.options.map((opt, idx) => (
                            <button
                                key={idx}
                                className={`option-btn ${userAnswer === opt ? 'selected' : ''}`}
                                onClick={() => status === 'playing' && setUserAnswer(opt)}
                                disabled={status !== 'playing'}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                )}

                {/* 输入区域 (如果是填空题) */}
                {problem.type === 'fill' && (
                    <div className="input-area">
                        <input
                            type="text"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            placeholder="请输入你的答案"
                            disabled={status !== 'playing'}
                            className="fill-input"
                        />
                    </div>
                )}
            </div>

            {/* 提示区域 */}
            {status === 'playing' && !showHint && problem.hint && (
                <button
                    className="hint-trigger"
                    onClick={() => setShowHint(true)}
                >
                    <Lightbulb className="w-4 h-4" /> 需要提示?
                </button>
            )}

            {showHint && (
                <div className="hint-box animate-fadeIn">
                    <strong>💡 提示:</strong> {problem.hint}
                </div>
            )}

            {/* 反馈区域 */}
            {status === 'feedback' && feedback && (
                <div className={`feedback-card animate-slideUp ${feedback.isCorrect ? 'correct' : 'wrong'}`}>
                    <div className="feedback-header">
                        {feedback.isCorrect ? (
                            <><CheckCircle className="w-6 h-6" /> 回答正确!</>
                        ) : (
                            <><XCircle className="w-6 h-6" /> 需要再想一想</>
                        )}
                    </div>
                    <div className="feedback-content">
                        {feedback.feedback}
                    </div>
                    {!feedback.isCorrect && feedback.suggestion && (
                        <div className="feedback-suggestion">
                            👉 {feedback.suggestion}
                        </div>
                    )}
                    <div className="feedback-explanation">
                        <strong>解析:</strong> {problem.solution?.explanation || feedback.explanation}
                    </div>
                </div>
            )}

            {/* 操作栏 */}
            <div className="action-bar">
                {status === 'playing' ? (
                    <button
                        className="btn-submit"
                        onClick={handleSubmit}
                        disabled={!userAnswer || isSubmitting}
                    >
                        {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : '提交答案'}
                    </button>
                ) : (
                    <button
                        className="btn-next"
                        onClick={handleNext}
                    >
                        下一题 <ArrowRight className="w-5 h-5" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SmartPracticeSession;
