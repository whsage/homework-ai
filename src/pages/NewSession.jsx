import UploadZone from '../components/business/UploadZone';

const NewSession = () => {
    return (
        <div className="max-w-2xl mx-auto py-10">
            <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">上传新作业</h1>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <UploadZone />
            </div>
            <p className="text-center text-slate-500 mt-6 text-sm">
                支持格式：JPG、PNG、PDF。最大 10MB。
            </p>
        </div>
    );
};

export default NewSession;
