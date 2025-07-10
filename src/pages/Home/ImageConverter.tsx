import { useCallback, useState } from 'react';
import Button from '@/components/common/Button';
import { MAX_IMAGES } from '@/constants/imageConverter';
import useKeepAspectRatio from '@/hooks/useKeepAspectRatio';
import type { WatermarkPosition } from '@/types/imageConverter';
import WatermarkModal from '@/components/imageconverter/WatermarkModal';
import { generateWatermarkedPreview } from '@/utils/imageUtils';
import { useCreateJobMutation } from '@/hooks/useCreateJobMutation';
import ImageDropZone from '@/components/imageconverter/ImageDropZone';
import CompressOptions from '@/components/imageconverter/CompressOptions';
import QualitySlider from '@/components/imageconverter/QualitySlider';
import FormatSelector from '@/components/imageconverter/FormatSelector';
import WatermarkPreview from '@/components/imageconverter/WatermarkPreview';

const ImageConverter = () => {
  const [images, setImages] = useState<File[]>([]);
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(800);
  const [keepRatio, setKeepRatio] = useState(false);
  const [quality, setQuality] = useState(80);
  const [format, setFormat] = useState('jpeg');
  const [isWatermarkModalOpen, setIsWatermarkModalOpen] = useState(false);
  const [watermarkText, setWatermarkText] = useState('');
  const [watermarkPosition, setWatermarkPosition] =
    useState<WatermarkPosition | null>(null);
  const [watermarkOpacity, setWatermarkOpacity] = useState(1);
  const [watermarkPreviewUrl, setWatermarkPreviewUrl] = useState<string | null>(
    null
  );

  const { onWidthChange, onHeightChange } = useKeepAspectRatio({
    width,
    height,
    keepRatio,
    setWidth,
    setHeight,
  });

  const resetWatermarkValues = useCallback(() => {
    setWatermarkText('');
    setWatermarkPosition(null);
    setWatermarkOpacity(1);
    setWatermarkPreviewUrl(null);
  }, []);

  const handleApplyWatermark = async () => {
    if (!watermarkText || !watermarkPosition) return;

    const url = await generateWatermarkedPreview({
      imageUrl: '/placeholder-image.png',
      watermarkText,
      watermarkPosition,
      watermarkOpacity,
    });

    setWatermarkPreviewUrl(url);
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const newFiles = Array.from(files).filter((file) =>
      file.type.startsWith('image/')
    );

    const total = images.length + newFiles.length;
    if (total > MAX_IMAGES) {
      alert(`이미지는 최대 ${MAX_IMAGES}장까지만 추가할 수 있어요.`);
      return;
    }

    setImages((prev) => [...prev, ...newFiles]);
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const { mutateCreate } = useCreateJobMutation();

  const handleConvert = () => {
    if (images.length === 0) {
      alert('이미지를 먼저 선택해주세요.');
      return;
    }

    mutateCreate({
      options: {
        resizeWidth: width,
        resizeHeight: height,
        keepRatio,
        toFormat: format,
        quality,
        watermarkText: watermarkText || undefined,
        watermarkPosition: watermarkPosition || undefined,
        watermarkOpacity: watermarkText ? watermarkOpacity : undefined,
      },
      files: images,
    });
  };

  return (
    <div
      className="flex-1 overflow-y-auto max-h-[calc(100vh-64px-60px-48px)] pr-1 px-4"
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-[2fr_1fr] gap-4 h-full">
        {/* 왼쪽: 이미지 업로드 영역 */}
        <ImageDropZone
          images={images}
          onFilesAdd={handleFiles}
          onRemove={handleRemoveImage}
        />

        {/* 오른쪽: 옵션 영역 */}
        <div className="bg-white shadow rounded-2xl p-4 space-y-6 border-2 border-blue-500 overflow-y-auto mr-4">
          <CompressOptions
            width={width}
            height={height}
            keepRatio={keepRatio}
            onWidthChange={onWidthChange}
            onHeightChange={onHeightChange}
            onKeepRatioChange={setKeepRatio}
          />
          <QualitySlider quality={quality} onQualityChange={setQuality} />
          <FormatSelector format={format} onFormatChange={setFormat} />
          <WatermarkPreview
            watermarkPreviewUrl={watermarkPreviewUrl}
            onOpenModal={() => setIsWatermarkModalOpen(true)}
          />
          <Button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
            onClick={handleConvert}
          >
            변환 시작
          </Button>
        </div>
      </div>

      <WatermarkModal
        isOpen={isWatermarkModalOpen}
        onClose={() => setIsWatermarkModalOpen(false)}
        onApply={async () => {
          setIsWatermarkModalOpen(false);
          await handleApplyWatermark();
        }}
        watermarkText={watermarkText}
        setWatermarkText={setWatermarkText}
        watermarkPosition={watermarkPosition}
        setWatermarkPosition={setWatermarkPosition}
        watermarkOpacity={watermarkOpacity}
        setWatermarkOpacity={setWatermarkOpacity}
        resetWatermarkValues={resetWatermarkValues}
      />
    </div>
  );
};

export default ImageConverter;
