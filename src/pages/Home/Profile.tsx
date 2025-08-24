import LoadingSpinner from '@/components/common/LoadingSpinner';
import ProfileContent from '@/components/profile/ProfileContent';
import WebhookModal from '@/components/profile/WebhookModal';
import { PROFILE_STYLE as style } from '@/constants/styles';
import useLogoutMutation from '@/hooks/useLogoutMutation';
import useWebhookRegisterMutation from '@/hooks/useWebhookRegisterMutation';
import useWebhookTestMutation from '@/hooks/useWebhookTestMutation';
import type { WebhookType } from '@/types/profile';
import { useQueryClient } from '@tanstack/react-query';
import { Suspense, useEffect, useState } from 'react';

const Profile = () => {
  const { mutateLogout, isPending } = useLogoutMutation();
  const [isWebhookModalOpen, setIsWebhookModalOpen] = useState(false);
  const [isTestPassed, setIsTestPassed] = useState(false);
  const [webhookType, setWebhookType] = useState<WebhookType>('SLACK');
  const [webhookUrl, setWebhookUrl] = useState('');
  const queryClient = useQueryClient();

  const { mutateTest } = useWebhookTestMutation();
  const { mutateRegister } = useWebhookRegisterMutation();

  const handleCloseModal = () => {
    setIsWebhookModalOpen(false);
    setIsTestPassed(false);
    setWebhookType('SLACK');
    setWebhookUrl('');
  };

  useEffect(() => {
    setIsTestPassed(false);
  }, [webhookUrl]);

  const handleConfirm = () => {
    if (!webhookUrl) {
      alert('웹훅 URL을 입력해주세요.');
      return;
    }

    mutateTest(
      { type: webhookType, url: webhookUrl },
      {
        onSuccess: () => {
          setIsTestPassed(true);
          alert('웹훅 테스트가 성공적으로 완료되었습니다.');
        },
        onError: (error) => {
          console.error('웹훅 테스트 실패:', error);
          alert('웹훅 테스트에 실패했습니다. URL을 확인해주세요.');
        },
      }
    );
  };

  const handleRegisterWebhook = () => {
    if (!isTestPassed) {
      alert('웹훅 테스트를 먼저 진행해주세요.');
      return;
    }
    mutateRegister(
      { type: webhookType, url: webhookUrl },
      {
        onSuccess: () => {
          handleCloseModal();
          queryClient.invalidateQueries({ queryKey: ['webhook'] });
          alert('웹훅이 성공적으로 등록되었습니다.');
        },
        onError: (error) => {
          console.error('웹훅 등록 실패:', error);
          alert('웹훅 등록에 실패했습니다. URL을 확인해주세요.');
        },
      }
    );
  };

  return (
    <div className={style.pageWrapper}>
      {/* 본문 영역 */}
      <main className={style.main}>
        <Suspense fallback={<LoadingSpinner />}>
          <ProfileContent onWebhookClick={() => setIsWebhookModalOpen(true)} />
        </Suspense>

        {/* 하단 로그아웃 버튼 */}
        <div className={style.logoutWrapper}>
          <button
            onClick={() => mutateLogout()}
            disabled={isPending}
            className={style.logoutButton}
          >
            로그아웃
          </button>
        </div>
      </main>

      <WebhookModal
        isOpen={isWebhookModalOpen}
        webhookType={webhookType}
        setWebhookType={setWebhookType}
        isTestPassed={isTestPassed}
        onClose={handleCloseModal}
        onApply={handleRegisterWebhook}
        onConfirm={handleConfirm}
        setWebhookUrl={setWebhookUrl}
        webhookUrl={webhookUrl}
      />
    </div>
  );
};

export default Profile;
