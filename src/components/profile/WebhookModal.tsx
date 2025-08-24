import { X } from 'lucide-react';

type Props = {
  isOpen: boolean;
  webhookType?: 'SLACK' | 'DISCORD';
  setWebhookType?: (type: 'SLACK' | 'DISCORD') => void;
  onClose: () => void;
  onApply: () => void;
  onConfirm: () => void;
  isTestPassed: boolean;
  webhookUrl: string;
  setWebhookUrl: (val: string) => void;
};

const WebhookModal = ({
  isOpen,
  webhookType = 'SLACK',
  setWebhookType,
  onClose,
  onApply,
  onConfirm,
  setWebhookUrl,
  isTestPassed,
  webhookUrl,
}: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-[400px] p-6 shadow-lg relative">
        {/* 헤더 */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">웹 훅 연동</h2>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* URL 입력 + 확인 버튼 */}
        <div className="mb-4 flex gap-2">
          <input
            type="text"
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            placeholder="Webhook URL을 입력하세요"
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-blue-500 text-white text-sm whitespace-nowrap hover:bg-blue-600"
          >
            확인
          </button>
        </div>

        {/* 타입 선택 */}
        <div className="mb-4 flex gap-2">
          <button
            onClick={() => setWebhookType?.('SLACK')}
            className={`flex-1 px-4 py-2 rounded text-sm border ${
              webhookType === 'SLACK'
                ? 'bg-blue-100 border-blue-500 text-blue-600'
                : 'bg-white border-gray-300'
            }`}
          >
            Slack
          </button>
          <button
            onClick={() => setWebhookType?.('DISCORD')}
            className={`flex-1 px-4 py-2 rounded text-sm border ${
              webhookType === 'DISCORD'
                ? 'bg-blue-100 border-blue-500 text-blue-600'
                : 'bg-white border-gray-300'
            }`}
          >
            Discord
          </button>
        </div>

        {/* 버튼 영역 */}
        <div className="flex gap-2 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 text-sm"
          >
            닫기
          </button>
          <button
            onClick={onApply}
            className="px-4 py-2 rounded bg-blue-500 text-white text-sm hover:bg-blue-600 disabled:opacity-50"
            disabled={!isTestPassed}
          >
            적용 하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebhookModal;
