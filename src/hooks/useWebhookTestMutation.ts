import { testWebhook } from '@/api/profile';
import { useMutation } from '@tanstack/react-query';

const useWebhookTestMutation = () => {
  const testMutation = useMutation({
    mutationFn: testWebhook,
    onSuccess: () => {},
    onError(error) {
      console.error('웹훅 테스트에 실패했습니다.', error);
    },
  });

  return { mutateTest: testMutation.mutate };
};

export default useWebhookTestMutation;
