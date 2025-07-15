import type { WebhookData } from '@/types/profile';

type Props = {
  webhooks: WebhookData[];
  onDelete: (id: number) => void;
};

const WebhookList = ({ webhooks, onDelete }: Props) => {
  return (
    <div className="mt-6">
      {webhooks.length === 0 ? (
        <p className="text-sm text-gray-500">등록된 웹훅이 없습니다.</p>
      ) : (
        <div className="space-y-2">
          {webhooks.map((wh) => (
            <div
              key={wh.webhookId}
              className="relative px-3 py-2 bg-white border rounded-md"
            >
              <div className="text-sm text-gray-700 overflow-hidden pr-12">
                <span className="font-semibold text-gray-800">{wh.type}</span>
                <div className="text-xs text-gray-500 break-all">{wh.url}</div>
              </div>

              <button
                onClick={() => onDelete(wh.webhookId)}
                className="absolute top-2 right-2 text-xs text-red-500 hover:underline"
              >
                삭제
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WebhookList;
