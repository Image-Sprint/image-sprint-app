import type { JobStatus } from '@/types/job';
import { formatBytesToMB } from '@/utils/\bformatUtils';
import { Download, Loader2 } from 'lucide-react';

type JobItemProps = {
  jobId: number;
  status: JobStatus;
  imageCount: number;
  originalSize: number;
  createdAt: string;
  expiredAt?: string | null;
  zipUrl?: string;
  progress?: number;
};

const JobItem = (props: JobItemProps) => {
  const {
    jobId,
    status,
    imageCount,
    originalSize,
    createdAt,
    expiredAt,
    zipUrl,
    progress = 0,
  } = props;

  const isExpired =
    expiredAt !== null &&
    expiredAt !== undefined &&
    new Date(expiredAt).getTime() < Date.now();

  const isDone =
    status === 'DONE' || (status === 'PROCESSING' && progress === 1);
  const isProcessing = status === 'PROCESSING' && progress < 1 && !isDone;

  return (
    <div className="bg-white shadow-sm rounded-lg px-6 py-4 border border-gray-200">
      {/* 상단 제목/시간 */}
      <div className="flex justify-between items-center mb-2">
        <div className="font-medium">{`작업 #${jobId}`}</div>
        <div className="text-sm text-gray-500">{createdAt}</div>
      </div>

      {/* 상태 설명 */}
      <div className="text-sm text-gray-700 flex items-center gap-2">
        {isProcessing && !isExpired && (
          <>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-400 animate-pulse" />
            <span>{`진행중... ${Math.round(progress * 100) || 0}%`}</span>
          </>
        )}
        {isDone && !isExpired && (
          <>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <span>{`완료 총 ${imageCount}개 (총 ${formatBytesToMB(originalSize)})`}</span>
          </>
        )}
        {status === 'FAILED' && (
          <>
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span>작업 실패</span>
          </>
        )}
        {status !== 'FAILED' && isExpired && (
          <>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span>기한 만료</span>
          </>
        )}
      </div>

      {/* 하단 다운로드 버튼 */}
      <div className="flex justify-end items-center mt-2 gap-2">
        {isDone && !isExpired && (
          <a
            href={zipUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center text-blue-600 text-sm gap-1 border border-blue-500 rounded px-2 py-1"
          >
            <Download size={14} /> ZIP 다운로드
          </a>
        )}
        {isProcessing && (
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <Loader2 className="animate-spin w-4 h-4" /> ZIP 다운로드
          </div>
        )}
        {status === 'FAILED' && (
          <div className="text-sm text-red-500 flex items-center gap-1">
            <span className="text-red-500">✕</span> ZIP 다운로드
          </div>
        )}
        {status !== 'FAILED' && isExpired && (
          <button
            className="flex items-center text-sm gap-1 border border-gray-300 rounded px-2 py-1 text-gray-400 cursor-not-allowed"
            disabled
          >
            <Download size={14} /> ZIP 다운로드
          </button>
        )}
      </div>
    </div>
  );
};

export default JobItem;
