import { positions, styleMap } from '@/constants/imageConverter';
import type { WatermarkPosition } from '@/types/imageConverter';
import { cn } from '@/utils/classUtils';
import { X } from 'lucide-react';
import { useEffect } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
  watermarkText: string;
  setWatermarkText: (val: string) => void;
  watermarkPosition: WatermarkPosition | null;
  setWatermarkPosition: (val: WatermarkPosition | null) => void;
  watermarkOpacity: number;
  setWatermarkOpacity: (val: number) => void;
  resetWatermarkValues: () => void;
};

const WatermarkModal = ({
  isOpen,
  onClose,
  onApply,
  watermarkText,
  setWatermarkText,
  watermarkPosition,
  setWatermarkPosition,
  watermarkOpacity,
  setWatermarkOpacity,
  resetWatermarkValues,
}: Props) => {
  useEffect(() => {
    resetWatermarkValues();
  }, [resetWatermarkValues]);

  if (!isOpen) return null;

  const getPositionClass = (position: WatermarkPosition): string => {
    return `absolute ${styleMap[position]}`;
  };

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-[400px] p-6 shadow-lg relative">
        {/* 헤더 */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">워터마크 추가</h2>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* 프리뷰 */}
        <div className="flex items-center justify-center mb-4">
          <div className="relative w-[240px] h-[160px] border rounded bg-gray-100 overflow-hidden">
            <img
              src="/placeholder-image.png"
              alt="preview"
              className="w-full h-full object-cover"
            />
            {watermarkText && watermarkPosition && (
              <div
                className={cn(
                  'text-xs font-bold text-black px-2 py-1 bg-white/60 border border-dashed border-black whitespace-nowrap',
                  getPositionClass(watermarkPosition)
                )}
                style={{ opacity: watermarkOpacity }}
              >
                {watermarkText}
              </div>
            )}
          </div>
        </div>

        {/* 포지션 + 투명도 */}
        <div className="border rounded-md p-4 mb-4">
          <div className="grid grid-cols-3 gap-2 mb-2">
            {positions.map((pos, idx) => (
              <button
                key={idx}
                className={`w-8 h-8 rounded-sm border text-center text-xs font-bold ${
                  watermarkPosition === pos.value
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-blue-100'
                }`}
                onClick={() =>
                  setWatermarkPosition(pos.value as WatermarkPosition)
                }
              >
                {pos.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 w-16">Opacity</span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={watermarkOpacity}
              onChange={(e) => setWatermarkOpacity(parseFloat(e.target.value))}
              className="w-full"
            />
            <span className="text-sm w-6 text-right">
              {Math.round(watermarkOpacity * 100)}%
            </span>
          </div>
        </div>

        {/* 텍스트 입력 */}
        <div className="mb-4">
          <input
            type="text"
            value={watermarkText}
            onChange={(e) => setWatermarkText(e.target.value)}
            placeholder="WATERMARK"
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        {/* 버튼 */}
        <div className="flex gap-2 justify-end">
          <button
            onClick={resetWatermarkValues}
            className="px-4 py-2 rounded bg-gray-200 text-sm"
          >
            초기화
          </button>
          <button
            onClick={onApply}
            className="px-4 py-2 rounded bg-blue-500 text-white text-sm hover:bg-blue-600"
          >
            적용 하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatermarkModal;
