import Button from '@/components/common/Button';

type Props = {
  watermarkPreviewUrl: string | null;
  onOpenModal: () => void;
};

const WatermarkPreview = ({ watermarkPreviewUrl, onOpenModal }: Props) => (
  <div>
    <h3 className="font-semibold text-gray-700 mb-2">워터마크 추가</h3>
    <div className="border border-dashed border-blue-200 rounded-lg p-3 mb-2 text-center text-sm text-gray-400">
      {watermarkPreviewUrl ? (
        <img
          src={watermarkPreviewUrl}
          alt="preview"
          className="w-full max-h-[18vh] object-contain rounded"
        />
      ) : (
        '워터마크 이미지가 아직 선택되지 않았습니다.'
      )}
    </div>
    <Button
      className="w-full bg-blue-400 hover:bg-blue-500 text-white"
      onClick={onOpenModal}
    >
      워터마크 추가하기
    </Button>
  </div>
);

export default WatermarkPreview;
