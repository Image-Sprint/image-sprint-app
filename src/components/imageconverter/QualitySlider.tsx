type Props = {
  quality: number;
  onQualityChange: (val: number) => void;
};

const QualitySlider = ({ quality, onQualityChange }: Props) => (
  <div className="mt-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      품질 (Quality)
    </label>
    <div className="flex items-center gap-2">
      <input
        type="range"
        min={1}
        max={100}
        step={1}
        value={quality}
        onChange={(e) => onQualityChange(Number(e.target.value))}
        className="w-full"
      />
      <span className="text-sm w-10 text-right">{quality}%</span>
    </div>
  </div>
);

export default QualitySlider;
