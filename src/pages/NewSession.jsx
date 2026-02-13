import UploadZone from '../components/business/UploadZone';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';

const NewSession = () => {
    const { t } = useLanguage();

    return (
        <>
            <Helmet>
                <title>上传作业 - 开始AI辅导 | AI7Miao</title>
                <meta name="description" content="上传您的作业题目，开始AI智能辅导。支持拍照上传，AI自动识别并提供苏格拉底式教学辅导。" />
                <meta name="keywords" content="上传作业,AI辅导,拍照识别,作业题目,智能辅导" />
            </Helmet>

            <div className="max-w-2xl mx-auto py-10">
                <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">{t('newSession.title')}</h1>
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <UploadZone />
                </div>
                <p className="text-center text-slate-500 dark:text-slate-400 mt-6 text-sm">
                    {t('newSession.uploadTip')}
                </p>
            </div>
        </>
    );
};

export default NewSession;
