import { deleteWebhook } from '@/api/profile';
import { useMutation } from '@tanstack/react-query';

const useWebhookDeleteMutation = () => {
  const deleteMutation = useMutation({
    mutationFn: deleteWebhook,
    onSuccess: () => {},
    onError(error) {
      console.error('웹훅 테스트에 실패했습니다.', error);
    },
  });

  return { mutateDelete: deleteMutation.mutate };
};

export default useWebhookDeleteMutation;
