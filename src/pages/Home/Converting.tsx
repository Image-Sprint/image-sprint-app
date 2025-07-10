import { Loader2 } from 'lucide-react';

const Converting = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-4" />
      <h2 className="text-lg font-semibold text-gray-700">
        이미지 변환 중입니다...
      </h2>
      <p className="text-sm text-gray-500 mt-1">잠시만 기다려주세요.</p>
    </div>
  );
};

export default Converting;
