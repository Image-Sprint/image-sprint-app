import Input from '@/components/common/Input';

type Props = {
  width: number;
  height: number;
  keepRatio: boolean;
  onWidthChange: (value: number) => void;
  onHeightChange: (value: number) => void;
  onKeepRatioChange: (checked: boolean) => void;
};

const CompressOptions = ({
  width,
  height,
  keepRatio,
  onWidthChange,
  onHeightChange,
  onKeepRatioChange,
}: Props) => (
  <div>
    <h3 className="font-semibold text-gray-700 mb-2">압축 옵션</h3>
    <div className="flex items-center gap-2 mb-2">
      <Input
        type="number"
        className="w-24"
        value={width}
        onChange={(e) => onWidthChange(Number(e.target.value))}
      />
      <span className="text-gray-500">x</span>
      <Input
        type="number"
        className="w-24"
        value={height}
        onChange={(e) => onHeightChange(Number(e.target.value))}
      />
    </div>
    <label className="flex items-center gap-2 text-sm">
      <input
        type="checkbox"
        checked={keepRatio}
        onChange={(e) => onKeepRatioChange(e.target.checked)}
      />
      비율 유지
    </label>
  </div>
);

export default CompressOptions;
