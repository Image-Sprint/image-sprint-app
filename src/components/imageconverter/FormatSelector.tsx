import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/common/Select';
import { FORMAT_OPTIONS } from '@/constants/imageConverter';

type Props = {
  format: string;
  onFormatChange: (value: string) => void;
};

const FormatSelector = ({ format, onFormatChange }: Props) => (
  <div>
    <h3 className="font-semibold text-gray-700 mb-2">포맷</h3>
    <Select>
      {({ open, setOpen }) => (
        <>
          <SelectTrigger onClick={() => setOpen(!open)}>
            <SelectValue
              value={
                FORMAT_OPTIONS.find((f) => f.value === format)?.label || ''
              }
              placeholder="형식 선택"
            />
          </SelectTrigger>
          <SelectContent open={open}>
            {FORMAT_OPTIONS.map(({ value, label }) => (
              <SelectItem
                key={value}
                value={value}
                onSelect={(val) => {
                  onFormatChange(val);
                  setOpen(false);
                }}
              >
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </>
      )}
    </Select>
  </div>
);

export default FormatSelector;
