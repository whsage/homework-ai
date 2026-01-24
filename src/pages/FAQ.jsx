import { HelpCircle, BookOpen, DollarSign, Shield, Zap, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FAQItem = ({ question, answer, icon: Icon }) => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                    <Icon className="text-indigo-600 dark:text-indigo-400" size={24} />
                </div>
                <div>
                    <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{question}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const { t } = useLanguage();

    const faqs = [
        {
            icon: HelpCircle,
            question: t('faq.q1'),
            answer: t('faq.a1')
        },
        {
            icon: DollarSign,
            question: t('faq.q2'),
            answer: t('faq.a2')
        },
        {
            icon: BookOpen,
            question: t('faq.q3'),
            answer: t('faq.a3')
        },
        {
            icon: Shield,
            question: t('faq.q4'),
            answer: t('faq.a4')
        },
        {
            icon: Zap,
            question: t('faq.q5'),
            answer: t('faq.a5')
        },
        {
            icon: MessageCircle,
            question: t('faq.q6'),
            answer: t('faq.a6')
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">{t('faq.title')}</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {t('faq.subtitle')}
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>

                {/* Additional Info */}
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">{t('faq.stillHaveQuestions')}</h2>
                    <p className="mb-6 text-indigo-100">
                        {t('faq.helpText')}
                    </p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                    >
                        {t('faq.startUsing')}
                    </button>
                </div>

                {/* Features Highlight */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
                        <div className="text-4xl mb-3">🎯</div>
                        <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{t('faq.features.guided')}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{t('faq.features.guidedDesc')}</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
                        <div className="text-4xl mb-3">📚</div>
                        <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{t('faq.features.fullSubject')}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{t('faq.features.fullSubjectDesc')}</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
                        <div className="text-4xl mb-3">📊</div>
                        <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{t('faq.features.stats')}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{t('faq.features.statsDesc')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
