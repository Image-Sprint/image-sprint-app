import LoadingSpinner from '@/components/common/LoadingSpinner';
import JobContent from '@/components/job/JobContent';
import { Suspense } from 'react';

const ProcessingJobResult = () => {
  return (
    <div className="p-4  bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <p className="text-center text-lg font-bold text-gray-900 mb-4">
          작업물은 하루 동안 다운로드 가능합니다.
        </p>
        <div className="space-y-3">
          <Suspense fallback={<LoadingSpinner />}>
            <JobContent />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ProcessingJobResult;
