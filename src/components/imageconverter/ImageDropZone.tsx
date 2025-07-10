import { ImagePlus, X } from 'lucide-react';

type Props = {
  images: File[];
  onFilesAdd: (files: FileList | null) => void;
  onRemove: (index: number) => void;
};

const ImageDropZone = ({ images, onFilesAdd, onRemove }: Props) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onFilesAdd(e.dataTransfer.files);
  };

  return (
    <div
      className="bg-white shadow rounded-2xl p-4 border-2 border-blue-500 flex flex-col overflow-hidden"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {images.length === 0 ? (
        <div className="border-2 border-dashed border-blue-300 rounded-xl p-6 flex flex-col items-center justify-center h-60 mb-4">
          <label className="cursor-pointer text-blue-500 font-semibold">
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => onFilesAdd(e.target.files)}
            />
            여러 이미지 선택
          </label>
          <p className="text-gray-400 text-sm mt-2">
            여기에 이미지를 놓아주세요
          </p>
        </div>
      ) : (
        <div className="mb-4">
          <label className="inline-flex items-center gap-2 text-blue-500 font-medium cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200">
              <ImagePlus size={18} />
            </div>
            <span>이미지 추가</span>
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => onFilesAdd(e.target.files)}
            />
          </label>
          <div className="text-sm text-gray-500 mt-2">
            총{' '}
            <span className="font-medium text-blue-600">{images.length}</span>
            개의 이미지 선택됨
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 flex-1 overflow-y-auto pr-1">
        {images.map((file, idx) => (
          <div
            key={idx}
            className="relative group border rounded-lg overflow-hidden h-32 bg-white"
          >
            <img
              src={URL.createObjectURL(file)}
              alt={`preview-${idx}`}
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => onRemove(idx)}
              className="absolute top-1 right-1 p-1 bg-white/80 rounded-full hover:bg-red-100 text-red-500 invisible group-hover:visible"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDropZone;
