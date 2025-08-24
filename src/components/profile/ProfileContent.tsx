import { PROFILE_CONTENT_STYLE as style } from '@/constants/styles';
import { useProfileQuery } from '@/hooks/useProfileQuery';
import { useWebhookQuery } from '@/hooks/useWebhookQuery';
import WebhookList from './WebhookList';
import { User2 } from 'lucide-react';
import useWebhookDeleteMutation from '@/hooks/useWebhookDeleteMutation';
import { useQueryClient } from '@tanstack/react-query';

type Props = {
  onWebhookClick?: () => void;
};

const ProfileContent = ({ onWebhookClick }: Props) => {
  const { data: profileData } = useProfileQuery();
  const { data: webhookData } = useWebhookQuery();
  const { mutateDelete } = useWebhookDeleteMutation();
  const queryClient = useQueryClient();

  const handleWebhookDelete = (id: number) => {
    if (confirm('이 웹훅을 삭제하시겠습니까?')) {
      mutateDelete(id, {
        onSuccess: () => {
          alert('웹훅이 성공적으로 삭제되었습니다.');
          queryClient.invalidateQueries({ queryKey: ['webhook'] });
        },
        onError: (error) => {
          console.error('웹훅 등록 실패:', error);
          alert('웹훅 삭제에 실패했습니다.');
        },
      });
    }
  };

  return (
    <div className={style.wrapper}>
      <User2 className={style.avatarIcon} />

      <div className={style.infoContainer}>
        {/* 기본 정보 */}
        <div className={style.row}>
          <span className={style.label}>닉네임</span>
          <span>{profileData?.nickname}</span>
        </div>
        <div className={style.row}>
          <span className={style.label}>이메일</span>
          <span>{profileData?.email}</span>
        </div>
        <div className={style.rowWithCenter}>
          <span className={style.label}>소셜로그인</span>
          <div className={style.socialIconWrapper}>
            <img
              src={
                profileData?.provider === 'KAKAO'
                  ? '/src/assets/icons/login_icon_kakao.png'
                  : '/src/assets/icons/login_icon_naver.png'
              }
              alt="소셜 로그인"
              className={style.socialIconImage}
            />
          </div>
        </div>

        {/* 웹훅 영역 */}
        <div className={style.rowWithCenter}>
          <span className={style.label}>웹훅</span>
        </div>
        <div>
          <div className="bg-gray-50 border rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-700">
                외부 플랫폼으로 알림을 받을 수 있어요.
              </p>
              <button className={style.webhookButton} onClick={onWebhookClick}>
                연동 하기
              </button>
            </div>
            <div className="max-h-48 overflow-y-auto pr-1">
              <WebhookList
                webhooks={webhookData ?? []}
                onDelete={handleWebhookDelete}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
